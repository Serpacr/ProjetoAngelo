const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kabum.com.br",
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    requestTimeout: 45000,
    responseTimeout: 45000,
    defaultCommandTimeout: 30000,
    execTimeout: 60000,
    taskTimeout: 60000,
    waitForAnimations: true,
    animationDistanceThreshold: 5,
    numTestsKeptInMemory: 0,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
