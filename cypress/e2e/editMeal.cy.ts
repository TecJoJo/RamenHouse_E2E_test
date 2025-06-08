import { createMealViaAPI } from "../utils/api/createMealViaAPI";
import { loginViaAPI } from "../utils/api/loginViaAPI";

describe("Edit Meal", () => {



    it("Edit a meal in the RamenHouse content management system", () => {

        function editCell(stringBefore, stringAfter) {
            cy.get('[gui-structure-row=""]')
                .filter((_, el) => el.innerText.includes(stringBefore))
                .within(() => {
                    cy.contains(stringBefore).click({ force: true });
                });

            cy.focused().clear().type(stringAfter, { force: true });

        }

        const name = "test meal to be edited";
        const description = "This is a test meal that will be edited";
        const basePrice = 10.00;
        const discount = 0.3;
        const isFeatured = false;

        const baseUrl = Cypress.env("baseUrl");
        loginViaAPI()
        createMealViaAPI({
            name,
            description,
            BasePrice: basePrice,
            Discount: discount,
            isFeatured
        })

        cy.visit(`${baseUrl}admin`);
        cy.wait(1000);
        cy.get("#gui-grid-1").should("exist");


        // edit the meal's name
        cy.then(() => editCell(name, "[Edited] " + name));






    });

});