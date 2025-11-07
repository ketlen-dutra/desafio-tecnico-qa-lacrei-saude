import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// ---------- BACKGROUND ----------

Given("eu esteja na tela de login", () => {
  cy.viewport(412, 915); // Samsung Galaxy S20 Ultra dimensions
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

Given("com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra", () => {
  cy.log("Viewport configurado para Samsung Galaxy S20 Ultra");
});

Given(
  "com o User agent selecionado em 'Custom' com a seguinte configuração:",
  (userAgent: string) => {
    cy.log(`User agent utilizado: ${userAgent}`);
    Cypress.config("userAgent", userAgent.trim());
  }
);

// ---------- CENÁRIO POSITIVO: CADASTRO COMPLETO ----------

When("clicar em {Criar conta}", () => {
  cy.contains("Criar conta").click();
});

When(
  "preencher os campos válidos {Nome civil ou social} {Sobrenome} {E-mail} {Confirme seu e-mail} {Senha} {Confirme sua senha}",
  () => {
    cy.get('input[name="firstName"]').type("Maria");
    cy.get('input[name="lastName"]').type("Souza");
    const email = `qa_${Date.now()}@teste.com`;
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="confirmEmail"]').type(email);
    cy.get('input[name="password"]').type("SenhaForte@123");
    cy.get('input[name="confirmPassword"]').type("SenhaForte@123");
  }
);

When(
  "selecionar os campos {Li e concordo com os Termos de uso e Política de privacidade} {Tenho 18 anos ou mais}",
  () => {
    cy.get('input[name="acceptTerms"]').check({ force: true });
    cy.get('input[name="isAdult"]').check({ force: true });
  }
);

When("clico em {cadastrar}", () => {
  cy.contains("Cadastrar").click();
});

Then("recebo um email de confirmação de cadastro", () => {
  cy.log("Simulando envio de e-mail de confirmação...");
});

// ---------- MOCK DE CONFIRMAÇÃO ----------

When("eu clico em {Confirmar e-mail}", () => {
  cy.request("GET", "/api/auth/confirm?token=mocked_token_123").then((res) => {
    expect(res.status).to.eq(200);
  });
});

Then("sou redirecionado para a página de login", () => {
  cy.visit("/login");
  cy.contains("Entrar").should("be.visible");
});

// ---------- LOGIN APÓS CONFIRMAÇÃO ----------

When("preencho os campos válidos {E-mail} {Senha}", () => {
  cy.get('input[name="email"]').type("qa_automacao@teste.com"); // ou reutilize o e-mail salvo
  cy.get('input[name="password"]').type("SenhaForte@123");
});

When("clico em {Entrar}", () => {
  cy.contains("Entrar").click();
});

Then("sou redirecionado para a página de pós cadastro", () => {
  cy.url().should("include", "/pos-cadastro");
});

// ---------- PÓS-CADASTRO ----------

When("eu seleciono a opção {a/Ela/Dela}", () => {
  cy.contains("Ela / Dela").click();
});

When("clico em {Próximo}", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção {Parda}", () => {
  cy.contains("Parda").click();
});

When("clico em {Próximo}", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção {Mulher Cis}", () => {
  cy.contains("Mulher Cis").click();
});

When("clico em {Próximo}", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção {Heterossexual}", () => {
  cy.contains("Heterossexual").click();
});

When("clico em {Próximo}", () => {
  cy.contains("Próximo").click();
});

When("seleciono a opção {Não possuo deficiência}", () => {
  cy.contains("Não possuo deficiência").click();
});

When("clico em {Concluir}", () => {
  cy.contains("Concluir").click();
});

Then("sou redirecionado para a página de confirmação de cadastro concluído", () => {
  cy.contains("Seu cadastro foi concluído!").should("be.visible");
});

// ---------- BUSCA DE PROFISSIONAL ----------

When("clicar em {Buscar profissional}", () => {
  cy.contains("Buscar profissional").click();
});

When("preencher o campo de busca com {psicologo}", () => {
  cy.get('input[placeholder="Buscar profissional"]').type("psicologo");
});

When("clicar no desenho de 'lupa'", () => {
  cy.get('button[type="submit"]').click();
});

Then(
  "serei redirecionado para uma lista com o resultado encontrado para o termo escrito no campo de busca",
  () => {
    cy.url().should(
      "eq",
      "https://paciente.lacreisaude.com.br/lista-de-profissionais/?q=psicologo"
    );
    cy.get(".profissional-card").should("exist");
  }
);
