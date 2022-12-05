/// <reference types = "Cypress" />

describe('verify the Staffbase job portal via linkedIn.', () => {
  it('Should be able to submit a job application successfully via linkedLin button.', () => {
    //cy.viewport(1000, 600)
    cy.visit(
      'https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.wait(20000)
    //Using customcommand to loacte iframe
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#grnhse_iframe').within(($iframe) => {
      const [grnhse_iframe] = $iframe.get()
      grnhse_iframe.contentDocument.body
        .getElementsByTagName('iframe')[0]
        .contentDocument.body.querySelector('button#apply-with-linkedin')
        .click()
    })

    cy.wait(20000)
    cy.origin('https://www.linkedin.com/', () => {
      cy.get('#username').clear().type('simar')
    })
  })
})
