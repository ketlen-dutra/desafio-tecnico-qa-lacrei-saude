---
name: "🧪 QA Task / Test Execution"
about: Registrar execução de testes ou reexecuções
title: "[QA] - "
labels: ["qa", "testing"]
assignees: ""
---

## 🧾 Descrição da Tarefa de QA
> Descreva brevemente o que será validado ou reexecutado.

**Exemplo:**  
> Reexecutar o cenário de recuperação de senha após correção do bug #12.  
> Validar redirecionamento, mensagens e layout mobile (Android).

---

## 🧩 Tipo de Teste
> Marque o(s) tipo(s) de validação realizados.

- [ ] 🔁 Reexecução pós-correção  
- [ ] 🧪 Teste funcional manual mobile
- [ ] 🤖 Teste automatizado (Cypress)  
- [ ] ⚙️ Teste de desempenho (Lighthouse / JMeter)  
- [ ] ♿ Teste de acessibilidade  
- [ ] 📱 Teste de responsividade  
---

## 🧠 Cenário / Feature relacionada
> Indique o cenário Gherkin, funcionalidade ou fluxo testado.

**Exemplo:**  
`tests/manual/features/recuperacao-senha.feature`  
`Scenario: Recuperação bem-sucedida`

---

## 📸 Evidências da Execução
> Inclua prints, vídeos ou relatórios gerados.

**Exemplo:**
- 📷 `tests/manual/evidence/recuperacao_senha_retest.png`
- 🎥 `tests/manual/evidence/recuperacao_senha_retest.mp4`
- 📊 `tests/automation/reports/cypress-report.html`

---

## 🧾 Resultado da Validação
| Item Validado | Status | Observações |
|----------------|---------|--------------|
| Redirecionamento após redefinição | ✅ OK | Retornando corretamente para tela de login |
| Mensagem de feedback | ✅ OK | Mensagem exibida conforme esperado |
| Layout mobile (≤ 600px) | ❌ NOK | Botão "Voltar" desalinhado no rodapé |

---

## ⚙️ Ambiente de Teste
| Item | Detalhes |
|------|-----------|
| Dispositivo | Pixel 5 (Android 12) |
| Navegador | Google Chrome 121 |
| Viewport | 393 x 851 px |
| Ambiente | Homologação |
| Data | {{data_do_teste}} |

---

## 🎯 Resultado Final
> Descreva o resumo da execução.

**Exemplo:**  
> Todos os fluxos funcionais passaram com sucesso, exceto o desalinhamento do botão “Voltar”.  
> Bug #15 reaberto para ajuste de layout mobile.

---

## 🏷️ Labels sugeridas
> Adicione as labels correspondentes:
