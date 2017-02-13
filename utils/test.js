var utils = require('./utils');
var assert = require('assert');

describe('utils', function(){

  var isOdd = utils.isOdd;

  describe('isOdd', function(){
    it('is named \'isOdd\'', function(){
      assert.equal(isOdd.name, 'isOdd');
    });

    it('takes one argument: num', function(){
      assert.equal(isOdd.length, 1);
    });

    it('throw TypeError if argument is not an integer', function(){
      assert.throws(function(){
        isOdd('not an integer');
      }, function(e){
        if(e instanceof TypeError){
          return true;
        }
      })
    });

    it('returns true if num is odd', function(){
      assert(isOdd(3));
    });
    it('returns false if num is even', function(){
      assert(!isOdd(4));
    });
    it('returns false if num is negative and odd', function(){
      assert(isOdd(-21));
    });
    it('returns false if num is negative and even', function(){
      assert(!isOdd(-40));
    });

  });

  var isEven = utils.isEven;

  describe('isEven', function(){
    it('returns true if num is even', function(){
      assert(isEven(4));
    });
    it('returns false if num is odd', function(){
      assert(!isEven(3));
    });
    it('returns true if num is negative and even', function(){
      assert(isEven(-4));
    });
    it('returns false if num is negative and odd', function(){
      assert(!isEven(-3));
    });

  });


});