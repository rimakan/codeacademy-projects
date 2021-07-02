describe('visit the main page', () => {
    it('successfully opens the page', () => {
        cy.visit('https://www.codeacademy.com')
        cy.contains('Join the millions learning to code with Codecademy for free').should('be.visible')
    });
})