var AddressBook = require('./models/addressBook.js')
var Person = require('./models/person.js')

var book = new AddressBook()
var person1 = new Person('Joe', 'Bloggs', '1 Jan 1990')
var person2 = new Person('Jane', 'Doe', '31 Dec 2000')

book.add(person1)
book.add(person2)

book.save()
