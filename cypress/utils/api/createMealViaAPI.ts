export function createMealViaAPI() {
    const url = Cypress.env().baseUrl;

    cy.request({
        method: "POST",
        url: `${url}admin\/mealcreate`,
        form: true,
        body: {
            name: "MealCreateViaAPIRequest",
            isFeatured: false,
            BasePrice: 100,
            Discount: 0.3,
            description: "This is a test meal created by Cypress using API",
        },
    }).then((postResponse) => {
        expect(postResponse.status).to.eq(200);
    });
}
