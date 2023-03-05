/// <reference types="cypress" />

const TODO_ITEMS = [
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
];
describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://demo.playwright.dev/todomvc");
  });

  it("should allow me to add todo items", () => {
    const newTodo = cy.get(".new-todo");
    newTodo.click().type(`${TODO_ITEMS[0]}{enter}`);
    cy.get('[data-testid="todo-title"]').should("have.text", TODO_ITEMS[0]);
    newTodo.click().type(`${TODO_ITEMS[1]}{enter}`);
    cy.get('[data-testid="todo-title"]')
      .should("have.length", 2)
      .then(($els) => {
        return Cypress.$.makeArray($els)
        .map((el) => el.innerText);
      })
      .should("deep.equal", [TODO_ITEMS[0], TODO_ITEMS[1]]);
    cy.then(() =>
      assert.equal(JSON.parse(localStorage.getItem("react-todos")).length, 2)
    );
  });
  it("should clear text input field when an item is added", () => {
    const newTodo = cy.get(".new-todo");
    newTodo.click().type(`${TODO_ITEMS[0]}{enter}`);
    newTodo.should("be.empty");
    cy.then(() =>
      assert.equal(JSON.parse(localStorage.getItem("react-todos")).length, 1)
    );
  });
});
