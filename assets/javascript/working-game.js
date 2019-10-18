var wordBank = [
    "poseidon",
    "hades",
    "zeus",
    "hestia",
    "hera",
    "demeter",
    "ares",
    "hephaestus",
    "artemis",
    "apollo",
    "aphrodite",
    "hermes",
    "athena",
    "dionysus"
]
var wordArray = [];
var blanksArray = [];
var incorrectArray = [];
var currentWord = "";
var userGuess = "";
var letterleft = currentWord.length;;
var chancesLeft = 10;


//When user selects new game word is chosen at random and arrays are made to show number of letters and to check guesses correct or incorrect
function beginNewGame() {
    //Grabs a word from possible choices
    var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];


    //Logs the word user is trying to guess
    console.log(currentWord);

    //Hides the word behind blanks
    for (var i = 0; i < currentWord.length; i ++) {
    blanksArray.push("_");
    }

    //Logs the new blanksArray
    console.log(blanksArray);

    //creates new array from currentWord to verify guesses by index
    for (var j = 0; j < currentWord.length; j++) {
    wordArray.push(currentWord[j]);
    }

    //logs the wordArray
    console.log(wordArray);

    //shows blanks for current word to user
    document.getElementById("unkownOlympian").innerHTML = blanksArray.join(" ");
};


//verify if guess is correct
for (var k = 0; k < currentWord.length; k++) {
    if (userGuess === wordArray[k]) {
        blankArray[k] = userGuess;
        
    } else {
        incorrectArray.push(userGuess);``
        chancesLeft--;
        console.log(chancesLeft);
    }


window.onload = function() {
    beginNewGame();

}
//Game loop


// document.onkeyup = function(event) {
//     var userGuess = event.key.toLowerCase();
//     
//     }
    
// }
