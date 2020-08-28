let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

//don't use hyphens in naming parameters, it means minus
//based on the instructions, closest means less
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess > 9) {
        alert('Number out of range!! \n Number should be between 0 and 9');
    }
    if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore+=1;
    }
    if(winner === 'computer') {
        return computerScore+=1;
    }
}

const advanceRound = () => {
    return currentRoundNumber+=1;
}

//working on a different funciton
//const getAbsoluteDistance = () => {    
//}

