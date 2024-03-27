export class HomePage{

elements = {
    hsbcLogo : () => cy.get('.header-logo > a > img'),
    privacyHeader : () => cy.get('.lg-7 > .footer-supplementary > :nth-child(3) > a'),
    bankingOptionNav : () => cy.get('ul.row > :nth-child(1) > .header-mobile-doormat-0 > .header-main-navigation-title'),
    creditCardSubMenu : () => cy.get('h2[@class="doormat-heading"][normalize-space()="Credit Cards"])[1]'),

}

visitCreditCardSubMenu(){
 this.elements.bankingOptionNav().invoke('show')
 cy.contains('Credit Cards').click({force: true});

    }
  
navigateToPrivacyStatement(){
  this.elements.privacyHeader().click();
}
  
  } 

