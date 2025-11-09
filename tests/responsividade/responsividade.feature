Feature: Responsividade da Plataforma Lacrei Saúde

  Como pessoa usuária
  Quero acessar a plataforma em diferentes tamanhos de tela
  Para garantir uma boa experiência tanto no mobile quanto no desktop

  Background:
    Given que acesso o site "https://paciente.lacreisaude.com.br"
  
  @responsividade @mobile
  Scenario: Acessar a tela de Cadastro em dispositivo mobile
    When abro as DevTools e seleciono a dimensão 412x915 (Samsung Galaxy S20 Ultra)
    And navego até a página de cadastro
    Then todos os campos de entrada devem estar visíveis sem scroll horizontal
    And o botão "Criar conta" deve estar acessível
    And a fonte e os botões devem ter tamanho adequado para toque com o dedo

  @responsividade @desktop
  Scenario: Acessar a tela de busca de profissionais em modo desktop
    When defino a resolução da janela para 1440x900
    And navego até a página de busca de profissionais
    Then a lista de profissionais deve ser exibida centralizada e responsiva
    And os filtros laterais devem estar visíveis e funcionais
    And os botões devem estar alinhados corretamente
