const url = 'https://www.codeacademy.com/login';
const email = 'netehih761@advew.com';
const wrongEmail = 'testtest.com'

describe('user wants to restore the password', () => {
    it('redirects to the restore page', () => {
        cy.visit(url)
        cy.contains('I forgot').click()
        cy.contains('Request Password Reset').should('be.visible')
    });
})

describe('user sends a request to reset the password', () => {
    it('it sends instructions to the email', () => {
        cy.visit(url)
        cy.contains('I forgot').click()
        cy.contains('Please enter your email:').type(email)
        cy.get('.btn-brand-purple__3JIxHxx4KYF2OVbx8Jg6mb').click()
        cy.contains('Password Reset Sent').should('be.visible')
    });
})

describe('reset a password using incorrect email', () => {
    it('', () => {
        cy.visit(url)
        cy.contains('I forgot').click()
        cy.contains('Please enter your email:').type(wrongEmail)
        cy.get('.btn-brand-purple__3JIxHxx4KYF2OVbx8Jg6mb').click()
        cy.contains('Enter a valid email').should('be.visible')
    });
})

describe('user reads the article', () => {
    it('redirects to the helping page', () => {
        cy.visit(url)
        cy.contains('I forgot').click()
        cy.contains('this article').click()
        cy.contains('To reset').should('be.visible')
    });
})