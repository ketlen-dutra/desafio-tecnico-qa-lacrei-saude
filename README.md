# 🧪 Desafio Técnico QA - Lacrei Saúde

Repositório contendo casos de teste (Gherkin), automação (Cypress + Cucumber), documentação e relatórios.

## 📁 Estrutura

### 💻 Execução Manual em Mobile (Android - Google Chrome)

📱 Fluxo testado: Cadastro da pessoa usuária

Ambiente:
- Dispositivo simulado: amsung Galaxy S20 Ultra
- Navegador: Google Chrome DevTools (versão 142)
- User Agent: Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36
- Viewport: 412 × 915 px
- Execução: manual com base nos cenários Gherkin (`tests/manual/features/cadastro.feature`)
- Evidências: armazenadas em `tests/manual/evidence/cadastro`

Validações realizadas:

📄Preenchimento dos campos
  ✅ Cadastro
  ✅ Login
  ✅ Pós-cadastro
  ✅ Pesquisar profissional

🔁Redirecionamentos
  ❌ Redirecionamento tela de 'login'
  ❌ Redirecionamento tela 'pós-cadastro'
  ✅ Redirecionamento tela 'pesquisar profissional'

💬Mensagens de feedback para o usuário
  ❌ "Cadastro realizado com sucesso" NOK
  ❌ "E-mail de confirmação de cadastro enviado. Por favor, verifique sua caixa de entrada" NOK


