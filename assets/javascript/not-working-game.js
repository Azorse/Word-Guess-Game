var wordBank = [
    "poseidon",
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
    "athena"
]
var wordArray = [];
var blanksArray = [];
var incorrectArray = [];
var alreadyGuessed = [];
var currentWord = "";
var userGuess = "";
var lettersRemaining = 0;
var chancesLeft = 8;
var numberOfLetters = 0;
var letterPresent = false;


//Begins a new game for user
function beginNewGame() {
    //Grabs a word from possible choices
    var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    numberOfLetters = currentWord.length;
    lettersRemaining += numberOfLetters;
    
    //creates new array from currentWord to verify guesses by index
    for (var j = 0; j < numberOfLetters; j++) {
        wordArray.push(currentWord[j]);
    }

    //Hides the word behind blanks
    for (var i = 0; i < numberOfLetters; i ++) {
        blanksArray.push("_");
    }

    //error checking
    console.log(currentWord);
    console.log(blanksArray);
    console.log(wordArray);

    document.getElementById("unkown-olympian").innerHTML = blanksArray.join(" ");
};


//Game play of guessing and checking the guess against the random word
function checkGuess(userGuess) {
    for (var x = 0; x < alreadyGuessed.length; x++) {
        if (userGuess === alreadyGuessed[x]) {
            alert("You already guessed " + userGuess + "!")
            
        } else {
            alreadyGuessed.push(userGuess);
            console.log("has not been guessed")
        }
    }

    for (var j = 0; j < numberOfLetters; j++) {
        if (userGuess === wordArray[j]) {
            letterPresent = true;

        } else {
            incorrectArray.push(userGuess);
            letterPresent = false;

        }
    }
    if (letterPresent = true) {
        blanksArray[j] = userGuess;
        lettersRemaining--;

    } else {
        chancesLeft--;
    }
    
    chancesLeft--;
    document.getElementById("attempts").innerHTML = "You have " + chancesLeft + " guesses before you lose.";
    document.getElementById("passedGuesses").innerHTML = incorrectArray.join(" ");
    document.getElementById("unkown-olympian").innerHTML = blanksArray.join(" ");
    console.log("letters remaining in word " + lettersRemaining);
}

//Outcomes with image and bio
function reward() {
    switch (wordArray.join("")) {
        case "poseidon":
            document.getElementById("ending-image").src="./assets/images/poseidon.jpg"
            break;

        case "zeus":
                document.getElementById("ending-image").src="./assets/images/zeus.jpg"
            break;

        case "hestia":
                document.getElementById("ending-image").src="./assets/images/hestia.jpg"
            break;

        case "hera":
                document.getElementById("ending-image").src="./assets/images/hera.jpg"
            break;

        case "demeter":
                document.getElementById("ending-image").src="./assets/images/demeter.jpg"
            break;

        case "ares":
                document.getElementById("ending-image").src="./assets/images/ares.jpg"
            break;

        case "hephaestus":
                document.getElementById("ending-image").src="./assets/images/hephaestus.jpg"
            break;

        case "artemis":
                document.getElementById("ending-image").src="./assets/images/artemis.jpg"
            break;

        case "apollo":
                document.getElementById("ending-image").src="./assets/images/apollo.jpg"
            break;

        case "aphrodite":
                document.getElementById("ending-image").src="./assets/images/aphrodite.jpg"
            break;

        case "hermes":
                document.getElementById("ending-image").src="./assets/images/hermes.jpg"
            break;

        case "athena":
                document.getElementById("ending-image").src="./assets/images/athena.jpg"
            break;

        default:
            break;

    }
}

//Ending the Game

function endOfGame() {
    if (lettersRemaining === 0) {
        alert("you won!")
    } else if (chancesLeft ===0) {
        alert("you lost!")
    } else {
        alert("you broke the game!")
    }
}

//Outcomes with image and bio


   



window.onload = function() {
    beginNewGame();
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    checkGuess(userGuess);
    if (lettersRemaining === 0 || chancesLeft === 0) {
        endOfGame();
    }   
}   



"zeus",

"hera",
"hestia",
"demeter",
"hermes",
"hephaestus",
"apollo",
"artemis",
"athena",
"aphrodite",
"ares"


