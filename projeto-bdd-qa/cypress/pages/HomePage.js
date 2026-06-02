// cypress/pages/HomePage.js
// Page Object da Página Inicial do Kabum

class HomePage {
  acessarPortal() {
    cy.visit("/", { 
      failOnStatusCode: false,
      timeout: 120000
    });
    
    cy.get('body', { timeout: 30000 }).should('exist');
  }

  verificarTituloDaPagina(titulo) {
    cy.title({ timeout: 15000 }).should("contain", titulo);
  }

  digitarNomeDeBusca(nome) {
    cy.get('input[type="text"], input[placeholder*="Buscar"], input[placeholder*="buscar"]')
      .filter(':visible')
      .first()
      .should('be.visible')
      .clear()
      .type(nome, { delay: 50 });
  }

  clicarBotaoBuscar() {
    cy.contains('button, a', /Buscar|buscar|pesquisar/i, {
      timeout: 10000,
    })
      .first()
      .click({ force: true });
  }

  pressionarEnter() {
    cy.get('input[type="text"], input[placeholder*="Buscar"]')
      .filter(':visible')
      .first()
      .type('{enter}');
  }

  verificarLinkNoMenu(nomeDoLink) {
    cy.contains("a", nomeDoLink).should("be.visible");
  }
}

const homePage = new HomePage();
export default homePage;
