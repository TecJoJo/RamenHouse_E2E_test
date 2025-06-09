import { loginViaAPI } from "./loginViaAPI";

const url = Cypress.env("baseUrl");
export const deleteAllMealsViaAPI = () => {

    loginViaAPI();
    cy.visit(url + "admin");
    cy.request({
        method: "POST",
        url: `${url}admin\/cleanAllMeals`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: {}, // Send empty JSON object
    }).then((response) => {


        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Database cleaned successfully');
    });
};
