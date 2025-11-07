Feature: Cadastro da pessoa usuária

  Como pessoa usuária no aplicativo mobile
  Quero realizar o cadastro e buscar um profissional
  Para iniciar meu atendimento na plataforma Lacrei Saúde

  Background:
    Given eu esteja na tela de login
    And com a ferramenta DevTools usando a Dimensions: Samsung Galaxy S20 Ultra
    And com o User agent selecionado em 'Custom' com a seguinte configuração:
    """
    Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Mobile Safari/537.36
    """

  @positivo
  Scenario: Cadastro completo e primeira busca
    When clicar em {Criar conta}
    And preencher os campos válidos {Nome civil ou social} {Sobrenome} {E-mail} {Confirme seu e-mail} {Senha} {Confirme sua senha}
    And selecionar os campos {Li e concordo com os Termos de uso e Política de privacidade} {Tenho 18 anos ou mais}
    And clico em {cadastrar}
    Then recebo um email de confirmação de cadastro

    When eu clico em {Confirmar e-mail}
    And sou redirecionado para a página de login
    And preencho os campos válidos {E-mail} {Senha}
    And clico em {Entrar}
    Then sou redirecionado para a página de pós cadastro

    When eu seleciono a opção {a/Ela/Dela}
    And clico em {Próximo}
    And seleciono a opção {Parda}
    And clico em {Próximo}
    And seleciono a opção {Mulher Cis}
    And clico em {Próximo}
    And seleciono a opção {Heterossexual}
    And clico em {Próximo}
    And seleciono a opção {Não possuo deficiência}
    And clico em {Concluir}
    Then sou redirecionado para a página de confirmação de cadastro concluído

    When clicar em {Buscar profissional}
    And preencher o campo de busca com {psicologo}
    And clicar no desenho de 'lupa'
    Then serei redirecionado para uma lista com o resultado encontrado para o termo escrito no campo de busca
