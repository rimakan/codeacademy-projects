const url = 'https://www.codeacademy.com/login';
const email = 'netehih761@advew.com';

describe('login with correct data', () => {
    it('successfully logins', () => {
        cy.visit(url)
        cy.contains('Email').type(email)
        cy.contains('Password').type('skZ9yp1kJq')
        cy.get('.gamut-1clt638-Box').click()
        cy.contains('Get more').should('be.visible')
    });
})

describe('login with incorrect data', () => {
    it('does not login', () => {
        cy.clearCookies()
        cy.visit(url)
        cy.contains('Email').type(email)
        cy.contains('Password').type('skZ')
        cy.get('.gamut-1clt638-Box').click()
        cy.contains('Invalid email or password').should('be.visible')
    });
})

describe('login with blank fields', () => {
    it('does not login', () => {
        cy.visit(url)
        cy.get('.gamut-1clt638-Box').click()
        cy.contains('Invalid email or password').should('be.visible')
    });
})
