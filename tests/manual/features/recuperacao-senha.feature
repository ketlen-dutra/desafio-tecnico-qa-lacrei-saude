Feature: Recuperação de senha
  Como pessoa usuária esquecida da senha
  Quero redefinir minha senha
  Para voltar a acessar o sistema

  Background:
    Given que estou logado no app pelo dispositivo mobile (<=600px) pela url: https://paciente.lacreisaude.com.br/redefinicao-de-senha/
    E com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra 
    E com o User agent selecionado em 'Custom' com a seguinte configuração: 
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36

  @positivo
  Scenario: Recuperação bem-sucedida
    When informo meu e-mail cadastrado
    And seleciono "Enviar link"
    And recebo o e-mail com o link de redefinição
    Then devo conseguir criar uma nova senha válida

  @negativo
  Scenario: E-mail não cadastrado
    When informo um e-mail inexistente
    Then devo visualizar a mensagem "Algo deu errado, por favor, confira os dados inseridos e tente novamente"
