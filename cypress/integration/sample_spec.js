


describe('The Login Page', () => {
  
    it('login', function () {
        cy.visit('http://localhost:3000/account/login')
        cy.get('input[data-test-id="input-email"]').type('atalia@gmail.com')
        cy.get('button[data-test-id="submit-btn"]').contains('Continue').should('be.visible').click()

    })
})


