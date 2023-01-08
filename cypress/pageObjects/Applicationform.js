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
    cy.iframejobApplication().find("#s3_upload_for_resume input[type='file']")
  }
}

export default Applicationform
