import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
  env: {
    baseUrl: "https://localhost:7066/",
    testUserEmail: "cypress@email.com",
    testUserPassword: "cypress123",
  },
});
