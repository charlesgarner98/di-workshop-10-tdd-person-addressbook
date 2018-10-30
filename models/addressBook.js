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
}

module.exports = AddressBook
