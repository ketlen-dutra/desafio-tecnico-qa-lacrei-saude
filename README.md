# 🧪 Desafio Técnico QA - Lacrei Saúde

Repositório contendo casos de teste (Gherkin), automação (Cypress + Cucumber), documentação e relatórios.

## 📁 Estrutura

## 💻 Execução Manual em Mobile (Android - DevTools)

<details>
<summary>📱 <b>Fluxo: Cadastro da pessoa usuária (clicar para expandir)</b></summary>

Ambiente:
- Dispositivo simulado: samsung Galaxy S20 Ultra
- Navegador: Google Chrome DevTools (versão 142)
- User Agent: Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36
- Viewport: 412 × 915 px
- Execução: manual com base nos cenários Gherkin (`tests/manual/features/cadastro.feature`)
- Evidências: armazenadas em `tests/manual/evidence/cadastro`

Validações realizadas (cenário positivo):

📄Preenchimento dos campos
 - Cadastro - sucesso
 - Login - sucesso
 - Pós-cadastro - sucesso
 - Pesquisar profissional - sucesso

🔁Redirecionamentos
 - Redirecionamento tela de 'login' - bug
 - Redirecionamento tela 'pós-cadastro' - bug
 - Redirecionamento tela 'pesquisar profissional' - sucesso

💬Mensagens de feedback para o usuário
 - "Cadastro realizado com sucesso" - melhoria
 - "E-mail de confirmação de cadastro enviado. Por favor, verifique sua caixa de entrada" - melhoria

Validações realizadas (cenário negativo):

📄Preenchimento dos campos
 - Cadastro - sucesso

💬Mensagens de feedback para o usuário 
- "E-mail já cadastrado" - bug

</details>

