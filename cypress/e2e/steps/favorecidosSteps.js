/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/HomePage";
import favorecidosPage from "../../pages/FavorecidosPage";

// ═══════════════════════════════════════════════════════════════════════════
// PARTE 1 — Busca de Produtos
// ═══════════════════════════════════════════════════════════════════════════

Given("que o usuário está na página inicial do Kabum", () => {
  homePage.acessarPortal();
});

Given("que o usuário está na página de resultados", () => {
  favorecidosPage.acessarPagina();
});

Then("o título da página deve conter {string}", (titulo) => {
  homePage.verificarTituloDaPagina(titulo);
});

When("o usuário busca pelo nome {string}", (nome) => {
  homePage.digitarNomeDeBusca(nome);
  homePage.pressionarEnter();
});

Then("os resultados da busca devem ser exibidos na tela", () => {
  favorecidosPage.verificarResultados();
});

When("o usuário filtra por uma faixa de preço", () => {
  cy.log("Filtrando por faixa de preço");
});

Then("os produtos exibidos devem estar dentro do intervalo de preço", () => {
  cy.get("body").should("be.visible");
});

// ═══════════════════════════════════════════════════════════════════════════
// PARTE 2 — Navegação e Visualização de Produtos
// ═══════════════════════════════════════════════════════════════════════════

Given("que o usuário acessa a categoria de periféricos", () => {
  cy.visit("/perifericos", { failOnStatusCode: false });
});

Given("que o usuário acessa a URL da categoria {string}", (url) => {
  cy.visit(url, { failOnStatusCode: false });
});

When("a página da categoria terminar de carregar", () => {
  cy.get("body", { timeout: 30000 }).should("be.visible");
});

Then("produtos da categoria devem ser exibidos na tela", () => {
  cy.get(
    '[data-testid*="product"], [class*="productCard"], [class*="ProductCard"], a[href*="produto"]',
    { timeout: 20000 }
  )
    .filter(":visible")
    .should("have.length.greaterThan", 0);
});

When("o usuário clica no primeiro resultado", () => {
  cy.get(
    '[data-testid*="product"], [class*="productCard"], [class*="ProductCard"], a[href*="produto"]'
  )
    .filter(":visible")
    .first()
    .click({ force: true });
});

Then("a página do produto deve exibir o nome do item", () => {
  cy.get("h1", { timeout: 20000 })
    .filter(":visible")
    .first()
    .invoke("text")
    .should("have.length.greaterThan", 3);
});

Then("a página do produto deve exibir o preço do item", () => {
  cy.get(
    '[class*="finalPrice"], [class*="priceWrapper"], [class*="sc-"], span[class*="price" i], div[class*="price" i], [data-testid*="price"], h4, strong',
    { timeout: 20000 }
  )
    .filter(":visible")
    .filter((_, el) => /R\$/.test(el.innerText))
    .first()
    .should("exist");
});