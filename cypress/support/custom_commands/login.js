Cypress.Commands.add('login',(username,password)=>{
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click()
})