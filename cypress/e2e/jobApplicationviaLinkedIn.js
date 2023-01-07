/// <reference types = "cypress" />

describe('verify the Staffbase job portal via linkedIn.', () => {
  it('Should be able to submit a job application via linkedLin button.', () => {
    //cy.viewport(1000, 600)
    cy.visit(
      'http://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()

    const newUrl = 'https://www.linkedin.com/'
    cy.window().then((win) => {
      win.location.href = newUrl
    })
    cy.get('#email-or-phone').type('9898909')
    cy.get('#password').type('testing')
    cy.get('#join-form-submit').click()
  })
})
