describe('Menu filter', () => {
    it("applies filters correctly when chips are selected", () => {
        const url = Cypress.env().baseUrl;
        cy.visit(url, { timeout: 300000 });



        cy.get('[href="/menu"] > .text-black').click();
        cy.get('#menu-filter').should('be.visible');
        cy.url().should('include', '/menu');
        cy.get('[href*="Menu/Detail"] > #grid-item').children().should('have.length.greaterThan', 0);



        const clickThroughChips = (index:number) => {
            cy.get('#menu-filter').children().should('have.length.greaterThan', 0).then(($chips: JQuery<HTMLElement>) => {
                const chips = $chips.toArray()
                if (index > chips.length) return;
                cy.wrap(chips[index]).click().then(() => console.log("chip is clicked: ", chips[index].innerText)
                )
                cy.wait(2000).then(() => {
                    cy.get('[href*="Menu/Detail"] > #grid-item').children().should('have.length.greaterThan', 0);
                }).then(() => {
                    chips.shift()
                    clickThroughChips(index + 1);
                });
            })


        }
        
        clickThroughChips(0)
        

    });
});
