const chai = require('chai')
const expect = chai.expect

var AddressBook = require('../models/addressBook.js')
var Person = require('../models/person.js')

describe('Address Book', function() {
  it('should initialises properly', function(){
    book = new AddressBook()
    expect(book.entries).to.deep.equal([])
  })

  it('can add people to the book', function(){
    book = new AddressBook()
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990')

    book.add(person1)
    expect(book.entries.length).to.equal(1)
    expect(book.entries[0].firstName).to.equal('Joe')
    expect(book.entries[0].surname).to.equal('Bloggs')
    expect(book.entries[0].dob).to.equal('1 Jan 1990')
    expect(book.entries[0].emails).to.deep.equal([])
    expect(book.entries[0].phoneNumbers).to.deep.equal([])
  })

  it('should return search results in an array', function(){
    book = new AddressBook()
    person1 = new Person('Joe', 'Bloggs', '1 Jan 1990')
    book.add(person1)

    expect(book.findByFirstName('Joe').length).to.equal(1)
    expect(book.findByFirstName('Joe')[0].firstName).to.equal('Joe')
    expect(book.findByFirstName('Joe')[0].surname).to.equal('Bloggs')
    expect(book.findByFirstName('Joe')[0].dob).to.equal('1 Jan 1990')
    expect(book.findByFirstName('Joe')[0].emails).to.deep.equal([])
    expect(book.findByFirstName('Joe')[0].phoneNumbers).to.deep.equal([])
  })
})
