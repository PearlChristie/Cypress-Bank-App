
export class LoginPage{
      
    // Page Objects - Web Elements and their locations
    elements = {
    username : () => cy.get('#username'),
    logonHeader : () => cy.get('.col-sm-12 > .pull-left > span'),
    loginButton : () => cy.get('#username_submit_btn'),
    usernameTooltip : () => cy.get('#username_help_link > [role="text"] > .icon').invoke('css', 'visibility', 'visible'),
    usernameTooltipHeader : () => cy.get('.t16b > span'),
    usernameCloseTooltip : () => cy.get('.close-btn > [role="text"] > .icon'),
    rememberMeCheckbox : () => cy.get('#rememberMe')
    }

    // Methods - Are the actions to perform on the same page objects above in the login page
    visitloginPg(){
        cy.visit('/security')
    }
    
    verifyHeader(){
            const headers = ['Banking', 'Borrowing', 'Investing', 'NRI', 'Offers', 'Online Banking']
            headers.forEach(function (value){
              cy.get('.row')
                 .children()
                 .should('contain', value);
        })
      
    }

    enterUserName(username){
        this.elements.username().clear();
        this.elements.username().type(username);
    }

    openToolTip(){
        this.elements.usernameTooltip().click();
      
    }

   closeToolTip(){
        this.elements.usernameCloseTooltip().click();
   }

}