before(() => {
  cy.login("Jagadish",12345)
});
after(()=>{
  cy.logout();
})
describe('template spec', () => {

  it('Verify the search bar is present', () => {
    cy.get('input#filter_keyword').should('exist');
  })

  it('Validate the add to cart functionality', () => {
    cy.login("Jagadish",12345)
    cy.get('[class="active menu_home"]').click()
    cy.get('.col-md-3.col-sm-6.col-xs-12').eq(0).click()
    cy.get('[class="cart"]').click()
    cy.url().should('include','cart')
    cy.get('[class $= "table-bordered"]').eq(0).find('tr') 
    .eq(1)
    .find('.align_left')
    .should('contain.text', 'Skinsheen Bronzer Stick')
  })
})