// cypress/pages/FavorecidosPage.js
// Page Object da Página de Produtos do Kabum

class FavorecidosPage {
  acessarPagina() {
    cy.visit("/", { failOnStatusCode: false });
  }

  verificarCarregamento() {
    cy.get('body').should('contain', 'Kabum');
  }

  digitarNomeDeBusca(nome) {
    cy.get('input:visible')
      .filter((_, el) => !['hidden', 'submit', 'button', 'reset', 'image', 'file', 'checkbox', 'radio'].includes(el.type))
      .first()
      .should('be.visible')
      .clear()
      .type(nome, { delay: 50 });
  }

  clicarBotaoBuscar() {
    cy.contains('button, a, input[type="submit"]', /buscar|pesquisar|consultar/i, {
      timeout: 10000,
    })
      .first()
      .click({ force: true });
  }

  pressionarEnter() {
    cy.get('input:visible')
      .filter((_, el) => !['hidden', 'submit', 'button', 'reset', 'image', 'file', 'checkbox', 'radio'].includes(el.type))
      .first()
      .type('{enter}');
  }

  verificarResultados() {
    cy.get('body').should('be.visible');
    cy.get('[data-testid*="product"], .product, .item-produto, a[href*="produto"]').should('have.length.greaterThan', 0);
  }

  clicarPrimeiroResultado() {
    cy.get('[data-testid*="product"], .product, .item-produto, a[href*="produto"]')
      .first()
      .click({ force: true });
  }

  adicionarAoCarrinho() {
    cy.contains('button, a', /adicionar|carrinho|comprar/i)
      .first()
      .click({ force: true });
  }
}

const favorecidosPage = new FavorecidosPage();
export default favorecidosPage;
