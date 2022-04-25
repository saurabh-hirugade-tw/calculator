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

describe("Operation tests",() => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".digits").contains("1").click();
      cy.get(".operators").contains("+").click();
      cy.get(".digits").contains("2").click();
    })
  
    it("Should output three when one is added with two", ()=>{
      
      cy.get(".digits").contains("=").click();
      cy.get(".output").contains("3").click();
    });
  
    it("Should delete last digit typed", () => {
      
      cy.get(".operators").contains("Del").click();
      cy.get(".operation").invoke('text').then((text) => {
        expect(text).to.not.have.string("2");
      });
    })
  
    it("Should clear all output", () =>{
      cy.get(".operators").contains("Clear").click();
      cy.get(".result").should("be.empty");
      cy.get(".operation").should("be.empty");
    })
  });