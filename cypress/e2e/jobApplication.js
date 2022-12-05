/// <reference types = "Cypress" />

describe('verify the Staffbase job portal.', () => {
  before(() => {
    cy.fixture('userdetails').then((data) => {
      globalThis.data = data
    })
  })
  it('Should  be able to submit a job application successfully.', () => {
    //cy.viewport(1000, 600)
    cy.visit('https://staffbase.com/jobs/quality-assurance-engineer-2021_1730')
    // Handle cookies popup
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.bg-yellow-staffbase').eq(1).click()
    cy.url().should('include', 'apply')
    //wait for linkedIn (post api) to load iframe that depends on net speed
    cy.wait(5000)
    //Using customcommand to loacte iframe
    cy.iframejobApplication()
      .find('#first_name')
      .type(data.first_name)
      .should('be.visible')
    cy.iframejobApplication()
      .find('#last_name')
      .type(data.last_name)
      .should('be.visible')
    cy.iframejobApplication()
      .find('#email')
      .type(data.email)
      .should('be.visible')
    cy.iframejobApplication()
      .find('#phone')
      .type(data.phone)
      .should('be.visible')
    cy.iframejobApplication()
      .find('.link-container')
      .eq(0)
      .type('From Simarpreet Singh automation')

    //Using promise to alocate the child element to visible
    cy.iframejobApplication()
      .find('.select2-choice')
      .click()
      .then(() => {
        cy.iframejobApplication()
          .find('.select2-match')
          .eq(1)
          .click({ force: true })
      })

    cy.iframejobApplication()
      .find('#job_application_answers_attributes_0_text_value')
      .type("No I don't require sponsorship ")
    cy.iframejobApplication()
      .find('#job_application_answers_attributes_2_text_value')
      .type('123')
    // cy.iframeApplication().find('#submit_app').click()

    cy.iframejobApplication().find('#apply-with-linkedin').click()
  })
})
