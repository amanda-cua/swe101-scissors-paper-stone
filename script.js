// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.

var userWinCounter = 0;
var compWinCounter = 0;
var currentGameMode = "waiting for username";
var userName = " ";

var main = function (input) {
  
  var myOutputValue = ' ';

  if (currentGameMode == 'waiting for username') { 
    userName = input;

    if (input == "rock" && rpcGameOutput == "scissors") {
      myOutputValue = 'Win'
     userWinCounter += 1
       ;
    } else if (input == "scissors" && rpcGameOutput == "paper") {
      myOutputValue = 'Win'
     userWinCounter += 1;
    } else if (input == "paper" && rpcGameOutput == "rock") {
      myOutputValue = 'Win! '
     userWinCounter += 1;
    } else if (input == rpcGameOutput) {
      myOutputValue = 'Draw! ';
    } else  { input 
      myOutputValue = 'Lose! '
     compWinCounter += 1;
    }  

    currentGameMode = 'Rock Paper Scissors Game';

     myOutputValue = "Hello "+ userName + "Type rock, paper, or scissors!";
  } else   {
     rpcGameOutput = rockPaperScissors()
  }
  
    return myOutputValue

};


 
 
 // myOutputValue + "<br>" + "Your score is " + userWinCounter +"." + "<br>" + "The computer's score is " + compWinCounter + "."}
  




// Computer randomly selecting what to throw



var rockPaperScissors = function () {
  var randomInteger = Math.floor (Math.random() * 3);
  var rpcResult = randomInteger + 1;
  var rpcGameOutput;

  if (rpcResult == 1) {
   rpcGameOutput = 'rock';
  } else if (rpcResult == 2) {
  var rpcGameOutput = 'paper';
  } else if (rpcResult == 3) {
   rpcGameOutput = 'scissors';
  } 
return rpcGameOutput;
};

