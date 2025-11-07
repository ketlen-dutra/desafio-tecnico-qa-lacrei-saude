import { defineConfig } from "cypress";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin as addPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "tests/automation/cypress/cucumber/**/*.feature",
    baseUrl: "https://paciente-staging.lacreisaude.com.br",
    supportFile: "tests/automation/cypress/support/e2e.ts",
    viewportWidth: 412,
    viewportHeight: 915,

    async setupNodeEvents(on, config) {
      // 👇 garante compatibilidade com o preprocessor
      await addPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
