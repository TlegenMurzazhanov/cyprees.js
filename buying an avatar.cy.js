describe('Покурка нового аватара', function () {

    it('Тест на покупку нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('user_login');
         cy.get('#password').type('user_password');
         cy.get('.auth__button').click();
         cy.get('.header__id-texts').click();
         cy.get('[href="/shop"]').click();
         cy.get(':nth-child(3) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');  
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     })
 }) 