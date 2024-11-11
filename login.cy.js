describe('Проверка авторизации', function () {

 it('Ввести правильный логин и правильный пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Авторизация прошла успешно');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 
 it('Востановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

 it('Ввести правильный логин и неправильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('123456789');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

 it('Ввести неправильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dol.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })   

 it('Ввести логин без @ и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 
    
 it('Приведение к строчным буквам в поле логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })   
 }) 