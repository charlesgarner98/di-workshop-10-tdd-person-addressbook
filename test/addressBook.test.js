const chai = require('chai')
const expect = chai.expect

var AddressBook = require('../models/addressBook.js')

describe('Address Book', function() {
  it('Initialises Properly', function(){
    book = new AddressBook
    expect(book.entries).to.deep.equal([])
  })
})
