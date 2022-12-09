Cypress.Commands.add('login', () => {
  cy.session('auth', () => {
    localStorage.setItem('accessToken', 'test123')
  })
})