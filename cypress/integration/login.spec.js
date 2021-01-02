it("visits login page", () => {
  cy.visit("localhost:3000/");
  cy.get("button").click();
  cy.get(".button").click();
});
