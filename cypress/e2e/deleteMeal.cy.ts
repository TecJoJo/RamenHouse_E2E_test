import { loginViaAPI } from "../utils/api/loginViaAPI";
import { createMealViaAPI } from "../utils/api/createMealViaAPI";
describe("Delete meal", () => {
    it("Delete a meal in the RamenHouse content management system", () => {
        loginViaAPI()
        createMealViaAPI({
            name: "test meal to be deleted",
            isFeatured: false,
            BasePrice: 999,
            Discount: 1,
            description: "This is a test meal that will be deleted",
        }, "imgs/under_construction.jpg");
        cy.visit(Cypress.env("baseUrl") + "admin");
        cy.wait(1000);
        cy.get('[gui-structure-row=""]')
            .filter((_, el) => el.innerText.includes("test meal to be deleted"))
            .last()
            .within(() => {
                cy.get('[onclick*="deleteMeal"]').should('exist').click();
            });
        cy.reload();
        cy.wait(1000);
        cy.contains("test meal to be deleted").should("not.exist")
    })

})