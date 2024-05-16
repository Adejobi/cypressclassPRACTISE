
class Login_PO {

    //Visit the URL
    LaunchURL (){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    }


   /*Enter username abd passward into their respective 
   fields and click on login button 
   */
   login(username, password){
   cy.get(':nth-child(2) >.oxd-input-group > :nth-child(2) > .oxd-input')
   .type(username)
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type(password)
   cy.get('.oxd-button').click () 
   }

   // Assertion for successful login
   assertionForSuccessfullogin(){
   cy.url().should('contain', 'dashboard')
   }


}

   export default Login_PO;
