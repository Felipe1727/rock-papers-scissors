let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
    switch(`${humanChoice + computerChoice}`) {
        //IF human wins
        case  "rock" + "scissors" || "paper" + "rock" || "rock" + "scissors":
            humanScore ++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            //TO-DO function of global score
            console.log();
            break;
        //IF computer wins
        case "rock" + "paper" || "paper" + "scissors" || "scissors" + "rock":
            computerScore ++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            console.log();
            break;
    }
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:    
            return "paper"
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Rock, Paper or Scissors?").trim().toLocaleLowerCase();
        switch(humanChoice) {
            case "rock":
                return humanChoice;
            case "paper":
                return humanChoice;
            case "scissors":
                return humanChoice;
            default:
                console.log("Invalid choice")
        }
    }
}