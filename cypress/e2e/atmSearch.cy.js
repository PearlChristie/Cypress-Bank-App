/// <reference types='cypress'/>
import { ATMSearchPage } from "../pages/atmSearch.page.js"

const atmSearch = new ATMSearchPage()

describe('Bank App Test Suite', () => {

  before(() => {
    cy.visit('/')
  });
 
  
 it('Visit WayToBankPage', () => {
    atmSearch.visitATMSearchPage();
    cy.url().should('contains', 'ways-to-bank/branches/') ;
    atmSearch.elements.waysToBankHeader().contains('Branches & ATMs');
  });

  it('Search for Nearest Bank', () => {
   atmSearch.searchForNearestBranch('India');
   atmSearch.elements.searchResult().contains('Rajbhavan');
   atmSearch.elements.showMoreResultsButton().click();
   atmSearch.elements.searchResultTwo().contains('2').should('have.css', 'background-color', 'rgb(219, 0, 17)'); 

   });

  }) 
