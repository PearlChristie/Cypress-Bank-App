export class CreditCardPage{
      
    // Page Objects - Web Elements and their locations
    elements = {
               creditCardPageHeader : () => cy.get('.A-TYP38L-RW-ALL'),
               applyNowButton : () => cy.get('#listing_intro_button_1 > [aria-hidden="true"]'),
               creditCardOffersModule : () => cy.get('.O-ADVPRDMOD-RW-DEV'),

               creditCardFirstImage : () => cy.get('#listing_main_image_3'),
               creditCardFirstHeader : () => cy.get('#listing_main_creditCardProductModule_1 > .product-general > .md-8 > .A-LNKND38L-RW-ALL'),
               creditCardFirstCompareCardsButton : () => cy.get('#listing_main_button_1'),
               creditCardFirstFindOutMoreButton : () => cy.get('#listing_main_button_2'),
               creditCardFirstApplyNowButton : () => cy.get('#listing_main_button_3'),

               creditCardsToCompareCloseButton : () => cy.get('.close-button'),
               creditCardToCompareHeader : () => cy.get('.A-TYPS2R-RW-DEV'),
               creditCardCountToCompare : () => cy.get('.container-title-checkbox'),

               creditCardCompareButton : () => cy.get('.A-BTNP-RW-ALL'),
               creditCardImage1 : () => cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_1 > #pp_tools_image_2'),
               creditCardImage2 : () => cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_3 > #pp_tools_image_4'),
               creditCardImage3 : () => cy.get('.image-container > .smart-image > .M-IMG-RW-DEV > #pp_tools_image_5 > #pp_tools_image_6'),

               removeCard1 : () => cy.get(':nth-child(1) > .A-TYPS7R-RW-DEV'),
               removeCard2 : () => cy.get(':nth-child(2) > .A-TYPS7R-RW-DEV'),
               removeCard3 : () => cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV'),

               addCardLink : () => cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV'),
               addThirdCard : () => cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox'),
             
              

    }

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
    
    
