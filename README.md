# Word Finder (*autocomplete*) Mini (*Full-Stack*!) Project

[![Code Climate](https://codeclimate.com/github/jrans/nodediggity/badges/gpa.svg)](https://codeclimate.com/github/jrans/nodediggity)

[![Test Coverage](https://codeclimate.com/github/jrans/nodediggity/badges/coverage.svg)](https://codeclimate.com/github/jrans/nodediggity/coverage)

[![devDependency Status](https://david-dm.org/jrans/nodediggity/dev-status.svg)](https://david-dm.org/jrans/nodediggity#info=devDependencies)

[![Build Status](https://travis-ci.org/jrans/nodediggity.svg?branch=master)](https://travis-ci.org/jrans/nodediggity)

***Finding words*** in the dictionary used to be tedious and slow!
Now, its ***fast, easy and fun***!  
***autocomplete*** lets you ***easily find words in the english dictionary***!


About

This is a simple app that will autocomplete when you are searching for a particular word. The app supports a find feature which lets you find words in a dictionary and also find the definitions of any given word.  
















## Ignore below

Learning how to build full-stack single-page apps can be laborious when the example app isn't particularly interesing/engaging, **Word Finder** is an *ultra-simple* app that will teach you full-stack test-driven-development using (*only*) ***core node.js*** modules on the backend and basic JQuery on the front-end (*no fancy frameworks*)

## What?

A ***great*** (*search*) **word finder** (*user experience*) *always* starts with ***autocomplete***. Then when the person clicks/taps on the word they want the definition for, we show them the definition ***fast***!

> Insert links to Heroku examples + screenshots here once FAC5 have completed their projects! :wink:

## How?

### Run this project on your Local Machine

#### Clone the repo:

```sh
git clone https://github.com/jrans/nodediggity.git && cd nodediggity
```

#### Install the node.js devDependencies:

```sh
npm install
```

#### Run the (*module*) Tests:

```sh
npm test
```

#### Run the Server with [Nodemon](https://github.com/remy/nodemon):

```sh
npm run nodemon
```

## Features

### Autocomplete Module

+ [x] import a list of words into an array called words
+ [x] search through list of words for a string and return list of suggestions
+ [x] record the string that was searched for (for stats and graphs!)

### Autocomplete HTTP Server (API)

+ [x] serve an html page with a ***search box***
+ [x] expose the `ac.findWords` method as an API endpoint /find/:word
+ [x] display the ***definition*** of a word when the person clicks/taps (*or navigates using the keyboard arrows - for extra credits*!) to their desired word
+ [x] display the ***history*** of words people have searched for


# Goals (*in your teams of 4*)

## Pair 1

### Back end (*AKA "plumbers"* ... *un*-[***resilient***](http://en.wikipedia.org/wiki/Psychological_resilience) *people look elsewhere*!)

+ [ ] create an ***endpoint*** in server.js for the format: /define/:word which uses the ac module's findWords method to lookup word suggestions and returns an array of these suggestions as the http response

In your module (index.js)
+ [x] write a ***test*** for a new method "**define**" which will return a `callback(err, definition)` when you call it in the following way: `ac.define(word, callaback)`
+ [x] write the `ac.define` method to **request** a word definition from Wiktionary API (*requires google skillz*! - *document your finding!!*)
  + [x] parse the result of this API request and extract the definition
  + [x] return the *just* the definition to the client for display in the UI when client visits url: **/define/awesome**
+ [x] expose the **searches** property of the **ac** module url: /searches/ should return a json object which the client can interpret and display



## Pair 2

### Front end / UX ([*the fun zone*](https://goo.gl/mYVqp0)!)

1. [ ] Wireframe a great word searching user experience!

2. [ ] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words! (tip: you can build ("*fake*") the front-end (*look-and-feel*) while your back-end colleagues are building the endpoint(s) ...)

3. [ ] Display a stats (*searches*) for the words people have looked up in an intuitive and creative way!

> **Note**: even though you are running nodemon you still *may* not see the latest changes in your browser when you refresh the page...
sometimes you might need to completely ***re-start the server*** `npm run nodemon` to get the page to completely refresh ...

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project
+ [ ] learn about ***pre-commit hooks*** and add a pre-commit hook to lint
your code *before* anyone can commit (*unlinted*) code. (*code quality/consistency #FTW!*)

https://github.com/docdis/learn-pre-commit

everyone must type: npm install pre-commit to use this!
precommit in turn uses sitnabhul and jshint so install these too!... npm intstall jshint -g


+ [ ] Learn about ***CodeClimate***, signup using your  GitHub account and add badge to repo readme.
Code Climate in a Nutshell

Code Climate has one goal: Help you and your team write amazing code!

We run static and automated analysis on your Ruby on Rails, JavaScript, PHP (beta), or Python (beta) codebase, and then present you with easy-to-read, actionable findings.

How it Works

Step 1: Push commits to your GitHub or Internet-accessible Git repository.
Step 2: Code Climate automatically clones/pulls from your repository and analyzes each commit. Our analysis runs in minutes, not hours.
Step 3: See how your codebase is changing over time through our website (here's a tour!), smart email alerts, and integration notifications (like Slack and Campfire). You’re empowered to address code quality and security issues quickly, efficiently, and collaboratively.

The number in our badge is the code quality score for the project measured on a number of factors including Complexity/Simplicity, Readability, Maintainability, Repetition and Line-count-per-file . The maximum score is 4.0 and we obviously strive to achieve this level in all our work. https://github.com/docdis/learn-codeclimate

+ [ ] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [ ] add .**travis.yml** to your repo
  + [ ] add "***build passing***" badge to your readme
+ [ ] Add **Dependencies Badge** to your readme

see: https://github.com/dwyl/repo-badges

# Stretch Goals

## Deploy to Heroku

> Ask [**@Neats29**](https://github.com/Neats29) for help if you get stuck!

## Integrate *Another API* into your results!! :open_mouth:

e.g: Search for Tweets based on the word the person looked up!
or pictures on instagram, or news articles, etc.
# Word Finder (*autocomplete*) Mini (*Full-Stack*!) Project

[![Code Climate](https://codeclimate.com/github/jrans/nodediggity/badges/gpa.svg)](https://codeclimate.com/github/jrans/nodediggity)

[![Test Coverage](https://codeclimate.com/github/jrans/nodediggity/badges/coverage.svg)](https://codeclimate.com/github/jrans/nodediggity/coverage)

[![devDependency Status](https://david-dm.org/jrans/nodediggity/dev-status.svg)](https://david-dm.org/jrans/nodediggity#info=devDependencies)

[![Build Status](https://travis-ci.org/jrans/nodediggity.svg?branch=master)](https://travis-ci.org/jrans/nodediggity)

***Finding words*** in the dictionary used to be tedious and slow!
Now, its ***fast, easy and fun***!  
***autocomplete*** lets you ***easily find words in the english dictionary***!

## Why?

Learning how to build full-stack single-page apps can be laborious when the example app isn't particularly interesing/engaging, **Word Finder** is an *ultra-simple* app that will teach you full-stack test-driven-development using (*only*) ***core node.js*** modules on the backend and basic JQuery on the front-end (*no fancy frameworks*)

## What?

A ***great*** (*search*) **word finder** (*user experience*) *always* starts with ***autocomplete***. Then when the person clicks/taps on the word they want the definition for, we show them the definition ***fast***!

> Insert links to Heroku examples + screenshots here once FAC5 have completed their projects! :wink:

## How?

### Run this project on your Local Machine

#### Clone the repo:

```sh
git clone https://github.com/docdis/autocomplete.git && cd autocomplete
```

#### Install the node.js devDependencies:

```sh
npm install
```

#### Run the (*module*) Tests:

```sh
npm test
```

#### Run the Server with [Nodemon](https://github.com/remy/nodemon):

```sh
npm run nodemon
```

## Features

### Autocomplete Module

+ [x] import a list of words into an array called words
+ [x] search through list of words for a string and return list of suggestions
+ [x] record the string that was searched for (for stats and graphs!)

### Autocomplete HTTP Server (API)

+ [ ] serve an html page with a ***search box***
+ [ ] expose the `ac.findWords` method as an API endpoint /find/:word
+ [ ] display the ***definition*** of a word when the person clicks/taps (*or navigates using the keyboard arrows - for extra credits*!) to their desired word
+ [ ] display the ***history*** of words people have searched for


# Goals (*in your teams of 4*)

## Pair 1

### Back end (*AKA "plumbers"* ... *un*-[***resilient***](http://en.wikipedia.org/wiki/Psychological_resilience) *people look elsewhere*!)

+ [ ] create an ***endpoint*** in server.js for the format: /define/:word which uses the ac module's findWords method to lookup word suggestions and returns an array of these suggestions as the http response

In your module (index.js)
+ [ ] write a ***test*** for a new method "**define**" which will return a `callback(err, definition)` when you call it in the following way: `ac.define(word, callaback)`
+ [ ] write the `ac.define` method to **request** a word definition from Wiktionary API (*requires google skillz*! - *document your finding!!*)
  + [ ] parse the result of this API request and extract the definition
  + [ ] return the *just* the definition to the client for display in the UI when client visits url: **/define/awesome**
+ [ ] expose the **searches** property of the **ac** module url: /searches/ should return a json object which the client can interpret and display

> *Hint*: http://www.mediawiki.org/wiki/API:Tutorial + http://stackoverflow.com/questions/4175533/wikionary-api-meaning-of-words (*note*: you will need to put your thinking cap on for this challenge!)

## Pair 2

### Front end / UX ([*the fun zone*](https://goo.gl/mYVqp0)!)

1. [ ] Wireframe a great word searching user experience!

2. [ ] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words! (tip: you can build ("*fake*") the front-end (*look-and-feel*) while your back-end colleagues are building the endpoint(s) ...)

3. [ ] Display a stats (*searches*) for the words people have looked up in an intuitive and creative way!

> **Note**: even though you are running nodemon you still *may* not see the latest changes in your browser when you refresh the page...
sometimes you might need to completely ***re-start the server*** `npm run nodemon` to get the page to completely refresh ...

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project
+ [ ] learn about ***pre-commit hooks*** and add a pre-commit hook to lint
your code *before* anyone can commit (*unlinted*) code. (*code quality/consistency #FTW!*)

Answer from: http://githooks.com/
(overwrite script in .git/hooks)


+ [ ] Learn about ***CodeClimate***, signup using your  GitHub account and add badge to repo readme.
Code Climate in a Nutshell

Code Climate has one goal: Help you and your team write amazing code!

We run static and automated analysis on your Ruby on Rails, JavaScript, PHP (beta), or Python (beta) codebase, and then present you with easy-to-read, actionable findings.

How it Works

Step 1: Push commits to your GitHub or Internet-accessible Git repository.
Step 2: Code Climate automatically clones/pulls from your repository and analyzes each commit. Our analysis runs in minutes, not hours.
Step 3: See how your codebase is changing over time through our website (here's a tour!), smart email alerts, and integration notifications (like Slack and Campfire). You’re empowered to address code quality and security issues quickly, efficiently, and collaboratively.

The number in our badge is the code quality score for the project measured on a number of factors including Complexity/Simplicity, Readability, Maintainability, Repetition and Line-count-per-file . The maximum score is 4.0 and we obviously strive to achieve this level in all our work. https://github.com/docdis/learn-codeclimate

+ [ ] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [ ] add .**travis.yml** to your repo
  + [ ] add "***build passing***" badge to your readme
+ [ ] Add **Dependencies Badge** to your readme

see: https://github.com/dwyl/repo-badges

# Stretch Goals

## Deploy to Heroku

> Ask [**@Neats29**](https://github.com/Neats29) for help if you get stuck!

## Integrate *Another API* into your results!! :open_mouth:

e.g: Search for Tweets based on the word the person looked up!
or pictures on instagram, or news articles, etc.

Figure out a *creative* way of displaying this content
without making it look cluttered or out of place. (*as always*, #***MobileFirst*** #***FTW***)

## Make the UI *even more intuitive*!

+ [ ] hightlight the characters the person typed in the word suggestions

## Search for a string of characters *anywhere* in the word!

![find all the suggestions](http://i.imgur.com/yCAcCuB.jpg)

Returning words that *start* with the characters the person typed is cool. But, what about returning **all** the words that *contain* the characters in the order the person typed them.
(i.e. ***way more suggestions*** *so that this can be used as a scrabble word finder!*)

e.g: a search for ***awe***

could return:
```
adawe, awe, awearied, aweary, aweather, aweband, awedness, awee, aweek,
aweel, aweigh, awesome, awesomely, awesomeness, awest, aweto, chawer,
clapperclawer, clawed, clawer, cockawee, dewclawed, drawee, drawer, drawers,
flawed, fleaweed, gewgawed, gimbaljawed, gimberjawed, gnawer, hawer, jawed,
jimberjawed, keawe, knawel, Meccawee, megaweber, outawe, overawe, overdrawer,
overjawed, pawer, plugdrawer, predrawer, quartersawed, redrawer, resawer,
 rondawel, Sandawe, sawed, sawer, scrofulaweed, seaweed, seaweedy, strawen,
strawer, tawer, tawery, thawer, toothdrawer, ultrawealthy, unawed, unchawed,
unclawed, underdrawers, underjawed, unflawed, unlawed, unoutlawed, unpawed,
unsawed, untawed, unthawed, wickawee, wiredrawer, withdrawer, wittawer
```

not just:
```
awe, awearied, aweary, aweather, aweband, awedness, awee, aweek, aweel,
aweigh, awesome, awesomely, awesomeness, awest, aweto
```

Making this *usable* relies on writing a front-end function
to sort the results into those which ***start*** with the typed characters, and those which merely contain them.
and displaying the results segmented accordingly.
Also it will look a *lot* better if the characters the person typed were *hightlighted* in the list of word suggestions.

**Note**: you will need to update your test for the number of
results returned by the `ac.findWords` method to reflect the wider search...f place. (*as always*, #***MobileFirst*** #***FTW***)

## Make the UI *even more intuitive*!

+ [ ] hightlight the characters the person typed in the word suggestions

## Search for a string of characters *anywhere* in the word!

![find all the suggestions](http://i.imgur.com/yCAcCuB.jpg)

Returning words that *start* with the characters the person typed is cool. But, what about returning **all** the words that *contain* the characters in the order the person typed them.
(i.e. ***way more suggestions*** *so that this can be used as a scrabble word finder!*)

e.g: a search for ***awe***

could return:
```
adawe, awe, awearied, aweary, aweather, aweband, awedness, awee, aweek,
aweel, aweigh, awesome, awesomely, awesomeness, awest, aweto, chawer,
clapperclawer, clawed, clawer, cockawee, dewclawed, drawee, drawer, drawers,
flawed, fleaweed, gewgawed, gimbaljawed, gimberjawed, gnawer, hawer, jawed,
jimberjawed, keawe, knawel, Meccawee, megaweber, outawe, overawe, overdrawer,
overjawed, pawer, plugdrawer, predrawer, quartersawed, redrawer, resawer,
 rondawel, Sandawe, sawed, sawer, scrofulaweed, seaweed, seaweedy, strawen,
strawer, tawer, tawery, thawer, toothdrawer, ultrawealthy, unawed, unchawed,
unclawed, underdrawers, underjawed, unflawed, unlawed, unoutlawed, unpawed,
unsawed, untawed, unthawed, wickawee, wiredrawer, withdrawer, wittawer
```

not just:
```
awe, awearied, aweary, aweather, aweband, awedness, awee, aweek, aweel,
aweigh, awesome, awesomely, awesomeness, awest, aweto
```

Making this *usable* relies on writing a front-end function
to sort the results into those which ***start*** with the typed characters, and those which merely contain them.
and displaying the results segmented accordingly.
Also it will look a *lot* better if the characters the person typed were *hightlighted* in the list of word suggestions.

**Note**: you will need to update your test for the number of
results returned by the `ac.findWords` method to reflect the wider search...
.
