Cypress.Commands.add('logout',()=>{
    cy.get('[data-id="menu_account"]').eq(0).invoke('show')
  .contains('Logout').click({force:true})
  cy.contains('You have been logged off your account. It is now safe to leave the computer.').should('be.visible')
})