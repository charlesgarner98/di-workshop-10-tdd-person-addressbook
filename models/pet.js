class Pet {
  constructor(name, animal) {
    this.name = name
    this.animal = animal
  }
  sound() {
    if (this.animal == 'cat') {
      return 'Meow'
    } else if (this.animal == 'dog') {
      return 'Woof'
    } else if (this.animal == 'fish') {
      return 'Blub'
    } else {
      return 'Unknown'
    }
  }
}

module.exports = Pet
