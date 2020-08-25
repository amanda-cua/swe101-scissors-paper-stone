// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.


var main = function (input) {
  var rpcGameOutput = rockPaperScissors();
  console.log (rpcGameOutput)

  if (input == rpcGameOutput ) {
    var myOutputValue = 'draw';
  }
  
  else if ((input == 'paper' && rpcGameOutput == 'scissors') || (input == 'rock' && rpcGameOutput == 'paper')|| (input == 'scissors' && rpcGameOutput == 'rock')) {
   var myOutputValue = 'lose';
  }
  else if   ((input == 'scissors' && rpcGameOutput == 'paper') || (input == 'paper' && rpcGameOutput == 'rock')|| (input == 'rock' && rpcGameOutput == 'scissors'))  {
    var myOutputValue = 'win';
  }

  return myOutputValue;
  
};




var rockPaperScissors = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor ( randomDecimal );
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