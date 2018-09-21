var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var randomNumber = Math.floor(Math.random() * letters.length) + 1;
var computerChoice = letters[randomNumber];
console.log(computerChoice);

var trackWins = 0;
var trackLosses = 0;
var guessesLeft = 5;
var guessesSoFar = []

document.onkeyup = function(event) {
    var userChoice = event.key;
    guessesSoFar.push(userChoice);
    document.getElementById("yourguesses").innerText = guessesSoFar;
    if (computerChoice === userChoice) {
        trackWins = trackWins + 1;

        document.getElementById("wins").innerText = trackWins;
        randomNumber = Math.floor(Math.random() * letters.length) + 1;
        guessesLeft = 5;
        guessesSoFar = [];
    } else {
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesleft").innerText = guessesLeft;

        if (guessesLeft === 0) {
            trackLosses++;
            guessesLeft = 5;
            randomNumber = Math.floor(Math.random() * letters.length) + 1;
            document.getElementById("losses").innerText = trackLosses;
            guessesSoFar = [];
        }
    }

}