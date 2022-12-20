// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('iframejobApplication', () => {
  cy.get('#grnhse_iframe').its('0.contentDocument.body').then(cy.wrap)
})

Cypress.Commands.add('iframeforlinkedin', () => {
  cy.get('#grnhse_iframe').within(($iframe) => {
    const [grnhse_iframe] = $iframe.get()

    grnhse_iframe.contentDocument.body
      .getElementsByTagName('iframe')[0]
      .contentDocument.body.querySelector('button#apply-with-linkedin')
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
