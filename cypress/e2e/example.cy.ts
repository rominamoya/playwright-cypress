describe("example test", () => {
  beforeEach(() => {
    cy.visit("https://playwright.dev/");
  });

  it("has title", () => {
    cy.title().should("to.match", /Playwright/);
  });
  it("get started link", () => {
    cy.contains("Get started").click();
    cy.url().should("include", "/intro");
  });
});
