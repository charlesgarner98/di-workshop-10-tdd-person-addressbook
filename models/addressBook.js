class AddressBook {
  constructor() {
    this.entries = []
  }
  add(person) {
    this.entries.push(person)
  }
  findByFirstName(firstName) {
    var searchResults = []
    for (var person of this.entries) {
      if (person.firstName == firstName) {
        searchResults.push(person)
      }
    }
    return searchResults
  }
  findBySurname(surname) {
    var searchResults = []
    for (var person of this.entries) {
      if (person.surname == surname) {
        searchResults.push(person)
      }
    }
    return searchResults
  }
  save() {
    var fs = require('fs') //Require fs for file handling
    
    this.jsonString = JSON.stringify(this.entries, null, 2)
    fs.writeFileSync('addressBook.json', this.jsonString, 'utf-8')
  }
}

module.exports = AddressBook
