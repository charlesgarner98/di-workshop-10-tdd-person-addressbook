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
})
