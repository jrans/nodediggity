//var QUnit = require('qunitjs');
//console.log(QUnit);
//Test battery for skeleton of this page
QUnit.test('Divs exist and in correct order', function(){
//    var iframe = document.getElementById('if-index');
//    var target = iframe.contentDocument || iframe.contentWindow.document;
    var main = document.getElementsByTagName('div')[0].id;
    var search = document.getElementsByTagName('div')[1].id;
    var searchRes = document.getElementsByTagName('div')[2].id;
    var history = document.getElementsByTagName('div')[3].id;
    var searchHist = document.getElementsByTagName('div')[4].id;
    var histres = document.getElementsByTagName('div')[5].id;
    var random = document.getElementsByTagName('div')[6].id;
    var randres = document.getElementsByTagName('div')[7].id;
    var navigation = document.getElementsByTagName('div')[8].id;
    var searchreq = document.getElementsByTagName('button')[0].id;
    var searchb = document.getElementsByTagName('button')[1].id;
    var histb = document.getElementsByTagName('button')[2].id;
    var randomb = document.getElementsByTagName('button')[3].id;
    equal(main, "main", "main div present");
    equal(search, "search", "search div present");
    equal(searchRes, "search-res", "search results div present");
    equal(history, "history", "history div present");
    equal(searchHist, "search-hist", "history search div present");
    equal(histres, "hist-res", "history results div present");
    equal(random, "random", "random div present");
    equal(randres, "rand-res", "random results div present");
    equal(navigation, "navigation", "navigation div present");
    equal(searchreq, "search-req", "search request button present");
    equal(searchb, "search-b", "search div button present");
    equal(histb, "history-b", "history div button present");
    equal(randomb, "random-b", "random div button present");
    //equal(last, "footer", "header div present and on top");
});


//Attempt to write a test that checks to see right number of buttons in nav bar
//QUnit.test('buttons in nav bar', function() {
//    var navContents = document.getElementById('navigation').children;
//    console.log(navContents);
//    var numberButtons = navContents.length;
//    console.log(numberButtons);
//    var buttonCount = 0;
//    for(var i=0;i<navContents.length;i++) {
//        if(document.getElementById('navigation')[i] == 'button') {
//            console.log(navContents[i]);
//            console.log(navContents[i].class);
//            buttonCount = (buttonCount + 1);
//        } else {};
//        return buttonCount;
//    }; 
//    console.log(buttonCount);
//    //button testing, they are all buttons, if one not true will turn flag false
//    equal(numberButtons, buttonCount, '3 buttons present');
//
//});

QUnit.test('Input value to dictionary works', function(assert){
    //var done = assert.async();
    //assert.expect(4);
//check that value in form can go to dictionary
    var test = document.getElementById('search-input').value;
    console.log('test var is: ' + document.getElementById('search-input').value);
    $.get('/find/' + test, function handler(data) {
        console.log(data);
        var words = data.split(',');
        assert.equal(words.length, 4, 'number of suggestions for awes is 4');
  });
}); 

//QUnit.test('Search for words beginning with awes', function(assert){
//  var done = assert.async();
//  $.get('/find/awes', function handler(data) {
//    console.log(data);
//    var words = data.split(',');
//    assert.equal(words.length, 4, 'number of suggestions for awes is 4');
//  });
//});






//$('#search').keyup(function(e) {
//    var word = $('#search').val();
//    if (word.length > 2) {
//      $.get('/find/'+word, function handler(data) {
//        console.log(data);
//        var words = data.split(',');
//        var results = '';
//        for(var i=0; i < words.length; i++) {
//          results += "<p> " + words[i] + "</p>";
//        }
//        $('#results').html(results);
//      });
//    }
//})


