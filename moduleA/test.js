var moduleA = require('./');
var assert = require('assert');

describe('moduleA', function(){

  var getGreatestBand = moduleA.getGreatestBand;

  describe('getGreatestBand', function(){

    it('returns the truth', function(){
      assert.equal(getGreatestBand(), 'Led Zeppelin');
    });
  });



});