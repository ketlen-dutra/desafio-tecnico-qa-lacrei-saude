---
name: "🐞 Bug Report"
about: Reportar um erro encontrado durante os testes
title: "[BUG] - "
labels: ["bug"]
assignees: ""
---

## 🧩 Descrição do problema
> Explique de forma clara o que está acontecendo.

**Exemplo:**
> Ao tentar realizar o cadastro com um e-mail já existente, o sistema permanece em tela de carregamento e não exibe mensagem de erro.

---

## 🔁 Passos para reproduzir
> Liste as etapas exatas para reproduzir o bug.

1. Acessar o app no navegador (modo mobile - Android)
2. Ir até a tela **"Criar conta"**
3. Inserir um e-mail já cadastrado
4. Clicar em **"Continuar"**

---

## 📸 Evidências
> prints, gravações de tela que ajudem a visualizar o problema.

- [ ] Screenshot anexado  
- [ ] Vídeo anexado  

**Exemplo:**  
`tests/manual/evidence/cadastro_erro_email_existente.png`

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

## 🎯 Resultado Esperado
> O que deveria acontecer.

**Exemplo:**  
> O sistema deve exibir a mensagem: “E-mail já cadastrado” e impedir o avanço do cadastro.

---

## ❌ Resultado Atual
> O que está acontecendo no momento.

**Exemplo:**  
> Tela permanece carregando indefinidamente após clicar em “Continuar”.

---

## ⚠️ Impacto e Prioridade
> Classifique o impacto e a severidade.

| Categoria | Opção marcada |
|------------|----------------|
| Impacto no usuário final | 🟥 Crítico / 🟧 Alto / 🟨 Médio / 🟩 Baixo |
| Prioridade de correção | ⏱️ Urgente / 🚧 Alta / 🕐 Média / 💤 Baixa |

---

## 🧠 Observações adicionais
> (Opcional) Adicione observações, hipóteses ou sugestões de causa/solução.

**Exemplo:**  
> Pode estar relacionado ao endpoint `/v1/user/register` não validando duplicidade de e-mail no backend.

---

## 🏷️ Labels sugeridas
> Adicione as labels correspondentes: