describe('Presentation Root', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('richifsae')
  })
})