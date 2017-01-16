
// This ready function holds all of the code, and is necesarry in all jquery .js files, 
// it communicates with the DOM.

$(document).ready(function() {


var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
]; 

// The reverse method reverses the array in planets.
planets.reverse();

// The .each starts a for loop of var planets, running a function iterating through the index
// of what planet and planet weight.  The option tag holds index array info of planet and 
// weight chosen.  The weightPlanet at [1] sees the array within in parent array,
// which is position 1, the [0] starts at first position (0) in this array with two items.
//  This info is communicaing with the select tab in the html.
// This is another line of code that works...
  // $('<option value=" ' + weightPlanet[1]  + ' ">' + weightPlanet[0] +'</option>').appendTo("#planetEach");

$.each(planets, function(index, weightPlanet) {
  
  $('<option>').val(weightPlanet[1]).text(weightPlanet[0]).appendTo('#planetEach');

});

// This function sets up variables to make the calculations, it is mixed jquery and javascript.

function doesAllMath() {
    var select = $('#planetEach');
    var weightBox = $("#EnterNum").val();
    
    var selectElement = document.getElementById('planetEach');
    
    var weightSelected = selectElement.options[selectElement.selectedIndex].value;
    var planetSelected = selectElement.options[selectElement.selectedIndex].text;

    console.log(weightSelected);
    console.log(weightBox);

// var finalWeight will hold the calculation.  Var lastMessage text gets sent to the p tag.  
// Var theAnswer is the concatinated string message. 

    var finalWeight = weightSelected * weightBox;

    var lastMessage = $('#output');
    var theAnswer = "If you were on  " + planetSelected + ", your calculated weight is... " + finalWeight + ".";
    console.log(theAnswer);
     $('#output').html(theAnswer);
   
}

// This jquery function is the onclick that fires off the above function to write theAnswer
// back to the p tag in html w.id "calc".  It replaced javascript...  lastMessage.innerHTML = theAnswer;

$("#calc").on("click",function(){

doesAllMath();

});

});

// $("#button").on('click', function() {
//   $('#something').html(contentString);
// });

// An array snippet...
// $( "li" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });

// another snippet    $('<option>').val('999').text('999').appendTo('#groupid');

// My origianl javascript...
// for (var i = 0; i < planets.length; i++) {
//     var opt = document.createElement('option');
//     opt.value = planets[i].gravity;
//     opt.innerHTML = planets[i].planet;
// //     select.appendChild(opt);
// // }

// function doesAllMath() {
//     var weightBox = document.getElementById("EnterNum").value;
//     console.log(weightBox);
//     var selectMath = document.getElementById('planetEach').selectedIndex;
//     var weightSelected = planets[selectMath].gravity;
//     var planetSelected = planets[selectMath].planet;

// // var finalWeight will hold the calculation.  Var lastMessage looks at the contents in the p tag.  Var theAnswer
// // is the concatinated string message.  lastMessage.innerHTML puts the string from previous var into html of the first var. 

//     var finalWeight = weightSelected * weightBox;

//     var lastMessage = document.getElementById('output');
//     var theAnswer = "If you were on  " + planetSelected + ", your calculated weight is... " + finalWeight + ".";
//     lastMessage.innerHTML = theAnswer;




