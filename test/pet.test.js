const chai = require('chai')
const expect = chai.expect

var Pet = require('../models/pet.js')

describe('Pets', function() {
  it('should initialise properly', function(){
    var pet = new Pet('AdaCat', 'cat')

    expect(pet.name).to.equal('AdaCat')
    expect(pet.animal).to.equal('cat')

  })
  it('should return sound', function(){
    var pet = new Pet('AdaCat', 'cat')

    expect(pet.sound()).to.equal('Meow')

  })
})
