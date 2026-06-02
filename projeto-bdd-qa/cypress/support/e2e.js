// cypress/support/e2e.js
// Aqui ficam configurações globais que se aplicam a todos os testes


Cypress.on("uncaught:exception", (err) => {
  // Log do erro mas não falha o teste
  console.warn("Uncaught exception:", err.message);
  return false;
});

before(() => {
  // Bloquear SiteBlindado IMEDIATAMENTE
  cy.intercept("**/seal.siteblindado.com/**", { 
    statusCode: 200, 
    body: { status: "protected" },
    forceNetworkError: false,
    delay: 0
  }).as("siteblindado");
  
  // Bloquear Google Analytics
  cy.intercept("**/google-analytics.com/**", { 
    statusCode: 200, 
    body: {} 
  }).as("ga");
  
  // Bloquear CDN de cookies
  cy.intercept("**/cdn.cookielaw.org/**", { 
    statusCode: 200, 
    body: {} 
  }).as("cookielaw");
});

beforeEach(() => {
  // Bloquear requisições de XMLHttpRequest problemáticas
  cy.intercept(
    {
      method: /GET|POST/,
      hostname: "seal.siteblindado.com"
    },
    {
      statusCode: 200,
      body: {},
      delay: 0
    }
  );
});
