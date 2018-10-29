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
  })
})
