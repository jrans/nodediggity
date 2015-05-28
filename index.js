var fs = require('fs');
var http = require('http');
var ac = {};

ac.import = function(callback){ // saving import fct as a property of ac{}
  if(!callback || typeof callback !== 'function'){
    return new Error('callback argument MUST be a function');
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function(err, data){ // fs.readFile(myFile, ['utf8'], callback)
    ac.words = data.split('\n'); // stores array of words in ac{}
    return callback(err, ac.words); // call callback function on ac.words
  });
};

ac.stats = function(word, callee, callback){  
  if (!ac.searches){
    ac.searches = {};
  }
  if (!ac.searches[word]){
    ac.searches[word] = {find:[],define:[]};
  }
  ac.searches[word][callee].push(new Date().getTime());
  callback(null, ac.searches);
  console.log(ac.searches);
};

ac.findWord = function (word, callback){
  //var found = ac.words[ac.words.indexOf(word)];
  var found = [];
  for (var i = 0; i < ac.words.length; i++){
    if (ac.words[i].search(word) === 0){
      found.push(ac.words[i]);
    }
  }
  return callback(null,found);

};

// record timestamp at which a search was made

//define method on ac module
ac.define = function (word, callback){
	var wordDef;
	var body = '';
	var url = 'http://api.wordnik.com/v4/word.json/'+ word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

	var request = http.get(url, function(response) {

		//Read the data
        response.on('data', function (chunk) {
            body += chunk;

        });

        response.on('end', function () {
            // if(response.statusCode === 200) {

                wordDef = JSON.parse(body);
                //console.log(body);
                return callback(null, wordDef);
            // }
        });


	});



};

module.exports = ac;// exporting ac object to use elsewhere
