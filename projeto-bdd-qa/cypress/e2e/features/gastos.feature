Feature: Carrinho de Compras no Kabum

  Como um cliente
  Eu quero adicionar produtos ao carrinho
  Para realizar minha compra

  Scenario: Buscar e adicionar um produto ao carrinho
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "mouse gamer"
    And o usuário clica em um produto
    And o usuário adiciona o produto ao carrinho
    Then o carrinho deve exibir o produto adicionado

  Scenario: Visualizar o carrinho
    Given que o usuário adicionou um produto ao carrinho
    When o usuário acessa o carrinho
    Then o carrinho deve mostrar o produto com preço e quantidade
