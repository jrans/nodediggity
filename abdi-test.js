var assert = require('assert'); // using the node core module 'assert'
var ac = require('../'); //('../index[.js]')

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("#test: ac.import imports a list of words into memory");
ac.import(function (err, words) {
  console.log("words.txt had " + words.length + " words in it");
  assert.equal(words.length, 235887);
});

console.log("#test: attempt to invoke ac.import without a valid callback");
var error = ac.import('string');
assert.equal(error.message, 'callback argument MUST be a function');

ac.import(function(){
  console.log('#test: ac.findWord finds a string in words array');
  ac.findWord('awes', function (err, found){
    console.log(found);
    assert.equal(err, null);
    assert.equal(found.length, 4);
  });
});


ac.import(function(){
  console.log('#test: ac.stats tracks which words/string were searched for');
  ac.stats('rubies', function (err, stats){
    console.log(stats);
    assert.equal(stats['rubies'].length, 1);
    ac.stats('rubies', function (err, stats){
      console.log(stats);
      assert.equal(stats['rubies'].length, 2);
    });
  });
});

ac.import(function(){

  var word = 'shirt'; 

  ac.define(word, function(err, definition){

    assert.equal(definition, ' A garment for the upper part of the body, typically having a collar, sleeves, and a front opening.')

  })

})


//index.js
// ac.import is a function
// this function has a parameter
// this parameter is our callback function
// ac.import does some stuff
// at the end of ac.import, the callback is called
// the callback is called with the stuff ac.import did

//test.js
// when we call ac.import, it takes a function
// (this function plugs into callback)
// this function will automatically have:
// the stuff that was given to the callback (when we defined ac.import)
// here, parameter passed to the callback function here is a placeholder/reference to the actual stuff we were given by ac.import
