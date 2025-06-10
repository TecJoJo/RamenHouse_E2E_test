import { deleteAllMealsViaAPI } from "../utils/api/deleteAllMealsViaAPI";
import { seedMealsViaAPI } from "../utils/api/seedMealsViaAPI";
import { loginViaAPI } from "../utils/api/loginViaAPI";

describe("test clean and seed meals", () => {
    //Currently, this test only works for the local environment
    //because the API endpoints are not available in the production environment.

    const baseurl = Cypress.env().baseUrl;
    beforeEach(() => {
        loginViaAPI();
    })
    it("should delete all meals", () => {
        deleteAllMealsViaAPI();
        cy.visit(baseurl + "admin");
        cy.wait(1000)
        cy.get('[gui-empty-source=""]').should('exist').should("contain.text", "There are no items to show.")
    });
    it("should seed meals", () => {
        seedMealsViaAPI();
        cy.visit(baseurl + "admin");
        cy.wait(1000)
        cy.get('[gui-structure-row=""]').should("have.length", 6)
    });
});