---
name: "🚫 Blocked Feature / Dependência"
about: Registrar uma funcionalidade ou teste bloqueado por bug, dependência técnica ou de outra feature
title: "[BLOCKED] - "
labels: ["blocked", "dependency", "qa"]
assignees: ""
---

## 🧩 Descrição da Feature Bloqueada
> Explique qual funcionalidade está bloqueada e o motivo.

**Exemplo:**  
> O teste funcional do fluxo de **recuperação de senha** está bloqueado, pois o endpoint `/v1/auth/reset-password` retorna erro 500 no ambiente de homologação.

---

## 🧱 Motivo do Bloqueio
> Selecione o tipo de bloqueio e descreva a causa.

- [x] 🐞 **Bloqueada por bug**
- [ ] 🔗 **Depende de outra feature**
- [ ] ⚙️ **Depende de integração externa**
- [ ] 🔒 **Bloqueio de ambiente ou credencial**
- [ ] 📦 **Dependência técnica (ex.: API, banco, build)**

**Detalhes:**  
> Bug #23 — “Reset password endpoint retornando 500”  
> Feature dependente: `Cadastro de usuário` precisa estar concluída antes de validar recuperação de senha.

---

## 🕐 Status atual
> Descreva o estado da investigação ou o andamento do bloqueio.

| Item | Status | Observações |
|------|---------|-------------|
| Issue relacionada | 🐞 Aberta | Aguardando correção da equipe backend |
| Teste automatizado | ⏸️ Em pausa | Cenário `recuperacao_senha.feature` comentado no pipeline |
| Reteste planejado | ⏳ Aguardando liberação do endpoint |

---

## 🔗 Relações com outras Issues
> Liste as issues que bloqueiam ou são bloqueadas por esta.

| Tipo | Issue | Descrição |
|------|--------|------------|
| 🔒 Bloqueada por | #23 | Bug no endpoint de recuperação de senha |
| 🔗 Depende de | #17 | Conclusão da feature de cadastro |
| ⚡ Desbloqueia | #25 | Reexecução dos testes de login |

---

## 🧠 Impacto do Bloqueio
| Área afetada | Impacto |
|---------------|----------|
| 🔐 Autenticação | Alto |
| 📱 Testes Mobile | Médio |
| 🤖 Pipeline de automação | Alto |
| 🧩 Testes de regressão | Médio |

---

## 🧭 Ações sugeridas
> Descreva o que pode ser feito enquanto a feature está bloqueada.

- [x] Notificar equipe responsável pelo bug ou dependência  
- [x] Marcar cenários afetados com tag `@blocked` no Gherkin  
- [ ] Criar plano alternativo de teste (mock ou ambiente paralelo)  
- [ ] Documentar o bloqueio no Notion  

---

## 🧾 Próximos passos
> Liste as ações pendentes e o que deve ocorrer após o desbloqueio.

1. Validar correção do bug #23 no ambiente de homologação  
2. Reexecutar cenário `recuperacao_senha.feature`  
3. Atualizar status da issue para ✅ **Desbloqueada**  
4. Fechar issue após confirmação de reteste com sucesso  