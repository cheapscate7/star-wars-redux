describe("Index page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit("/");
    });

    it("should have a Layout file", () => {
        cy.get("nav").should("have.length", 1);
        cy.get("nav h1").should("have.length", 1);
    });
});