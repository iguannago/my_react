describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should open and close alert message', () => {
    cy.get('button').click();
    cy.contains('Warning! This is an important message.');
    cy.get('button.btn-close').click();
    cy.contains('Warning! This is an important message.').should('not.exist');
  });
});
