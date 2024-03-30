export class CreditCardPage{

     // Page Objects - Web Elements and their locations
  getCreditCardPageHeader() {
     return cy.get('.A-TYP38L-RW-ALL');
    }
  
  getApplyNowButton(){
     return cy.get('#listing_intro_button_1 > [aria-hidden="true"]');
  }

  getCreditCardOffersModule(){
     return cy.get('.O-ADVPRDMOD-RW-DEV');
  }
  
  getCreditCardFirstImage(){
      return cy.get('#listing_main_image_3');
  }

  getCreditCardFirstHeader(){
    return cy.get('#listing_main_creditCardProductModule_1 > .product-general > .md-8 > .A-LNKND38L-RW-ALL');
  }

  getCreditCardFirstCompareCardsButton(){
    return cy.get('#listing_main_button_1');
  }

  getCreditCardFirstFindOutMoreButton(){
    return cy.get('#listing_main_button_2');
  } 

  getCreditCardFirstApplyNowButton(){
    return cy.get('#listing_main_button_3');
  } 

  getCreditCardsToCompareCloseButton(){
    return cy.get('.close-button');
  } 

  getCreditCardToCompareHeader(){
    return cy.get('.A-TYPS2R-RW-DEV');
  } 

  getCreditCardCountToCompare(){
    return cy.get('.container-title-checkbox');
  }

  getCreditCardCompareButton(){
    return cy.get('.A-BTNP-RW-ALL');
  }

  getCreditCardImage1(){
    return cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_1 > #pp_tools_image_2');
  } 

  getCreditCardImage2(){
    return cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_3 > #pp_tools_image_4');
  }

  getCreditCardImage3(){
    return cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_5 > #pp_tools_image_6');
  }

  getCreditCardOfferSelected(){
    return cy.get('.tile-selector');
  }

  getRemoveCard1() {
    return cy.get(':nth-child(1) > .A-TYPS7R-RW-DEV');
  }

  getRemoveCard2(){
    return cy.get(':nth-child(2) > .A-TYPS7R-RW-DEV');
  }

  getRemoveCard3(){
    return cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV');
  }

  getAddCardLink(){
    return cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV');
  }

  getAddThirdCard(){
    return cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox');
  }
// ------------------------------------------------------------------------------------------------------------------------
    // Methods - Are the actions to perform on the same page objects above in the login page

    visitCreditCardPage(){
    cy.visit('/credit-cards/')
   
    } 

    verifyCreditCardOfferOptions(){
      this.elements.creditCardFirstCompareCardsButton().should('exist');
      this.elements.creditCardFirstFindOutMoreButton().should('exist');
      this.elements.creditCardFirstApplyNowButton().should('exist');
    }

  
    
   
   
    }
    
    
