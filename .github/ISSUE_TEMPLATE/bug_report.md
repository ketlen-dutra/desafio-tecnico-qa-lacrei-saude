---
name: "🐞 Bug Report"
about: Reportar um erro encontrado durante os testes
title: "[BUG] - "
labels: ["bug"]
assignees: ""
---

## 🧩 Descrição do problema
Após a confirmação de cadastro, o usuário é redirecionado para a tela de login.

---

## 🔁 Passos para reproduzir

1. Acessar o app no navegador (modo mobile - Android) pela url: https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/
2. Preencher corretamente todos os campos
3. Clicar em "Cadastrar"

---

## 📸 Evidências

- [x ] Vídeo anexado  

`tests/manual/evidence/cadastro/redirecionamento_tela_login_bug.mp4`

---

## ⚙️ Ambiente de Teste
| Item | Detalhes |
|------|-----------|
| Dispositivo | Samsung Galaxy S20 Ultra |
| Navegador | Google Chrome 145 |
| Viewport | 412 x 915 px |
| Ambiente | Homologação |
| Data | {{05/11/25}} |

---

## 🎯 Resultado Esperado
O sistema deveria redirecionar para a tela de "Pós-cadastro"

---

## ❌ Resultado Atual
O sistema redireciona para a tela de login

---

## ⚠️ Impacto e Prioridade

| Categoria | Opção marcada |
|------------|----------------|
| Impacto no usuário final | 🟩 Baixo |
| Prioridade de correção | 💤 Baixa |

---

## 🧠 Observações adicionais
Caso o redirecionamento esteja conforme a documentação de requisitos, sugiro a exibição de mensagem para que o usuário coloque as credenciais novamente, assim o aplicativo fica mais intuitivo.

---
## 📸 Evidências (caso o primeiro link não funcione)

- [x ] Vídeo anexado  

https://github.com/user-attachments/assets/fe5518ab-4f18-4b88-972f-7413687f7bc4