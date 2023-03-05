const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // video: false,
  chromeWebSecurity: false,
  experimentalStudio: true,
  use: {
    trace: "on-first-retry", // record traces on first retry of each test
  },
});
