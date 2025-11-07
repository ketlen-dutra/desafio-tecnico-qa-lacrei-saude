import { defineConfig } from "cypress";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@bahmutov/cypress-esbuild-preprocessor"; // <-- aqui é Bahmutov!

export default defineConfig({
  e2e: {
    specPattern: "tests/automation/cypress/cucumber/**/*.feature",
    baseUrl: process.env.BASE_URL || "https://paciente.lacreisaude.com.br/cadastro/",
    viewportWidth: 390,
    viewportHeight: 844,
    video: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "tests/automation/reports",
      overwrite: false,
      html: true,
      json: true
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createEsbuildPlugin(config));
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});
