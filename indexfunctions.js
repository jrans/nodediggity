//<!--inline JS functionality begins here -->
//    
//    <!-- Button Switching script - switch to maintaining states? Or null all? -->

document.getElementById('search-b').onclick = function() {
    document.getElementById('search-res').style.display = 'none';
    document.getElementById('history').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('random').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('search').style.display = 'block';
};

document.getElementById('history-b').onclick = function() {
    document.getElementById('search').style.display = 'none';
    document.getElementById('search-res').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('random').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('history').style.display = 'block';
};

document.getElementById('random-b').onclick = function() {
    document.getElementById('search').style.display = 'none';
    document.getElementById('search-res').style.display = 'none';
    document.getElementById('history').style.display = 'none';
    document.getElementById('hist-res').style.display = 'none';
    document.getElementById('rand-res').style.display = 'none';
    document.getElementById('random').style.display = 'block';
};


//    <!-- on first key up, two inline divs are created above the search bar -->
//    <!-- On third key up api call searches for words starting with your term, puts them in LH div -->
//    <!-- On third key up api call searches for words with your term in middle, puts them in RH div -->


document.getElementByID('search-input').onkeyup = function() {
    var p = document.createElement("p")
    var p = document.createElement("p")
    if(searchInput.value.length == 1) {
        searchInput.appendChild('res-start')
        searchInput.appendChild('res-middle')
        //Create two divs
    } else if (document.getElementByID('search-input').length > 2){
        //api call, push words starting with value to lh bar
        //api call, push words with value in it minus values in lh bar to rh bar
    }
}

    
//    <!-- On return or submit button press, two divs collapse to search results -->
//    <!-- On return or submit button press, search bar animates up to 30% of vertical height -->
//    <!-- On return or submit button press, Dictionary div gets appended to search bar -->
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
    
    
    
    