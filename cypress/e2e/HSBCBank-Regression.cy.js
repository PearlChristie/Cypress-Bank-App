/// to work on assertions in separate class and fixtures for data
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
    cy.viewport(1280, 1200);
    cy.visit('/');
    cy.wait(10000);
  });
 
  
  it.only('Visit HSBC', () => {
    loginPg.verifyHeader();
    cy.contains('HSBC').should('be.visible')
  });

  it('Verify Social Media Icons', () => {
   cy.scrollTo('bottomRight');
   loginPg.getSocialLinks().should('have.length', '4');
 })

  it('Verify Initial State of Login Page', () => {
    loginPg.visitloginPg();
    loginPg.getLogOnHeader().should('include.text', 'Log On');
    loginPg.getRememberMeCheckbox().should('not.be.checked');
    loginPg.getLogInButton().should('be.disabled');
    
    loginPg.enterUserName(data.username);
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
  creditCardPg.compareCards();

  creditCardPg.getCreditCardsToCompareCloseButton().should('exist');
  creditCardPg.getCreditCardToCompareHeader().contains('Select cards to compare');
  creditCardPg.getCreditCardCountToCompare().should('have.length', '3');
  
});

it('Select Credit Card Offers', () => {
  creditCardPg.visitCreditCardPage();
  creditCardPg.compareCards();
  creditCardPg.selectCreditCardOffersFromModule();
  creditCardPg.getCreditCardOfferSelected().should('contain.text', "Credit Card").eq(0).click();
  creditCardPg.getCreditCardOfferSelected().should('contain.text', "Credit Card").eq(1).click();
 
  creditCardPg.getCreditCardImage1().should('exist');
  creditCardPg.getCreditCardImage2().should('exist');
  creditCardPg.getRemoveCard1().should('exist');
  creditCardPg.getRemoveCard2().should('exist');

  creditCardPg.getAddCardLink().click({ force: true });
  creditCardPg.addNewCard();
  creditCardPg.removeCard();
  creditCardPg.cancelSelection();
  
});


   






   

 
   



  
    

 


  
