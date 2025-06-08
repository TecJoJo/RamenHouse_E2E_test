import { login } from "../login";

export function loginViaAPI() {
    const userEmail = Cypress.env().testUserEmail;
    const userPassword = Cypress.env().testUserPassword;
    const url = Cypress.env().baseUrl;

    //RamenHouse's login has CSRF protection, so we need to acquire a CSRF token before logging in.
    //acquire CSRF token and cookie for login
    return cy
        .request({
            method: "GET",
            url: `${url}Authentication`,
        })
        .then((response) => {
            const $html = Cypress.$(response.body);
            const loginToken = $html
                .find('input[name="__RequestVerificationToken"]')
                .val() as string;

            return loginToken;
        })
        .then((loginToken) => {
            //login request for acquiring auth cookie
            cy.request({
                method: "POST",
                url: `${url}Authentication\/login`,
                form: true,
                body: {
                    __RequestVerificationToken: loginToken,
                    email: userEmail,
                    password: userPassword,
                },

                followRedirect: true,
            }).then((loginRes) => {
                expect(loginRes.status).to.eq(200);
            });
        });
}
