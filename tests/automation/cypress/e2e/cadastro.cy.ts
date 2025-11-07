import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso o app mobile", () => {
  cy.viewport(390, 844);
  cy.visit("/");
});

When("abro a tela de cadastro", () => {
  cy.contains("Criar conta").click();
});

When("preencho os campos obrigatórios corretamente", () => {
  cy.get('input[name="email"]').type("teste@qa.com");
  cy.get('input[name="senha"]').type("Teste@1234");
});

When('clico em "Continuar"', () => {
  cy.contains("Continuar").click();
});

Then('devo visualizar a mensagem "Cadastro realizado com sucesso"', () => {
  cy.contains("Cadastro realizado com sucesso").should("be.visible");
});

Then("devo ser redirecionado para a tela de login", () => {
  cy.url().should("include", "/login");
});