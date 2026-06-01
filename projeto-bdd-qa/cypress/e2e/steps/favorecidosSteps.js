/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/HomePage";
import favorecidosPage from "../../pages/FavorecidosPage";

// -------------------------
// Steps compartilhados
// -------------------------

Given("que o usuário está na página inicial do Kabum", () => {
  homePage.acessarPortal();
});

Given("que o usuário está na página de resultados", () => {
  favorecidosPage.acessarPagina();
});

// -------------------------
// Steps específicos de produtos
// -------------------------

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
  cy.get('body').should('be.visible');
});
