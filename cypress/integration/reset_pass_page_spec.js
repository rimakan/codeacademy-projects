const url = 'https://www.codeacademy.com/login';
const email = 'netehih761@advew.com';
const wrongEmail = 'testtest.com'

const forgotPass = emailType => {
    cy.visit(url)
    cy.contains('I forgot').click()
    cy.contains('Please enter your email:').type(emailType)
    cy.get('.btn-brand-purple__3JIxHxx4KYF2OVbx8Jg6mb').click()
}

describe('user wants to restore the password', () => {
    it('redirects to the restore page', () => {
        cy.visit(url)
        cy.contains('I forgot').click()
        cy.contains('Request Password Reset').should('be.visible')
    });
})

describe('user sends a request to reset the password', () => {
    it('it sends instructions to the email', () => {
        forgotPass(email)
        cy.contains('Password Reset Sent').should('be.visible')
    });
})

describe('user sends a blank form', () => {
    it('it does not send instructions', () => {
        forgotPass
        cy.contains('Enter a valid email').should('be.visible')
    });
})

describe('reset a password using incorrect email', () => {
    it('does not send instructions', () => {
        forgotPass(wrongEmail)
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