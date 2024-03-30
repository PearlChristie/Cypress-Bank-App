
export class LoginPage{
      
    // Page Objects - Web Elements and their locations
    getUsername() {
        return cy.get('#username');
      }
    
    getUsernameTooltip(){
       return cy.get('#username_help_link > [role="text"] > .icon').invoke('css', 'visibility', 'visible');
    }

    getUsernameTooltipHeader(){
        return cy.get('.t16b > span');
    }
    
    getUsernameCloseTooltip(){
        return cy.get('.close-btn > [role="text"] > .icon');
    }

    getLogOnHeader() {
        return cy.get('.col-sm-12 > .pull-left > span');
      }

    getLogInButton(){
        return cy.get('#username_submit_btn');
      }

    getRememberMeCheckbox(){
        return cy.get('#username_submit_btn');
      }

    //  --------------------------------------------------------------------------------------------------
    // Methods - Are the actions to perform on the same page objects above in the login page
    visitloginPg(){
        cy.visit('/security')
    }

    
    verifyHeader(){
            const headers = ['Banking', 'Borrowing', 'Investing', 'NRI', 'Offers', 'Online Banking']
            headers.forEach(header => {
              cy.get('.row').children()
                 .should('contain', header);
        })
 
    }

    enterUserName(username){
        this.username().clear();
        this.username().type(username);
        
    }

    openToolTip(){
        this.getUsernameCloseTooltip().click();
      
    }

   closeToolTip(){
        this.getUsernameCloseTooltip().click();
   }

}