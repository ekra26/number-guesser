let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function to generate random target from 0 to 9
function generateTarget(){
    return Math.floor(Math.random()*10);
}

//test 
//console.log(generateTarget());

//check if user input is between acceptable range
function userGuessRange(userGuess){
    if (userGuess <= 9 && userGuess >= 0) {
    return true;
    } else {
        return alert('Your input is out of range. Please guess a number between 0 and 9.');
    }
}

//function to compare guesses vs target and determine winner. Check if human input is within range
function compareGuesses(userGuess,computerGuess,secretTarget){
    let userGuessDifference = Math.abs(secretTarget - userGuess);
    let computerGuessDifference = Math.abs(secretTarget - computerGuess);
    return userGuessDifference <= computerGuessDifference;       
}

//test
//console.log(compareGuesses(2,9,9));

//function to update score for winner
function updateScore(winner){
    switch (winner){
        case 'human': humanScore +=1;
        break;
        case 'computer': computerScore +=1;
        break;
    }
}

//test
//updateScore('human')
//console.log(humanScore)

//function to track game round
function advanceRound(){
    currentRoundNumber +=1;
}

