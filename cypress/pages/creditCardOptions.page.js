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
    return cy.xpath('//button[@class="A-BTNP-RW-ALL"]');
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
    return cy.get('.tile-selector').invoke('css', 'visibility', 'visible');
  }

  getRemoveCard1() {
    return cy.xpath('(//a[@class="A-TYPS7R-RW-DEV link-icon clear-icon"])[1]').invoke('css', 'visibility', 'visible');
  }

  getRemoveCard2(){
    return cy.xpath('(//a[@class="A-TYPS7R-RW-DEV link-icon clear-icon"])[2]').invoke('css', 'visibility', 'visible');
  }

  getRemoveCard3(){
    return cy.xpath('(//a[@class="A-TYPS7R-RW-DEV link-icon clear-icon"])[3]').invoke('css', 'visibility', 'visible');
  }

  getAddCardLink(){
   // (//a[@class="A-TYPS7R-RW-DEV link-icon add-icon"])[1]
    return cy.xpath('(//a[@class="A-TYPS7R-RW-DEV link-icon add-icon"])[1]').invoke('css', 'visibility', 'visible');
  }

// ------------------------------------------------------------------------------------------------------------------------
    // Methods - Are the actions to perform on the same page objects above in the login page

    visitCreditCardPage(){
    cy.visit('/credit-cards/')
   
    } 

    visitCompareCardsSideBySide(){
      cy.visit('/compare/premier-mastercard-credit-card/#?pc-products=cashback-credit-card');
    }

    verifyCreditCardOfferOptions(){
      this.getCreditCardFirstCompareCardsButton().should('exist');
      this.getCreditCardFirstFindOutMoreButton().should('exist');
      this.getCreditCardFirstApplyNowButton().should('exist');
    }

    selectCreditCardOffersFromModule(){
      this. getCreditCardOfferSelected().eq(0).click();
      this. getCreditCardOfferSelected().eq(1).click();
      this. getCreditCardCompareButton().click({ force: true });

    }

    compareCards(){
      this.getCreditCardFirstCompareCardsButton().click();
    }

    addNewCard(){
      this.getCreditCardOfferSelected().eq(2).click();
      this.getCreditCardCompareButton().click({ force: true });
    }

    cancelSelection(){
      this.getAddCardLink().click({ force: true });
      this.getCreditCardsToCompareCloseButton();
    }

    removeCard(){
      this.getRemoveCard2().click({ force: true });
    }
  
    
   
   
    }
    
    
