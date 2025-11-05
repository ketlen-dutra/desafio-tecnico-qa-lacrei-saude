Feature: Inserir e atualizar informações de perfil
  Como pessoa usuária no aplicativo mobile
  Quero pode atualizar e inserir novas informações sobre o meu perfil
  Para alterar as informações conforme necessário

  Background:
    Given que acesso o app no dispositivo mobile (<=600px) pela url: https://paciente.lacreisaude.com.br/perfil/
    E com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra 
    E com o User agent selecionado em 'Custom' com a seguinte configuração: 
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36


  @positivo
  Scenario: Atualizar informações de perfil
    When abro a tela de perfil
    And seleciono "Editar dados"
    And preencher os campos conforme for necessário
    And seleciono "Salvar"
    Then devo ser capaz de visualizar meus dados alterados

  @negativo
  Scenario: Preencher campo "Nome civil ou social" vazio
    When preenho o campo "Nome civil ou social" vazio
    Then devo visualizar a mensagem "Nome deve ser preenchido"