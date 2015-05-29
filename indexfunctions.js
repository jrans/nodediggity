//<!--inline JS functionality begins here -->
//
//    <!-- Button Switching script - possible improvements: switch to maintaining states? Or null all? -->

document.getElementById('search-b').onclick = function () {
    document.getElementById('search-res').style.display = 'block';
    document.getElementById('history').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('random').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('search').style.display = 'block';
};

document.getElementById('history-b').onclick = function () {
    document.getElementById('search').style.display = 'none';
    document.getElementById('search-res').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('random').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('history').style.display = 'block';
};

document.getElementById('random-b').onclick = function () {
    document.getElementById('search').style.display = 'none';
    document.getElementById('search-res').style.display = 'none';
    document.getElementById('history').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('random').style.display = 'block';
};

// This text block is for the basic functions of the search api calls. It is currently in dummy form to demonstrate visibility switching, and will call the API up on each click
//    <!-- on first key up, two inline divs are created above the search bar -->
//    <!-- On third key up api call searches for words starting with your term, puts them in LH div -->
//    <!-- On third key up api call searches for words with your term in middle, puts them in RH div -->
//textApiQuery = function() {
//    var searchInput = document.getElementById('search-input');
//    console.log(searchInput);
//    console.log(searchInput.value);
//    var searchAlpha = document.createElement('LI');
//    var searchOther = document.createElement('LI');
//    var searchAlphaCall = document.createTextNode("Alpha");
//    var searchOtherCall = document.createTextNode("Other");                        
////    var p = document.createElement("p")
////    var p = document.createElement("p")
//    if(searchInput.value.length === 0) {
//        document.getElementById('search-res').style.visibility = 'hidden';
//        document.getElementById('res-start').style.visibility = 'hidden';
//        document.getElementById('res-middle').style.visibility = 'hidden';
//        //Create two divs
//    } else if(searchInput.value.length == 1) {
//            document.getElementById('search-res').style.visibility = 'visible';
//            document.getElementById('res-start').style.visibility = 'visible';
//            document.getElementById('res-middle').style.visibility = 'visible';
//            //Create two divs
//    } else if (searchInput.value.length > 2){
//            searchAlpha.appendChild(searchAlphaCall);
//            searchOther.appendChild(searchOtherCall);
//            //document.getElementById('res-list').appendChild(searchAlpha);
//            //document.getElementById('res-other').appendChild(searchOther);
//            //api call, push words starting with value to lh bar
//            //api call, push words with value in it minus values in lh bar to rh bar
//    }
//};


    
//    <!-- On return or submit button press, two divs collapse to search results -->
//    <!-- On return or submit button press, search bar animates up to 30% of vertical height -->
//    <!-- On return or submit button press, Dictionary div gets appended to search bar -->
dictEnter = function(){
    console.log("hello world");
    
};

dictGet = function () {
    var dict = "Hello world";//api call for dictionary
    var dictDiv = document.createElement('div');
    document.getElementById('search').appendChild(dictDiv).setAttribute("id", "dict-div");   
};
//    <!-- On return or submit, your search term is added to your history -->
//    <!-- History is filled with your prior search terms, if no search term has been inputted, "No diggity" is displayed -->
//    <!-- On clicking a history term the term is placed in the history res page, and displays definition -->
//    <!-- On clicking random button, a word is selected from the dictionary at random -->
//    <!-- On clicking random button, the random button is placed in the random res div, and shown -->
//    <!-- Stretch goal: If you type diggity or no diggity into the search bar, it displays the youtube video... -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
//    <!-- Function description -->
