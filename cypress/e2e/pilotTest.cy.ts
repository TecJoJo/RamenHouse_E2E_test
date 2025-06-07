describe('pilot tests for RamenHouse', () => {
  const url = Cypress.env().baseUrl
  it('Visit RamenHouse', () => {
    // Since the site is hosted on Azure web service, it takes time to load
    cy.visit(url,{timeout:300000})
  }),
  it("Login to RamenHouse content management system", () => {
    // Since the site is hosted on Azure web service, it takes time to load
    cy.visit(url,{timeout:300000})

    const userName = Cypress.env().testUserEmail;
    const password = Cypress.env().testUserPassword;
    cy.get('#header-contact > .px-4').click();
    cy.get('#auth-email').type(userName);
    cy.get('#auth-password').type(password);
    cy.get('button.w-7\\/12').click();
  })
})