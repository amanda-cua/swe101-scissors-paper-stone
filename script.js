// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// Initialize values
var userWinCounter = 0;
var compWinCounter = 0;
var currentGameMode = "waiting for username";
var userName = " ";
var button = document.querySelector('#my-button');
var input = document.querySelector('#my-input');
var output = document.querySelector('#output');
var userCounter = document.querySelector('#userCounter');
var compCounter = document.querySelector('#compCounter');
var myOutputValue;
var rpcGameOutput;
// main function
const main = input => {
  if (currentGameMode == 'waiting for username') { 
    userName = input;
    currentGameMode = 'Rock Paper Scissors Game';
    myOutputValue = "Hello "+ userName + " Type rock, paper, or scissors!";
  } else {
    if (["rock", "scissors", "paper"].includes(input)) {
      rpcGameOutput = rockPaperScissors()
      if (input == "rock" && rpcGameOutput == "scissors") {
        myOutputValue = 'Win! <br> The computer threw ' + rpcGameOutput + '. <br> You threw ' + input + '.'
        userWinCounter += 1;
      } else if (input == "scissors" && rpcGameOutput == "paper") {
        myOutputValue = 'Win! <br> The computer threw ' + rpcGameOutput + '. <br> You threw ' + input + '.'
        userWinCounter += 1;
      } else if (input == "paper" && rpcGameOutput == "rock") {
        myOutputValue = 'Win! <br> The computer threw ' + rpcGameOutput + '. <br> You threw ' + input + '.'
        userWinCounter += 1;
      } else if (input == rpcGameOutput) {
        myOutputValue = 'Draw! <br> The computer threw ' + rpcGameOutput + '. <br> You threw ' + input + '.'
      } else {  
        myOutputValue = 'Lose! <br> The computer threw ' + rpcGameOutput + '. <br> You threw ' + input + '. Try again!'
        compWinCounter += 1;
      }  
    } else {
      myOutputValue = input + " Please try again and input rock, paper, scissors.";
    } 
  }
    return myOutputValue
};
// rockPaperScissors sub-function
// Computer randomly selecting what to throw
const rockPaperScissors = function () {
  var randomInteger = Math.floor (Math.random() * 3);
  var rpcResult = randomInteger + 1;
  if (rpcResult == 1) {
   rpcGameOutput = 'rock';
  } else if (rpcResult == 2) {
  var rpcGameOutput = 'paper';
  } else if (rpcResult == 3) {
   rpcGameOutput = 'scissors';
  } 
  return rpcGameOutput;
};
button.addEventListener('click', e => {
  var result = main(input.value);
  output.innerHTML = result;
  input.value = "";
  userCounter.innerHTML = userWinCounter;
  compCounter.innerHTML = compWinCounter;
  // myOutputValue + "<br>" + "Your score is " + userWinCounter +"." + "<br>" + "The computer's score is " + compWinCounter + ".";
})