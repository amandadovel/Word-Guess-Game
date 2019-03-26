// Creates array that lists all the options (A-Z):
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log (computerChoices);

// Variables to hold wins and losses:
var wins = 0;
var losses = 0;

console.log (wins);
console.log (losses);

// Variables for game
var guessCountdown = 10;
var lettersGuessed ="#";
var listIndex ="#";
var wordList = ["Tony the Tiger", "Trix Rabbit", "Toucan Sam", "Captain Crunch", "Count Chocula"];
var playAgain = "#";


// Creates variables that hold references to the places where we want to display them in html:

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var answerHolder = document.getElementById("answer-holder");
var guessCountdown = document.getElementById("guess-countdown");
var lettersGuessed = document.getElementById("letters-guessed");
var listIndex = document.getElementById("list-index");

// When game starts computer randomly increments through word list array:
var computerGuess = wordList[Math.floor(Math.random() * wordList.length)];

// This function is run whenever a user presses a key:

document.onkeyup = function(event) {

// Determines which key was pressed:
var userGuess = event.key;

      // looping over the entries
      //for (var i = 0; i < wordList.length; i++) {

        // displaying the entries in html
       // prompt (wordList[i]);
      }


}





