// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.


var UserWinCounter = 0;
var CompWinCounter = 0;

var main = function (input) {
  var rpcGameOutput = rockPaperScissors();
  console.log(rpcGameOutput)
  if (input == "rock" && rpcGameOutput == "scissors") {
    var myOutputValue = 'Win'
    UserWinCounter += 1
      ;
  } else if (input == "scissors" && rpcGameOutput == "paper") {
    var myOutputValue = 'Win'
    UserWinCounter += 1;
  } else if (input == "paper" && rpcGameOutput == "rock") {
    var myOutputValue = 'Win'
    UserWinCounter += 1;
  } else if (input == rpcGameOutput) {
    var myOutputValue = 'Draw';
  } else {
    var myOutputValue = 'Lose'
    CompWinCounter += 1;
  }
  return myOutputValue + " Your score is " + UserWinCounter + " The copmuter score is " + CompWinCounter;
};


// Computer randomly selecting what to throw

var rockPaperScissors = function () {
  var randomInteger = Math.floor (Math.random() * 3);
  var rpcResult = randomInteger + 1;
  

  if (rpcResult == 1) {
    var rpcGameOutput = 'rock';
 }
 else if (rpcResult == 2) {
  var rpcGameOutput = 'paper';
}
else if (rpcResult == 3) {
  var rpcGameOutput = 'scissors';
}
  return rpcGameOutput;
}