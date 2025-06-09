import { createMealViaAPI } from "../utils/api/createMealViaAPI";
import { loginViaAPI } from "../utils/api/loginViaAPI";

describe("Edit Meal", () => {
    it("Edit a meal in the RamenHouse content management system", () => {
        function editCell(stringBefore, stringAfter) {
            cy.get('[gui-structure-row=""]')
                .filter((_, el) => el.innerText.includes(stringBefore))
                .last()
                .within(() => {
                    cy.contains(stringBefore).click({ force: true });
                });

            cy.focused().clear().type(`${stringAfter}{enter}`, { force: true });
            cy.reload();
            cy.wait(1000);
            cy.contains(stringAfter).should("exist")
                .then(($el: JQuery<HTMLElement>) => {
                    if ($el) {

                        expect($el.text()).to.include(stringAfter);
                    }
                    else {
                        throw new Error(`Element with text "${stringAfter}" not found`);
                    }
                })
        }

        const name = "test meal to be edited";
        const description = "This is a test meal that will be edited";
        const basePrice = 10.0;
        const discount = 0.3;
        const isFeatured = false;

        const baseUrl = Cypress.env("baseUrl");
        loginViaAPI();
        createMealViaAPI({
            name,
            description,
            BasePrice: basePrice,
            Discount: discount,
            isFeatured,
        });

        cy.visit(`${baseUrl}admin`);
        cy.wait(1000);
        cy.get("#gui-grid-1").should("exist");

        // edit the meal's name
        cy.then(() => editCell(name, "[Edited] " + name));
        // edit the meal's description
        cy.then(() => editCell(description, "[Edited] " + description));
        // edit the meal's base price
        cy.then(() => editCell(basePrice.toString(), (basePrice + 5).toFixed(1)));
        // edit the meal's discount
        cy.then(() => editCell(discount.toString(), (discount + 0.1).toFixed(1)));
        // edit the meal's isFeatured
        cy.then(() => editCell(isFeatured.toString(), (!isFeatured).toString()));

        //delete the meal being edited
        cy.get('[gui-structure-row=""]')
            .filter((_, el) => el.innerText.includes("[Edited] " + name))
            .last()
            .within(() => {
                cy.get('[onclick*="deleteMeal"]').click({ force: true });
            });
    });
});
