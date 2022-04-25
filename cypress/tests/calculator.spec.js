describe("Rendering tests", () => {
  it("Visit the home page", () => {
    cy.visit("/");
  });

  it("Should have a output window", () => {
    cy.get(".output").should("exist");
  });

  it("Should have operators", () => {
    cy.get(".operators").should("exist");
  });

  it("Should have digits", () => {
    cy.get(".digits").should("exist");
  });
});
