export class HomePage{
 
// Page Objects - Web Elements and their locations
getHsbcLogo(){
  return cy.get('.header-logo > a > img');
}

getPrivacyHeader() {
  return cy.get('.lg-7 > .footer-supplementary > :nth-child(3) > a');
}

getBankingOptionNav(){
  return cy.get('ul.row > :nth-child(1) > .header-mobile-doormat-0 > .header-main-navigation-title');
}

getcreditCardSubMenu(){
  return cy.get('h2[@class="doormat-heading"][normalize-space()="Credit Cards"])[1]');
}

 //  --------------------------------------------------------------------------------------------------
    // Methods - Are the actions to perform on the same page objects above in the login page

visitCreditCardSubMenu(){
 this.getBankingOptionNav().invoke('show')
 cy.contains('Credit Cards').click({force: true});

    }
  
navigateToPrivacyStatement(){
  this.getPrivacyHeader().click();
}
  
  } 

