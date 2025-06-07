const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
  env:{
    baseUrl: "https://ramenhouse-fcfudqg8eya5ehf5.swedencentral-01.azurewebsites.net/",
    testUserEmail: "cypress@email.com",
    testUserPassword: "cypress123",
  }
});
