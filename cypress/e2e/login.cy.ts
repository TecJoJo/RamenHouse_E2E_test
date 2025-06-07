import { login } from "../utils/login";

describe('Login', () => {
  const url = Cypress.env().baseUrl

  it("login to RamenHouse content management system with incorrect credentials", () => {
    // Since the site is hosted on Azure web service, it takes time to load
    cy.visit(url, { timeout: 300000 })
    cy.get('#header-contact > .px-4').click();
    cy.get('#auth-email').type("incorrectEmail@email.com");
    cy.get('#auth-password').type("incorrectPassword");
    cy.get('button.w-7\\/12').click();
    cy.get('li').contains('Invalid email or password').should('be.visible');
    cy.url().should('include', 'Authentication/Login');

  })
  it("Login to RamenHouse content management system with correct credentials", () => {
    // Since the site is hosted on Azure web service, it takes time to load
    cy.visit(url, { timeout: 300000 })

    login();
    cy.wait(2000);
    cy.get('#gui-grid-1').should('be.visible');
    cy.url().should('include', 'admin');

    //check if the Restaurant management link is visible
    cy.get('[href="/admin"] > .text-black').should('be.visible').contains('Restaurant Management');
  })


})