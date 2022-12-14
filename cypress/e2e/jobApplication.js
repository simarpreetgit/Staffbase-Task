/// <reference types = "cypress" />
import Applicationform from '../pageObjects/Applicationform'

describe('verify the Staffbase job portal.', () => {
  before(() => {
    cy.fixture('userdetails').then((data) => {
      globalThis.data = data
    })
  })
  it.only('Should be able to submit a job application successfully.', () => {
    //cy.viewport(1000, 600)
    cy.visit('https://staffbase.com/jobs/quality-assurance-engineer-2021_1730')
    // Handle cookies popup
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.bg-yellow-staffbase:visible').click()
    cy.url().should('include', 'apply')
    //wait for linkedIn (post api) to load iframe that depends on net speed
    cy.wait(2000)
    //Using pageObjects model
    const applicationform = new Applicationform()
    applicationform.getFirstName().type(data.first_name).should('be.visible')
    applicationform.getLastName().type(data.last_name).should('be.visible')
    applicationform.getEmail().type(data.email).should('be.visible')
    applicationform.getPhone().type(data.phone).should('be.visible')
    applicationform
      .getResume()
      .selectFile('cypress/fixtures/simar.pdf', { force: true })
    applicationform.getAcknowledgement().select('Yes', { force: true })
    applicationform
      .getGithubProfile()
      .type(
        'https://github.com/simarpreetgit/Staffbase-Task/tree/main/cypress/e2e',
      )
    applicationform.getSubmitButton().click()

    //wait for page load (external HTMl)
    cy.wait(2000)

    applicationform
      .getConfirmation()
      .should('include.text', 'Thank you for applying')
  })

  it('Should not be able to submit a job application successfully', () => {
    cy.visit(
      'https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(2000)
    applicationform.getSubmitButton().click()

    cy.iframejobApplication()
      .find('#first_name_error')
      .should('have.text', 'First Name is required.')

    cy.iframejobApplication()
      .find('#last_name_error')
      .should('have.text', 'Last Name is required.')

    cy.iframejobApplication()
      .find('#email_error')
      .should('have.text', 'Email is required.')

    cy.iframejobApplication()
      .find('#phone_error')
      .should('have.text', 'Phone is required.')

    cy.iframejobApplication()
      .find('#validate_resume_error')
      .should('have.text', 'Resume/CV is required.')

    cy.wait(2000)

    cy.iframejobApplication()
      .find(
        '#job_application_answers_attributes_1_answer_selected_options_attributes_1_question_option_id_error',
      )
      .should('have.text', 'This field is required.')

    cy.iframejobApplication()
      .find('#job_application_answers_attributes_2_text_value_error')
      .should('have.text', 'This field is required.')
  })
})
