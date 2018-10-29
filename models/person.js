// Your Person class goes here!
class Person {
  constructor(firstName, surname, dob) {
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    this.surname = surname
    this.dob = dob
    this.emails = []
    this.phoneNumbers = []
  }
  fullname() {
    return this.firstName + ' ' + this.surname
  }
  addEmail(email) {
    this.emails.push(email)
  }
  addPhoneNumber(number) {
    this.phoneNumbers.push(number)
  }
  returnFormattedDetails() {
    var details = []
    details.push(this.fullname())
    details.push('----------')
    details.push('DOB: ' + this.dob)
    details.push('')
    details.push('Email Addresses:')
    for (var email of this.emails) {
      details.push('- ' + email)
    }
    details.push('')
    details.push('Phone Numbers:')
    for (var number of this.phoneNumbers) {
      details.push('- ' + number)
    }
    return details.join('\r\n')
  }
}

module.exports = Person
