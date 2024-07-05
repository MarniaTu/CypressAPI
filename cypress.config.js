const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    projectId: "97uscr",

    baseUrl: "https://petstore.swagger.io/v2",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
