
export function login() {
    const url = Cypress.env().baseUrl;
    const password = Cypress.env().testUserPassword;
    const userName = Cypress.env().testUserEmail;
    cy.visit(`${url}Authentication`, { timeout: 300000 });
    cy.get("#header-contact > .px-4").click();
    cy.get("#auth-email").type(userName);
    cy.get("#auth-password").type(password);
    cy.get("button.w-7\\/12").click();
}


