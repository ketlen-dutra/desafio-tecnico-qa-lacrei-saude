---
name: "💡 Improvement Suggestion"
about: Sugerir uma melhoria de funcionalidade, usabilidade ou desempenho
title: "[IMPROVEMENT] - "
labels: ["improvement"]
assignees: ""
---

## 🧩 Descrição da melhoria
Atualmente, após concluir o fluxo de cadastro, o sistema redireciona o usuário sem exibir nenhuma mensagem de confirmação.
Essa ausência de feedback visual causa dúvida sobre o sucesso do processo e pode levar o usuário a tentar se cadastrar novamente.
Sugere-se exibir uma mensagem clara e direta informando que o cadastro foi concluído com sucesso.

---

## 🎯 Objetivo da melhoria
Melhorar a comunicação e experiência do usuário, garantindo que ele receba um feedback imediato e inequívoco de que o cadastro foi efetuado com sucesso.

---

## 🔍 Contexto e problema atual
Durante os testes funcionais (versão mobile), verificou-se que:

Após preencher o formulário de cadastro e clicar em “Cadastrar”,
o sistema realiza o redirecionamento automaticamente.

Nenhuma mensagem de sucesso é exibida.

Usuários sem familiaridade com o fluxo não têm certeza se o processo foi finalizado.

Esse comportamento viola uma boa prática de UX: sempre confirmar ações de sucesso.

---

## 💭 Proposta de solução

Adicionar uma mensagem de feedback logo após o cadastro, antes do redirecionamento.
Texto sugerido:

"Cadastro realizado com sucesso! Bem-vindo(a) à Lacrei Saúde."

Opcionalmente, incluir um botão CTA:

“Ir para Login” → redireciona diretamente para a tela de autenticação.

Comportamento esperado:

1. Usuário conclui o cadastro.
2. Mensagem de sucesso aparece.
3. Após 3–5 segundos, ou ao clicar no botão, ocorre o redirecionamento para a tela de login.
---

## ⚙️ Impacto esperado
| Categoria | Descrição |
|------------|------------|
| 🧭 Experiência do usuário | Usuário compreende que o cadastro foi concluído com sucesso |
| ⚙️ Desempenho | Impacto mínimo |
| 🧩 Acessibilidade | Facilita entendimento do fluxo também por leitores de tela |
| 🧠 Manutenção | Fácil implementação no frontend |

---

## ⚖️ Priorização sugerida
> Classifique a importância da melhoria.

| Prioridade | Marcar uma opção |
|-------------|-----------------|
| 🚀 Alta | |
| ⏱️ Média | |
| 💤 Baixa |x |

---

## 🧠 Observações adicionais
sem observações

---

## 📸 Evidência do estado atual

https://github.com/user-attachments/assets/8383ef78-0760-4934-b31e-28371fb9681c

## 📸 Sugestão de referência

<img width="530" height="361" alt="Image" src="https://github.com/user-attachments/assets/c1252961-b9c0-4fb9-b3eb-36896027cd03" />

