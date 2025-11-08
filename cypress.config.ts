import { defineConfig } from "cypress";
// Removendo imports duplicados ou não utilizados
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin as addPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    // Busca arquivos .feature dentro da pasta cucumber e subpastas
    specPattern: "tests/automation/cypress/cucumber/**/*.feature", 
    baseUrl: "https://paciente-staging.lacreisaude.com.br",
    supportFile: "tests/automation/cypress/support/e2e.ts",
    // Configurações de viewport para Samsung Galaxy S20 Ultra, movidas para a config global
    viewportWidth: 412,
    viewportHeight: 915,

    async setupNodeEvents(on, config) {
      // Ajustando o caminho para os arquivos de steps.
      // Deve ser 'tests/automation/cypress/cucumber' ou um subdiretório dele.
      await addPlugin(on, {
        ...(config as any),
        stepDefinitions: [
          "tests/automation/cypress/cucumber/**/*.ts", // Procura steps dentro da sua pasta 'cucumber'
          "cypress/support/step_definitions/*.ts" // Procura no local padrão (opcional)
        ],
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "tests/automation/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});