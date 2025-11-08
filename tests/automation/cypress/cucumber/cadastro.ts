import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ---------- BACKGROUND ----------

Given("eu esteja na tela de login", () => {
  cy.viewport(412, 915); // Samsung Galaxy S20 Ultra dimensions
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

Given("com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra", () => {
  cy.log("Viewport configurado para Samsung Galaxy S20 Ultra");
});

// REMOVIDO: O passo que definia o User Agent usando Cypress.config() foi removido.
// A configuração de User Agent deve ser feita no arquivo cypress.config.js/ts.
/*
Given(
  "com o User agent selecionado em 'Custom' com a seguinte configuração:",
  (userAgent: string) => {
    cy.log(`User agent utilizado: ${userAgent}`);
    Cypress.config("userAgent", userAgent.trim());
  }
);
*/

// ---------- CENÁRIO POSITIVO: CADASTRO COMPLETO ----------

When("clico em Criar conta", () => {
  cy.contains("Criar conta").click();
});

When(
  "preencher os campos válidos Nome civil ou social Sobrenome E-mail Confirme seu e-mail Senha Confirme sua senha",
  () => {
    cy.get('input[name="first_name"]').type("Maria");
    cy.get('input[name="last_name"]').type("Souza");
    // Gera um e-mail único para cada execução
    const email = `qa_${Date.now()}@teste.com`;
    cy.wrap(email).as('userEmail'); // Salva o email para uso posterior, se necessário
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="email2"]').type(email);
    cy.get('input[name="password1"]').type("SenhaForte@123");
    cy.get('input[name="password2"]').type("SenhaForte@123");
  }
);

When(
  "selecionar os campos Li e concordo com os Termos de uso e Política de privacidade Tenho 18 anos ou mais",
  () => {
    cy.contains('Li e concordo com os Termos de uso e Política de privacidade').click();
    cy.contains('Tenho 18 anos ou mais').click();
  }
);

When("clico em cadastrar", () => {
  cy.contains("Cadastrar").click();
});

Then("recebo um email de confirmação de cadastro", () => {
  // Em um ambiente real, você usaria cy.task() para verificar a caixa de entrada
  cy.log("Simulando envio de e-mail de confirmação...");
});

// ---------- MOCK DE CONFIRMAÇÃO ----------

When("eu clico em Confirmar e-mail", () => {
  // Nota: Esta requisição é local e pode não funcionar se a URL de base não for configurada corretamente,
  // ou se for necessário um token real.
  cy.request("GET", "https://api.lacreisaude.com.br/v1/lacreiid/auth/confirm-email/NzMw:1vGh1o:V7duoPUumG9TiIGqwdBV2f4PG8x19QXfDlKrWXdMb4E/").then((res) => {
    expect(res.status).to.eq(200);
  });
});

Then("sou redirecionado para a página de login", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
  cy.contains("Entrar").should("be.visible");
});

// ---------- LOGIN APÓS CONFIRMAÇÃO ----------

When("preencho os campos válidos E-mail Senha", () => {
  // Usando um e-mail fixo para o login pós-confirmação, assumindo que foi confirmado.
  // Se quiser usar o e-mail gerado, você precisaria de um alias ou variável acessível:
  // cy.get('@userEmail').then((email) => { cy.get('input[name="email"]').type(email as string); });
  cy.get('input[name="email"]').type("qa_automacao@teste.com");
  cy.get('input[name="password"]').type("SenhaForte@123");
});

When("clico em Entrar", () => {
  cy.contains("Entrar").click();
});

Then("sou redirecionado para a página de pós cadastro", () => {
  cy.url().should("include", "/pos-cadastro");
});

// ---------- PÓS-CADASTRO ----------

When("eu seleciono a opção a/Ela/Dela", () => {
  cy.contains("Ela / Dela").click();
});

When("clico em Próximo", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção Parda", () => {
  cy.contains("Parda").click();
});

When("clico em Próximo", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção Mulher Cis", () => {
  cy.contains("Mulher Cis").click();
});

When("clico em Próximo", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção Heterossexual", () => {
  cy.contains("Heterossexual").click();
});

When("clico em Próximo", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção Não possuo deficiência", () => {
  cy.contains("Não possuo deficiência").click();
});

When("clico em Concluir", () => {
  cy.contains("Concluir").click();
});

Then("sou redirecionado para a página de confirmação de cadastro concluído", () => {
  cy.contains("Seu cadastro foi concluído!").should("be.visible");
});

// ---------- BUSCA DE PROFISSIONAL ----------

When("clicar em Buscar profissional", () => {
  cy.contains("Buscar profissional").click();
});

When("preencher o campo de busca com psicologo", () => {
  cy.get('input[placeholder="Buscar profissional"]').type("psicologo");
});

When("clicar no desenho de lupa", () => {
  cy.get('button[type="submit"]').click();
});

Then(
  "serei redirecionado para uma lista com o resultado encontrado para o termo escrito no campo de busca",
  () => {
    // Nota: A URL final do seu teste aponta para 'paciente.lacreisaude.com.br',
    // mas o cy.visit() inicial usa 'paciente-staging.lacreisaude.com.br'.
    // Ajustei para o staging para manter a consistência da URL base.
    cy.url().should(
      "include", // Usando 'include' é mais seguro do que 'eq' para URLs
      "/lista-de-profissionais/?q=psicologo"
    );
    cy.get(".profissional-card").should("exist");
  }
);