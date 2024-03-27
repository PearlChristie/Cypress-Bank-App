export class ATMSearchPage{
      
    // Page Objects - Web Elements and their locations
    elements = {

                nearestBranchLink : () => cy.get('nav > .footer-large > :nth-child(2) > a'),
                waysToBankHeader : () => cy.get('.A-TYP38L-RW-ALL'),

                branchATMLocatorButton : () => cy.get('#content_main_button_1'),
                branchFinderSearchBox : () => cy.get('#searchInput'),
                searchResultOption : () => cy.get('#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc'),
                searchResult : () => cy.get('.uItFVQvJsoQVBXhG5ERC'),

                showMoreResultsButton : () => cy.get('.F2AanyfgyiGzuY7KkfBN'),
                searchResultTwo: () => cy.get(':nth-child(2) > .S4y5MRLMz5P7VsczpZwj'),

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