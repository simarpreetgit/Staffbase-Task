////// <reference types = "Cypress" />

describe('lambda', () => {
  it('cross origin test', () => {
    // cy.visit(
    //   'https://accounts.lambdatest.com/login?_gl=1*13uuoao*_gcl_aw*R0NMLjE2NzAyNTUwODguQ2owS0NRaUF5cmFjQmhEb0FSSXNBQ0dGY1M0bzU2YjB4WkZWOGM2NXltenZfZm5rYkYxNkRpQV9lbmItc214MGduZ2JGMmhRRVZxalZFOGFBamc1RUFMd193Y0I.',
    // )
    // cy.get("a[href='/login/github/v1']").click()

    // cy.origin('https://github.com/', () => {
    //   cy.get('#login_field').type('hel')
    // })
    cy.visit(
      'https://staffbase.com/jobs/quality-assurance-engineer-2021_1730/apply',
    )
    cy.wait(20000)
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
