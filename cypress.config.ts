import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "tests/automation/cypress/cucumber/**/*.feature",
    supportFile: "tests/automation/cypress/support/e2e.ts",
    baseUrl: "https://paciente-staging.lacreisaude.com.br",
    viewportWidth: 412,   // Samsung S20 Ultra
    viewportHeight: 915,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },

  // (opcional) se já estiver usando mochawesome:
  // reporter: "cypress-mochawesome-reporter",
  // reporterOptions: {
  //   reportDir: "tests/automation/reports",
  //   overwrite: false,
  //   html: true,
  //   json: true
  // }
});
