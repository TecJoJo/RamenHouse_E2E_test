import { login } from "../utils/login";

describe("Create Meal", () => {

    it("Create a meal in the RamenHouse content management system", () => {
        const url = Cypress.env().baseUrl;
        cy.visit(url, { timeout: 300000 });

        login();

        cy.get('[href="admin/mealcreate"] > .rounded-full > p').click();
        cy.get('#name').type('cypressTestMeal');
        cy.get('#isFeatured').select('true');
        cy.get('#BasePrice').type('100');
        cy.get('#Discount').type('0.3');
        cy.get('#\\31 ').check();
        cy.get('#\\32 ').check();
        cy.get('#\\33 ').check();
        cy.get('#description').type('This is a test meal created by Cypress');
        const imageFilePath = 'cypress/fixtures/imgs/under_construction.jpg';
        cy.get('#imgUpload').selectFile(imageFilePath);
        cy.get('#create-allergy-toggle > p').click();
        cy.wait(2000)
        cy.get('[gui-structure-row=""]')
            .filter((_, el) => el.innerText.includes("cypressTestMeal"))
            .should('have.length.at.least', 1)
            .find('[onclick*="deleteMeal"]').should('exist').click()
    })

})