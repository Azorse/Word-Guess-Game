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
var incorrectArray = [" "];
var currentWord = "";
var userGuess = "";
let lettersRemaining = 0;
var chancesLeft = 8;
let numberOfLetters = 0;
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


//Game play of guessing and checking the guess against the random word
function checkGuess(userGuess) {
    for (var j = 0; j < numberOfLetters; j++) {
        if (userGuess === wordArray[j]) {
            blanksArray[j] = userGuess;
            letterPresent = true;

        } else {
            letterPresent = false;
        }  
    }

    if (letterPresent === false) {
        incorrectArray.push(userGuess); 
        chancesLeft--;

    } else {
                lettersRemaining--;

        }


            
   


    document.getElementById("attempts").innerHTML = "You have " + chancesLeft + " guesses before you lose.";
    document.getElementById("passedGuesses").innerHTML = incorrectArray.join(" ");
    document.getElementById("unkown-olympian").innerHTML = blanksArray.join(" ");
    console.log("letters remaining in word " + lettersRemaining);
    console.log("number of guesses remaining " + chancesLeft);
    
}

//Ending the Game

function endOfGame() {
    if (lettersRemaining === 0) {
        reward()
        document.getElementById("result").innerHTML = "You Won!"
    } else if (chancesLeft === 0) {
        document.getElementById("ending-image").src = "./assets/images/loser.jpg"
        document.getElementById("result").innerHTML = "Sorry you lose!"
    } else {
        alert("you broke the game!")
    }
}




   



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

