Feature: Buscar e contatar profissional
  Como pessoa usuária no aplicativo mobile
  Quero realizar a busca e contatar profissional
  Para realizar meu atendimento na plataforma Lacrei Saúde

  Background:
    Given que acesso o app no dispositivo mobile (<=600px) pela url: https://paciente.lacreisaude.com.br/buscar-profissional/
    E com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra 
    E com o User agent selecionado em 'Custom' com a seguinte configuração: 
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36


  @positivo
  @blocked
  Scenario: Buscar profissional e entrar em contato
    When abro a tela de buscar profissional
    And digito na barra de pesquisa "psicologo"
    And clico no botão pesquisar
    Then devo visualizar uma lista de profissionais disponíveis
    When seleciono o primeiro profissional disponível
    And seleciono a opção "exibir contato"
    Then devo visualizar informações como horários, valores e localidade do profissional
    When preencher o campo "Qual é o seu número de celular?"
    And clicar em "enviar código"
    And Digitar o código enviado por SMS
    Then devo visualizar os dados do profissional

  @negativo
  @blocked
  Scenario: Preencher campo código com código inválido
    When preenho o campo código com código inválido
    Then devo visualizar a mensagem "Código inválido! Tente novamente"