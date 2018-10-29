const chai = require('chai')
const expect = chai.expect

var Person = require('../models/Person.js')

// Your Person test goes here!
describe('Person', function() {
  it('should initialise properly', function() {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.firstName).to.equal('Joe')
    expect(person.surname).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1990')
    expect(person.emails).to.deep.equal([])
    expect(person.phoneNumbers).to.deep.equal([])
  })

  it('should capitialise firstname', function() {
    var person = new Person('joe', 'Bloggs', '1 Jan 1990')

    expect(person.firstName).to.equal('Joe')
  })

  it('should return a full name', function() {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.fullname()).to.equal('Joe Bloggs')
  })

  it('should accept new emails and add them to the array', function() {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addEmail('joe@example.com')
    person.addEmail('joe.bloggs@work.com')
    expect(person.emails).to.deep.equal(['joe@example.com','joe.bloggs@work.com'])
  })

  it('should accept new phone numbers and add them to the array', function() {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addPhoneNumber('01111111111')
    person.addPhoneNumber('07777777777')
    expect(person.phoneNumbers).to.deep.equal(['01111111111','07777777777'])
  })

  it('should return data in a well formatted way', function() {
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addEmail('joe@example.com')
    person.addEmail('joe.bloggs@workexample.com')
    person.addPhoneNumber('07712345678')
    person.addPhoneNumber('07654321987')

    expect(person.returnFormattedDetails()).to.equal('Joe Bloggs\r\n----------\r\nDOB: 1 Jan 1990\r\n\r\nEmail Addresses:\r\n- joe@example.com\r\n- joe.bloggs@workexample.com\r\n\r\nPhone Numbers:\r\n- 07712345678\r\n- 07654321987')
  })
})
