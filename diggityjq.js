//Replicating javascript in jquery, because it's 10pm and I give up.

//Button and enter key functionality to start ajax call for dictionary
$(document).ready(function() {

  $(function(){
    $('#search-req').on('click', function(e){
      //replace this alert with ajax call to start dictionary chain
      //alert($(this).data('message'));
      $('#output-l').empty();
      dataAppend('#output-l', $('#search-input').val());
      console.log($('#search-input').val());
    });
  });

  $('#search-input').keyup(function(event){
    //These two lines of code are stolen from stack overflow, keycode 13 indicates return key, so instead of targeting a general key up, pressing the return key can be used to trigger a specific event.
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    var searchInput = $('#search-input').val();
    $('#res-list').empty();
    $('#res-other').empty();
    if($('#search-input').val().length === 0) {
        document.getElementById('search-res').style.visibility = 'hidden';
        document.getElementById('res-start').style.visibility = 'hidden';
        document.getElementById('res-middle').style.visibility = 'hidden';
    } else if($('#search-input').val().length == 1) {
            document.getElementById('search-res').style.visibility = 'visible';
            document.getElementById('res-start').style.visibility = 'visible';
            document.getElementById('res-middle').style.visibility = 'visible';
    } else if($('#search-input').val().length > 3) {
       //alert('turnt on');
       //API call to '#res-list' (Main list, left)

       var wordSearched = $('#search-input').val();

       $.get('/find/'+wordSearched,function(data){
         dataAppend('#res-list', data);
       });


      //  dataAppend('#res-list', resultList); //change to make APi call
       //API call to '#res-other' (Main list, right)
       dataAppend('#res-other', $('#search-input').val());
    } else if (keyCode == 13) {
        $('#search-req').trigger('click');
        //instead of alert, call data append to '#output-l'
    } else {
       if($('#search-input').val().toLowerCase() == (('no diggity') || ('diggity'))) {
           //$("#search").append("<div></div>").attr("src", "<iframe width="560" height="315" src="https://www.youtube.com/embed/uofvhrhRf_0" frameborder="0" allowfullscreen></iframe>"+ $("watch?v=uofvhrhRf_0").val() +"?rel=0&autoplay=1");
           alert('diggity');
       }
    }
  });
  //Serve up API data to lists
  //Targets:    '#res-list' (Main list, left)
  //            '#res-other' (Main list, right)
  //            '#output-l' (main dictionary div list)
  function dataAppend(target, apiData){
      var resultarray=apiData.split(',');
      var item="";
      for(var i=0;i<resultarray.length;i++){
        item+="<li>"+resultarray[i]+"</li>";
      }

      $(target).append(item);
  }

});
