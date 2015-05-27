var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');

//load in the words from the file
ac.import(function(err, count) {
  console.log("imported a bunch of words! >> ", count.length);
});

var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }

  if (url.indexOf('/find/') > -1) {
    // locahost:3000/find/word
    var word = url.split('/')[2];
    // console.log(word);
    ac.findWord(word, function (err, found){
      // console.log(found);
      response.end(found.join(','));
    });
    // response.end('word: ', word);
  }

  if(url.indexOf('/test/')){
  	ac.define('shirt', function(err, definition){
  		 
  		response.end(definition[0].text); 
  		console.log('definition: '+definition[0].text);  
  	}); 
  		
  		
	// console.log('your requested this url: '+ url); 
	// console.log('------------------------------')
  }

  else {
    response.end('hello Dan!');
  }

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
console.log('Test');
