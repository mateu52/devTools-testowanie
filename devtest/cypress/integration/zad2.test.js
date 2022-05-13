describe('sum test E2E', () => {
    it('clicks inputs' , () => {
        cy.visit('http://localhost:3000');
        cy.get('h4').contains('stan licznika: 10')
        cy.get('button').contains('Reset').click()
        cy.get('input[type="number"]')
            .type('22')
        cy.get('button[type="submit"]').click()
        cy.get('button').contains('Reset').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('+').click()
        cy.get('button').contains('-').click()
        cy.get('button').contains('-').click()
            
    })
    
})