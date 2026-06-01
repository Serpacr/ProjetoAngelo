Feature: Busca de Produtos no Kabum

  Como um cliente
  Eu quero buscar produtos no Kabum
  Para encontrar e comprar o que preciso

  Scenario: Acessar a página inicial do Kabum
    Given que o usuário está na página inicial do Kabum
    Then o título da página deve conter "KaBuM"

  Scenario: Buscar um produto pelo nome
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "teclado"
    Then os resultados da busca devem ser exibidos na tela

  Scenario: Filtrar produtos por preço
    Given que o usuário está na página de resultados
    When o usuário filtra por uma faixa de preço
    Then os produtos exibidos devem estar dentro do intervalo de preço
