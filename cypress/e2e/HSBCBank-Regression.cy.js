/// <reference types='cypress'/>
import { describe, it } from 'mocha';
import { LoginPage } from "../pages/login.page.js"
import { ATMSearchPage } from "../pages/atmSearch.page.js";
import { HomePage } from "../pages/home.page.js";
import { CreditCardPage } from '../pages/creditCardOptions.page.js';
import { beforeEach } from "mocha";


const homePg = new HomePage()
const loginPg = new LoginPage()
const atmSearchPg = new ATMSearchPage()
const creditCardPg = new CreditCardPage()

describe('Bank App Regression Test Suite', () => {

  beforeEach(() => {
    cy.viewport(1280, 1280);
    cy.visit('/');
    cy.wait(1000);
  });
 
  
  it.only ('Visit HSBC', () => {
    cy.contains('HSBC').should ('be.visible');
    loginPg.verifyHeader();
  });

  it('Verify Social Media Icons', () => {
   cy.scrollTo('bottomRight');
   cy.get('.social-link').should('have.length', '4');
 })

  it('Verify Initial State of Login Page', () => {
    loginPg.visitloginPg();
    loginPg.getLogOnHeader().should('include.text', 'Log On');
    loginPg.getRememberMeCheckbox().should('not.be.checked');
    loginPg.getLogInButton().should('be.disabled');
    
    cy.fixture('example').then ( (data) => {
    loginPg.enterUserName('data.username');
    loginPg.getLogInButton().should('be.enabled');
  
    loginPg.openToolTip();
    loginPg.getUsernameTooltipHeader().should('have.text', 'Username');
    loginPg.closeToolTip();
    })
  })


 it('Visit WayToBankPage', () => {
  atmSearchPg.visitATMSearchPage();
  cy.url().should('contains', 'ways-to-bank/branches/') ;
  atmSearchPg.getWaysToBankHeader().contains('Branches & ATMs');
});

it('Search for Nearest Bank', () => {
  atmSearchPg.searchForNearestBranch('India{enter}');
  atmSearchPg.getSearchResult().should('contain','Rajbhavan');
  atmSearchPg.getShowMoreResultsButton().click();
  atmSearchPg.getSearchResultTwo().contains('2').should('have.css', 'background-color', 'rgb(219, 0, 17)'); 

 });

it('Validate Credit Card Options', () => {
  homePg.visitCreditCardSubMenu();
  creditCardPg.getCreditCardPageHeader().should('contain', 'Credit cards');
  creditCardPg.getApplyNowButton().should('exist');
  creditCardPg.getCreditCardOffersModule().should('have.length', '3');
  creditCardPg.getCreditCardFirstImage().should('have.attr', 'alt', 'HSBC Visa Cashback Credit Card');
  creditCardPg.getCreditCardFirstHeader().contains('HSBC Cashback Credit Card');
  creditCardPg.verifyCreditCardOfferOptions();
});

it('Validate Privacy Page Header', () => {
  homePg.navigateToPrivacyStatement();
  homePg.getPrivacyHeader().should('contain', "Privacy Statement");
});

it('Validate Compare Cards Module', () => {
  creditCardPg.visitCreditCardPage();
  creditCardPg.getCreditCardFirstCompareCardsButton().click();
  creditCardPg.getCreditCardsToCompareCloseButton().should('exist');
  creditCardPg.getCreditCardToCompareHeader().contains('Select cards to compare');
  creditCardPg.getCreditCardCountToCompare().should('have.length', '3');

  creditCardPg.getCreditCardOfferSelected().should('contain.text', "Credit Card")
    .eq(0).click();
  creditCardPg.getCreditCardOfferSelected().should('contain.text', "Credit Card")
    .eq(1).click();
  creditCardPg.getCreditCardCompareButton().click();

  //verify images
  creditCardPg.getCreditCardFirstImage().should('exist');
  creditCardPg.getCreditCardImage2().should('exist');

  //verify remove links
  creditCardPg.getRemoveCard1().should('exist');
  creditCardPg.getRemoveCard2().should('exist'); 

  it('Add New Card', () => {
  //add card link
  creditCardPg.getAddCardLink().click();

  //select third card
  creditCardPg.getAddThirdCard().click();
  creditCardPg.getCreditCardCompareButton().click();

  // verify images
   creditCardPg.getCreditCardImage1().should('exist');
   creditCardPg.getCreditCardImage2().should('exist');
   creditCardPg.getCreditCardImage3().should('exist');
  
   //verify remove links
    creditCardPg.getRemoveCard1().should('exist');
    creditCardPg.getRemoveCard2().should('exist');
    creditCardPg.getRemoveCard3().should('exist');
  });


  it('Remove a Card', () => {
    creditCardPg.getRemoveCard3().click();
    creditCardPg.getCreditCardImage2().should('exist');
    creditCardPg.getCreditCardImage3().should('exist');
  });


  it('Cancel Selection of Card Offer', () =>{
    creditCardPg.getAddThirdCard().click();
    creditCardPg.getCreditCardsToCompareCloseButton();

  });
   
  });


});





   

 
   



  
    

 


  
