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
 
  
  it('Visit HSBC', () => {
    cy.contains('HSBC').should ('be.visible');
    loginPg.verifyHeader();
  });

  it('Verify Social Media Icons', () => {
   cy.scrollTo('bottomRight');
   cy.get('.social-link').should('have.length', '4');
 })

  it('Verify Initial State of Login Page', () => {
    loginPg.visitloginPg();
    loginPg.elements.logonHeader().should('include.text', 'Log On');
    loginPg.elements.rememberMeCheckbox().should('not.be.checked');
    loginPg.elements.loginButton().should('be.disabled');
    
    cy.fixture('example').then ( (data) => {
    loginPg.enterUserName('data.username');
    loginPg.elements.loginButton().should('be.enabled');
  
    loginPg.openToolTip();
    loginPg.elements.usernameTooltipHeader().should('have.text', 'Username');
    loginPg.closeToolTip();
    })
  })


 it('Visit WayToBankPage', () => {
  atmSearchPg.visitATMSearchPage();
  cy.url().should('contains', 'ways-to-bank/branches/') ;
  atmSearchPg.elements.waysToBankHeader().contains('Branches & ATMs');
});

it.only('Search for Nearest Bank', () => {
  atmSearchPg.searchForNearestBranch('India{enter}');
  atmSearchPg.elements.searchResult().should('contain','Rajbhavan');
  atmSearchPg.elements.showMoreResultsButton().click();
  atmSearchPg.elements.searchResultTwo().contains('2').should('have.css', 'background-color', 'rgb(219, 0, 17)'); 

 });

it('Validate Credit Card Options', () => {
  homePg.visitCreditCardSubMenu();
  creditCardPg.elements.creditCardPageHeader().should('contain', 'Credit cards');
  creditCardPg.elements.applyNowButton().should('exist');
  creditCardPg.elements.creditCardOffersModule().should('have.length', '3');
  creditCardPg.elements.creditCardFirstImage().should('have.attr', 'alt', 'HSBC Visa Cashback Credit Card');
  creditCardPg.elements.creditCardFirstHeader().contains('HSBC Cashback Credit Card');
  creditCardPg.verifyCreditCardOfferOptions();
});

it('Validate Privacy Page Header', () => {
  homePg.navigateToPrivacyStatement();
  homePg.elements.privacyHeader().should('contain', "Privacy Statement");
});

it ('Validate Compare Cards Module', () => {
  creditCardPg.visitCreditCardPage();
  creditCardPg.elements.creditCardFirstCompareCardsButton().click();
  creditCardPg.elements.creditCardsToCompareCloseButton().should('exist');
  creditCardPg.elements.creditCardToCompareHeader().contains('Select cards to compare');
  creditCardPg.elements.creditCardCountToCompare().should('have.length', '3');

  cy.get('.tile-selector').should('contain.text', "Credit Card")
    .eq(0).click();
  cy.get('.tile-selector').should('contain.text', "Credit Card")
    .eq(1).click();
  creditCardPg.elements.creditCardCompareButton().click();

  //verify images
  creditCardPg.elements.creditCardImage1().should('exist');
  creditCardPg.elements.creditCardImage2().should('exist');

  //verify remove links
  creditCardPg.elements.removeCard1().should('exist');
  creditCardPg.elements.removeCard2().should('exist'); 

  it('Add New Card', () => {
  //add card link
  creditCardPg.elements.addCardLink().click();

  //select third card
  creditCardPg.elements.addThirdCard().click();
  creditCardPg.elements.creditCardCompareButton().click();

  // verify images
   creditCardPg.elements.creditCardImage1().should('exist');
   creditCardPg.elements.creditCardImage2().should('exist');
   creditCardPg.elements.creditCardImage3().should('exist');
  
   //verify remove links
    creditCardPg.elements.removeCard1().should('exist');
    creditCardPg.elements.removeCard2().should('exist');
    creditCardPg.elements.removeCard3().should('exist');
  });


  it('Remove a Card', () => {
    creditCardPg.elements.removeCard3().click();
    creditCardPg.elements.creditCardImage2().should('exist');
    creditCardPg.elements.creditCardImage3().should('exist');
  });


  it('Cancel Selection of Card Offer', () =>{
    creditCardPg.elements.addThirdCard().click();
    creditCardPg.elements.creditCardsToCompareCloseButton();

  });
   
  });


});





   

 
   



  
    

 


  
