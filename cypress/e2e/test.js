/// <reference types = "Cypress" />

describe('verify the Staffbase job portal.', () => {
  before(() => {
    cy.fixture('userdetails').then((data) => {
      globalThis.data = data
    })
  })
  it('Should  be able to submit a job application successfully.', () => {
    //cy.viewport(1000, 600)
    cy.visit(
      'https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.wait(10000)
    //Using customcommand to loacte iframe
    cy.get('#onetrust-accept-btn-handler').click()
    cy.iframeLinkedin().find('#apply-with-linkedin').click()
  })
})
