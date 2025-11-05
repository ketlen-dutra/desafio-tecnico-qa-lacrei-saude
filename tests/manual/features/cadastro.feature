Feature: Cadastro da pessoa usuária
  Como pessoa usuária no aplicativo mobile
  Quero realizar o cadastro e buscar um profissional
  Para iniciar meu atendimento na plataforma Lacrei Saúde

  Background:
    Given que acesso o app no dispositivo mobile (<=600px) pela url: https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/
    E com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra 
    E com o User agent selecionado em 'Custom' com a seguinte configuração: 
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36


  @positivo
  Scenario: Cadastro completo e primeira busca
    When abro a tela de cadastro
    And preencho os campos obrigatórios corretamente
    And confirmo o cadastro
    Then devo visualizar a mensagem "Cadastro realizado com sucesso"
    And devo ser redirecionado ao pós-cadastro
    When finalizo o pós-cadastro e busco por "médica trans"
    Then devo visualizar uma lista de profissionais disponíveis

  @negativo
  Scenario: Cadastro com e-mail já cadastrado
    When tento cadastrar com um e-mail já utilizado
    Then devo visualizar a mensagem "E-mail já cadastrado"
