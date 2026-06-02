// cypress/pages/GastosPage.js
// Page Object do Carrinho do Kabum

class GastosPage {
  acessarPagina() {
    cy.visit("/", { failOnStatusCode: false });
  }

  verificarCarregamento() {
    cy.get('body').should('be.visible');
  }

  acessarCarrinho() {
    cy.contains('a, button', /Carrinho|carrinho|cart/i, {
      timeout: 10000,
    })
      .first()
      .click({ force: true });
  }

  verificarCarrinho() {
    cy.get('body').should('contain.text', /total|valor|preço/i);
  }

  verificarProdutoNoCarrinho(nomeProduto) {
    cy.get('body').should('contain', nomeProduto);
  }

  verificarCampoDePesquisa() {
    cy.get("input[type='search'], input[type='text'], input[placeholder*='pesquisa']")
      .filter(':visible')
      .first()
      .should("be.visible");
  }
}

const gastosPage = new GastosPage();
export default gastosPage;
