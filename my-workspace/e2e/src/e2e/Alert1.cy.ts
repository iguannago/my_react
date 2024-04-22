describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display alert message', () => {
    cy.get('button').click();
    cy.contains('Warning! This is an important message.');
  });
});
