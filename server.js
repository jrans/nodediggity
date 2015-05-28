var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
var word;

//load in the words from the file
ac.import(function(err, count) {
  console.log("imported a bunch of words! >> ", count.length);
});

var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
var indexTests = fs.readFileSync(__dirname + '/indextests.js');

http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);

  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }

  else if (url == "/indextests.js") {
  	response.writeHead(200, {"Content-Type": "text/javascript"});
    response.end(indexTests.toString());
  }

  else if (url.indexOf('/find/') ===0 ) {
    // locahost:3000/find/word

    word = url.split('/')[2];

    ac.stats(word,"find", function(err, searches){


    // console.log(word);
    ac.findWord(word, function (err, found){
      // console.log(found);
      response.end(found.join(','));     // response.end('word: ', word);

    });//ends findword


  });//end stats method


  }

  // if (url.indexOf('/searches/') > -1) {
  //   // locahost:3000/searches/word
  //   word = url.split('/')[2];
  //   // console.log(word);
  //   response.end(ac.searches);
  //   // response.end('word: ', word);
  // }


  else if (url.indexOf('/searches/') ===0) {
    word = url.split('/')[2];
    if (ac.searches){
      if (word===""){response.end(JSON.stringify(ac.searches));}
      else {
        if (ac.searches[word]){response.end(JSON.stringify(ac.searches[word]));}
        else {response.end("no word history");}
    }
  }
    else {response.end("no history");}
  }

  else if (url.indexOf('/define/') ===0) {
    // locahost:3000/define/find
    word = url.split('/')[2];
    // console.log(word);
    ac.stats(word,"define", function(err, searches){

    ac.define(word, function (err, definition){
      //console.log(definition);
      response.end(definition[0].text);
    });
    // response.end('word: ', word);

    });//end stats method

  }

  else {
    response.end('hello Dan!');
  }



}).listen(port);

console.log('node http server listening on http://localhost:' + port);
console.log('Test');
