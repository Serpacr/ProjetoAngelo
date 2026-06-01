// cypress/support/commands.js
// Comandos customizados do Cypress

// Exemplo de comando reutilizável: aguardar carregamento da página
Cypress.Commands.add("aguardarCarregamento", () => {
  cy.get("body").should("be.visible");
});
