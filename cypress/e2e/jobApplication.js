/// <reference types = "cypress" />

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
      .find("#s3_upload_for_resume input[type='file']")
      .selectFile('cypress/fixtures/simar.pdf', { force: true })

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
      .type(
        'https://github.com/simarpreetgit/Staffbase-Task/tree/main/cypress/e2e',
      )
    cy.iframejobApplication().find('#submit_app').click()
    cy.wait(2000)
    cy.iframejobApplication()
      .find('#application_confirmation')
      .should('include.text', 'Thank you for applying')
  })

  it('Should not be able to submit a job application successfully', () => {
    cy.visit(
      'https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(2000)
    cy.iframejobApplication().find('#submit_app').click()
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
