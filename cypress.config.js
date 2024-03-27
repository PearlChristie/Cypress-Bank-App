const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.hsbc.co.in/" ,
    waysToBank : "https://www.hsbc.co.in/ways-to-bank/branches/",
    showMoreResults : "https://www.hsbc.co.in/branch-finder/",
 
    defaultCommandTimeout: 10000,
  },
});



