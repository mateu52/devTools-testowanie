describe('Button E2E test', () => {
    it('should have label Click me 2 after two clicks', () => {
        cy.visit('localhost:3000/');
        const button = cy.get('button');
        button.click();
        button.click();
    })
})