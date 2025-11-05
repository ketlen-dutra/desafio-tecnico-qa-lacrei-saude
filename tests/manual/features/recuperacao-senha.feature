Feature: Recuperação de senha
  Como pessoa usuária esquecida da senha
  Quero redefinir minha senha
  Para voltar a acessar o sistema

  Background:
    Given que acesso a tela "Esqueci minha senha"

  @positivo
  Scenario: Recuperação bem-sucedida
    When informo meu e-mail cadastrado
    And confirmo a solicitação
    Then devo receber o e-mail com o link de redefinição
    And devo conseguir criar uma nova senha válida

  @negativo
  Scenario: E-mail não cadastrado
    When informo um e-mail inexistente
    Then devo visualizar a mensagem "Usuário não encontrado"
