Feature: Busca e Navegação de Produtos no Kabum

  Como um cliente
  Eu quero buscar e navegar por produtos no Kabum
  Para encontrar e visualizar o que preciso

  # ═══════════════════════════════════════════════════════════════════════════
  # PARTE 1 — Busca de Produtos
  # ═══════════════════════════════════════════════════════════════════════════

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-001
  # Título: Acessar a página inicial do Kabum
  # Objetivo: Confirmar que a página inicial carrega corretamente
  # Pré-condições: Acesso à internet e navegador aberto
  # Passos: Acessar a URL raiz e verificar o título da página
  # Dados de entrada: Nenhum
  # Resultado esperado: Título da página contém "KaBuM"
  # ──────────────────────────────────────────────────────────────────────────
  Scenario: Acessar a página inicial do Kabum
    Given que o usuário está na página inicial do Kabum
    Then o título da página deve conter "KaBuM"

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-002
  # Título: Buscar um produto pelo nome
  # Objetivo: Validar que a busca retorna resultados para um termo válido
  # Pré-condições: Estar na página inicial da KaBuM
  # Passos: Digitar "teclado" na barra de busca e pressionar Enter
  # Dados de entrada: teclado
  # Resultado esperado: Resultados de busca exibidos na tela
  # ──────────────────────────────────────────────────────────────────────────
  Scenario: Buscar um produto pelo nome
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "teclado"
    Then os resultados da busca devem ser exibidos na tela

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-003
  # Título: Filtrar produtos por preço
  # Objetivo: Validar que o filtro de preço pode ser aplicado
  # Pré-condições: Estar na página de resultados da KaBuM
  # Passos: Acessar a página de resultados e aplicar filtro de preço
  # Dados de entrada: Nenhum
  # Resultado esperado: Página permanece visível após aplicar o filtro
  # ─────────────────────────────────────────────────────────────────────
  Scenario: Filtrar produtos por preço
    Given que o usuário está na página de resultados
    When o usuário filtra por uma faixa de preço
    Then os produtos exibidos devem estar dentro do intervalo de preço

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-004
  # Título: Buscar diferentes produtos na KaBuM
  # Objetivo: Validar que a busca funciona para diferentes termos de pesquisa
  # Pré-condições: Estar na página inicial da KaBuM
  # Passos: Buscar pelo termo de cada exemplo e verificar os resultados
  # Dados de entrada: mouse gamer, teclado gamer
  # Resultado esperado: Resultados exibidos para cada termo buscado
  # ──────────────────────────────────────────────────────────────────────────
  Scenario Outline: Buscar diferentes produtos na KaBuM
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "<produto>"
    Then os resultados da busca devem ser exibidos na tela

    Examples:
      | produto       |
      | mouse gamer   |
      | teclado gamer |

  # ═══════════════════════════════════════════════════════════════════════════
  # PARTE 2 — Navegação e Visualização de Produtos -
  # ═══════════════════════════════════════════════════════════════════════════

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-005
  # Título: Acessar a categoria de periféricos
  # Objetivo: Validar que a página de categoria carrega com produtos visíveis
  # Pré-condições: Acesso à internet e navegador aberto
  # Passos: Navegar para a categoria de periféricos e verificar a listagem
  # Dados de entrada: URL /perifericos
  # Resultado esperado: Página de categoria carregada com produtos visíveis
  # ──────────────────────────────────────────────────────────────────────────
  Scenario: Acessar a categoria de periféricos
    Given que o usuário acessa a categoria de periféricos
    When a página da categoria terminar de carregar
    Then produtos da categoria devem ser exibidos na tela

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-006
  # Título: Abrir a página de um produto
  # Objetivo: Validar que a página do produto exibe o nome do item
  # Pré-condições: Estar na página de resultados com itens listados
  # Passos: Buscar por "headset", clicar no primeiro resultado
  # Dados de entrada: headset
  # Resultado esperado: Página do produto aberta com nome visível
  # ──────────────────────────────────────────────────────────────────────────
  Scenario: Abrir a página de um produto
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "headset"
    And o usuário clica no primeiro resultado
    Then a página do produto deve exibir o nome do item

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-007
  # Título: Verificar se a página de produto exibe o preço
  # Objetivo: Validar que o preço do produto está visível na página de detalhe
  # Pré-condições: Estar na página de um produto aberto
  # Passos: Buscar por "monitor", clicar no primeiro resultado e verificar preço
  # Dados de entrada: monitor
  # Resultado esperado: Preço do produto visível na página
  # ──────────────────────────────────────────────────────────────────────────
  Scenario: Verificar se a página de produto exibe o preço
    Given que o usuário está na página inicial do Kabum
    When o usuário busca pelo nome "monitor"
    And o usuário clica no primeiro resultado
    Then a página do produto deve exibir o preço do item

  # ──────────────────────────────────────────────────────────────────────────
  # ID: CT-KB-008
  # Título: Navegar para diferentes categorias
  # Objetivo: Validar que diferentes categorias carregam com produtos
  # Pré-condições: Acesso à internet e navegador aberto
  # Passos: Acessar cada categoria da tabela e verificar o carregamento
  # Dados de entrada: /perifericos/mouses, /perifericos/teclados
  # Resultado esperado: Produtos visíveis em cada categoria acessada
  # ──────────────────────────────────────────────────────────────────────────
  Scenario Outline: Navegar para diferentes categorias
    Given que o usuário acessa a URL da categoria "<url>"
    When a página da categoria terminar de carregar
    Then produtos da categoria devem ser exibidos na tela

    Examples:
      | url                   |
      | /perifericos/mouses   |
      | /perifericos/teclados |