Feature: Tempo de resposta e Estabilidade sob carga
  Como pessoa usuária no aplicativo mobile
  Quero realizar o cadastro e buscar um profissional
  Para iniciar meu atendimento na plataforma Lacrei Saúde

  Background:
    Given que acesso o app no dispositivo mobile (<=600px) pela url: https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/
    E com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra 
    E com o User agent selecionado em 'Custom' com a seguinte configuração: 
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36

  @performance
  Scenario: Validar tempo de resposta no fluxo de cadastro e busca
    When abro a tela de cadastro
    Then o tempo de resposta inicial deve ser inferior a 3000ms

    When busco por "psicologo"
    Then devo visualizar a lista de profissionais disponíveis
    And o tempo de resposta da busca deve ser inferior a 800ms

  @carga
  Scenario: Simular 30 usuários simultâneos realizando cadastro
    Given que 30 usuários acessam simultaneamente o app no fluxo de cadastro e busca
    When os usuários preenchem os dados e confirmam o cadastro
    Then o sistema deve responder para todos com tempo médio inferior a 1000ms
    And a taxa de erro deve ser inferior a 1%
