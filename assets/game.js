/*
Values to track are wins, losses, total guesses, guesses so far, selected word, list of words.
Randomly select a word from the list of words and save it to the selected word variable. 
Display our non secret values to the user (wins, losses, total guess, guesses so far).
Take selected word and convert it into _ and then display to the user. 
Create and event listener for when a key is pressed.
Save the event to a variable, normalize the value, evaluate the value.
Determine if the user has guessed the value already, if they havent, deduct 1 from total guesses
and add value to guesses so far. 
If they have guessed the value, alert the user to try another value that they havent already guessed. 
Check if the user still has remaining guesses, if they do game will proceeed, otherwise game will end.
*/

// Variables to hold wins and losses:
var wins = 0;
var losses = 0;

// Variables for game
var totalGuesses = 10;
var lettersGuessed = [];
var wordList = ["tiger", "rabbit", "toucan", "crunch",  "chocula", "booberry"];
var wordToUnderscore = [];
var lettersInWord = [];
var numBlanks = 0;
var picture = "link to pic";
var selectedWord = "";

// When game starts computer randomly selects word from array:
var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];


// Creates variables that hold references to the places where we want to display them in html:

 document.getElementById("wins-text").textContent = wins;
 document.getElementById("losses-text").textContent = losses; 
 document.getElementById("alert-message").textContent = "";
 document.getElementById("answer-holder").textContent = wordToUnderscore.join("");
 document.getElementById("guess-countdown").textContent = totalGuesses;
 document.getElementById("letters-guessed").textContent = lettersGuessed.join("");

// Create function to convert selected word to underscores

function toUnderscore(){
  
  // trying to figure out how to make spaces ... 

  for (var i=0; i<selectedWord.length; i++) {
    wordToUnderscore.push("_ ")
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord;
    console.log(lettersInWord);

  }

    for (var i = 0; i < selectedWord; i++) {
      if (selectedWord[i] === " ") {
        wordToUnderscore.push(" ");
      } else {
        wordToUnderscore.push("_");
      }
    } 

  document.getElementById("answer-holder").textContent = wordToUnderscore.join("");

}
toUnderscore()


//Computer chooses one of the options from wordList Array. 
//Then user chooses a key, 
//if key chosen matches one of the letters in the computers choice, 
//letter is printed in answer holder. 
// Else guess-countdown goes down by 1 (i--), and letter gets added to letters-guessed list. 
// This function is run whenever a user presses a key:
//console.log(selectedWord);

document.onkeyup = function (event) {
document.getElementById("alert-message").textContent = "";

  // Determines which key was pressed:
  var userGuess = event.key.toLowerCase();
  if (userGuess >=  "a" && userGuess <= "z") {
    console.log(userGuess);
    evaluateGuess(userGuess);
  } else {
    document.getElementById("alert-message").textContent = "Please select a letter";
  }

}
function evaluateGuess(letter){
  if (lettersGuessed.includes(letter)) {
    document.getElementById("alert-message").textContent = "Already guessed this letter, try another!";
  }
  else {
    if(selectedWord.indexOf(letter) === -1 ) {
      //console.log("test");
      lettersGuessed.push(letter);
      totalGuesses-- ;

      document.getElementById("guess-countdown").textContent = totalGuesses;
      document.getElementById("letters-guessed").textContent = lettersGuessed.join("");
     
      if (totalGuesses === 0) {
        handleLoss();
      }
    }
    else {
      // find every instance of letter in selected word and replace underscore to letter. 
      // redisplay the word to underscore on page.
      // check if the word to underscore and selected word are equal if they are, user wins.
      for (var i=0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
          wordToUnderscore.splice(i, 1, letter + " ");
          document.getElementById("answer-holder").textContent = wordToUnderscore.join("");

        }
      }
      if (wordToUnderscore.join("").replace(/\s/g, "") === selectedWord) {
        handleWin();
      }
    }
  }
}

//trying to figure out how to make pictures show up when they win.
function play() {
  if (selectedWord == "tiger") {
    var picture = "<img src='assets/images/tonythetiger.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    toUnderscore();
  } 
  else if (selectedWord == "rabbit") {
      var picture = "<img src='assets/images/trixrabbit.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      toUnderscore();
    }
    else if (selectedWord == "toucan") {
      var picture = "<img src='assets/images/toucansam.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      toUnderscore();
    }
    else if (selectedWord == "chocula") {
      var picture = "<img src='assets/images/countchocula.jpeg'>"
      document.querySelector("#picture").innerHTML = picture;
      toUnderscore();
    }
    else if (selectedWord == "crunch") {
      var picture = "<img src='assets/images/capncrunch.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      toUnderscore();
    }

    else if (selectedWord == "booberry") {
      var picture = "<img src='assets/images/booberry.png'>"
      document.querySelector("#picture").innerHTML = picture;
      toUnderscore();
    }

}

function handleLoss() {
  losses++  
  document.getElementById("losses-text").textContent = losses;
  document.getElementById("alert-message").textContent = "Sorry you lose, play again!";
  gameReset();
}
function handleWin() {
  wins++
  play();
  document.getElementById("wins-text").textContent = wins;
  document.getElementById("alert-message").textContent = "You Win!";
  gameReset();
  
  
  document.getElementById("hangmanimage").style.display="none";

}

function gameReset() {
  totalGuesses = 10;
  lettersGuessed = [];
  wordToUnderscore = [];
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

  document.getElementById("guess-countdown").textContent = totalGuesses;
  document.getElementById("letters-guessed").textContent = lettersGuessed.join("");

  toUnderscore();
  //console.log(selectedWord);
}



