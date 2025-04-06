let humanScore = 0 ; 
let computerScore = 0 ; 

function getComputerChoice() {
    let num1 = Math.floor(Math.random() * 3) + 1;
    
    if (num1 === 1) {
        return "rock"
    } else if (num1 === 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice () {
    getChoice = prompt("We are playing Rock-Paper-Scissors, whats your choice ? : ")
    stripSpaceGetChoice = getChoice.replace(" ","")
    lowerCase = stripSpaceGetChoice.toLowerCase()
    return lowerCase
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Its a tie"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore +=1
        return "You Loose ! Paper beats Rock"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore +=1
        return "You Win ! Scissors beats Paper"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore +=1
        return "You Loose ! Rock beats Scissors"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore +=1
        return "You Win ! Paper beats Rock"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore +=1
        return "You Loose ! Scissors beats Paper"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore +=1
        return "You Win ! Rock beats Scissors"
    }
}

let numOfRounds = 5 ; 

function playGame(){
    if (humanScore > computerScore){
        return "You have won" ;
    } else if (humanScore === computerScore ) { 
        return "Its a tie" ;
    } else {
        return "You have lost";
    }
}

for (let i = 1 ; i <= numOfRounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Your Score : " + humanScore)
}

console.log(playGame())








