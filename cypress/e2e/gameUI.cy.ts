describe('Game UI', () => {
  beforeEach(() => {
    cy.visit('/game')
  })

  it('passes', () => {
    cy.contains('richifsae')
  })
})