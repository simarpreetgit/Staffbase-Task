class Applicationform {
  getFirstName() {
    return cy.iframejobApplication().find('#first_name')
  }

  getLastName() {
    return cy.iframejobApplication().find('#last_name')
  }
  getEmail() {
    return cy.iframejobApplication().find('#email')
  }
  getPhone() {
    return cy.iframejobApplication().find('#phone')
  }
  getResume() {
    return cy
      .iframejobApplication()
      .find("#s3_upload_for_resume input[type='file']")
  }
  getAcknowledgement() {
    return cy
      .iframejobApplication()
      .find(
        '#job_application_answers_attributes_1_answer_selected_options_attributes_1_question_option_id',
      )
  }
  getGithubProfile() {
    return cy
      .iframejobApplication()
      .find('#job_application_answers_attributes_2_text_value')
  }
  getSubmitButton() {
    return cy.iframejobApplication().find('#submit_app')
  }
  getConfirmation() {
    return cy.iframejobApplication().find('#application_confirmation')
  }
}

export default Applicationform
