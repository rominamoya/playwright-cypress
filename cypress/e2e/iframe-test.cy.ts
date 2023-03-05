describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    //let's test iframe
    cy.get("#mce_0_ifr")
      .should("be.visible")
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");

        cy.wrap($body).type("Welcome to playwright");
      });
  });
});
