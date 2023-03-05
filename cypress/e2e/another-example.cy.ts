describe("Example to Demonstrate Cypress Studio", () => {
  it("Extend Test via Cypress Studio", () => {
    cy.visit("https://demo.playwright.dev/todomvc");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('feed the cat{enter}');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('buy some milk{enter}');
    /* ==== End Cypress Studio ==== */
  });
});
