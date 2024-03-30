export class ATMSearchPage{
      
    // Page Objects - Web Elements and their locations        
  getNearestBranchLink(){
      return cy.get('nav > .footer-large > :nth-child(2) > a');
  }

  getWaysToBankHeader() {
      return cy.get('.A-TYP38L-RW-ALL');
    }

  getBranchATMLocatorButton(){
      return cy.get('#content_main_button_1');
    }
  
  getBranchFinderSearchBox(){
      return cy.get('#searchInput');
  }

  getSearchResultOption(){
    return cy.get('#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc');
  }

  getSearchResult(){
    return cy.get('.uItFVQvJsoQVBXhG5ERC');
  }

  getShowMoreResultsButton(){
      return cy.get('#username_submit_btn');
    }

  getSearchResultTwo(){
    cy.get(':nth-child(2) > .S4y5MRLMz5P7VsczpZwj');
  }
  
    // Methods - Are the actions to perform on the same page objects above in the login page

    visitATMSearchPage(){
      cy.visit('/ways-to-bank/branches/');
   
    } 
    
    searchForNearestBranch(country){
      this.visitATMSearchPage();
      this.elements.branchATMLocatorButton().click();
      this.elements.branchFinderSearchBox().click();
      this.elements.branchFinderSearchBox().type(country);
    }
}