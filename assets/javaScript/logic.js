
// Variables___________________________________________

var numberToMatch = [];
var crystalNumbersTotal = [];
var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];
var crystalFour = [];
var wins;
var losses;

// Functions__________________________________________

function gameReset () {
  //resets scores and counters to zero
  //initializes a new instance of the gameReset

  wins = 0;
  losses = 0;
  crystalNumbersTotal = 0;
  numberToMatch = generateNumberToMatch();
  crystalOne = generateCrystalNumber();
  crystalTwo = generateCrystalNumber();
  crystalThree = generateCrystalNumber();
  crystalFour = generateCrystalNumber();
};
console.log(wins);


function gameStart () {
  //start & reset the Game
  wins = 0;
};

function gamePlay () {
  //listen for clicks on the crystals and store the number in an array
  $(button).on('click', function (){

  })
  //add clicked crystal numbers and compare to numberToGuess. Determine if greater or less than or equal to.
};

function gameRoundCompleted () {
  //checks win/loss and adds score
  //resets game
};

function generateNumberToMatch (min, max) {
  //randomly generate a numberToMatch
  min = Math.ceil(9);
  max = Math.floor(25);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
console.log(generateNumberToMatch());


function generateCrystalNumber (min, max) {
//generate ramdom number for each crystal
min = Math.ceil(6);
max = Math.floor(1);
return Math.floor(Math.random() * (max - min)) + min;
};


function roundComplete () {

};


function roundComplete() {
	document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordblanks").innerHTML = currentGuess.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


    if (lettersIncurrentWord.toString() === currentGuess.toString()) {
        winCounter++;
        alert("You win!");


        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    } else if (numGuesses === 0) {
        lossCounter++;
        alert("You lose ");


        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame();
    }

}





// Game logic______________________________________
