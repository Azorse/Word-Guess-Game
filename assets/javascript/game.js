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
var currentWord = "";
var userGuess = "";


//Grabs a word from possible choices
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];


//Logs the word user is trying to guess
console.log(currentWord);

//Transforms string into array
for (var i = 0; i < currentWord.length; i++) {
    wordArray.push(currentWord[i])
}
console.log(wordArray)
console.log(currentWord)

//Takes the new word and replaces each letter as a blank on a new array
function hiddenWord() {
    for (var j = 0; j < currentWord.length; j++) {
      blanksArray.push("_");   
    }
}

//Logs the word with a blank for each letter
console.log(blanksArray);



//Takes userGuess and searches array for match
function searchArray() {
    for (k = 0; k < currentWord.length; k++) {
        if (userGuess === wordArray[k]) {
            blanksArray.push(userGuess[k];
        } 
    }
}
