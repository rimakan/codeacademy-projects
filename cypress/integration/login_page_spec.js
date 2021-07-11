const url = 'https://www.codeacademy.com/login';
const email = 'netehih761@advew.com';
const password = 'skZ9yp1kJq';
const wrongPass = 'qwerty123';

const login = (email, pass) => {
    cy.contains('Email').type(email)
    cy.contains('Password').type(pass)
    cy.get('.gamut-1clt638-Box').click()
}

describe('login with correct data', () => {
    it('successfully logins', () => {
        cy.visit(url)
        login(email, password)
        cy.contains('Get more').should('be.visible')
    });
})

describe('login with incorrect data', () => {
    it('does not login', () => {
        cy.clearCookies()
        cy.visit(url)
        login(email, wrongPass)
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
