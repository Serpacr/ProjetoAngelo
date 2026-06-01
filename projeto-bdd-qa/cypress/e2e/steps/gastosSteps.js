/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/HomePage";
import favorecidosPage from "../../pages/FavorecidosPage";
import gastosPage from "../../pages/GastosPage";

// -------------------------
// Steps de Carrinho
// -------------------------

Given("que o usuário adicionou um produto ao carrinho", () => {
  homePage.acessarPortal();
  homePage.digitarNomeDeBusca("teclado");
  homePage.pressionarEnter();
  favorecidosPage.verificarResultados();
  cy.wait(1000);
  favorecidosPage.clicarPrimeiroResultado();
});

When("o usuário acessa o carrinho", () => {
  gastosPage.acessarCarrinho();
});

Then("o carrinho deve exibir o produto adicionado", () => {
  gastosPage.verificarCarrinho();
});

And("o usuário clica em um produto", () => {
  favorecidosPage.clicarPrimeiroResultado();
});

And("o usuário adiciona o produto ao carrinho", () => {
  favorecidosPage.adicionarAoCarrinho();
  cy.wait(500);
});

Then("o carrinho deve mostrar o produto com preço e quantidade", () => {
  gastosPage.verificarCarrinho();
});
