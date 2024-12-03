let humanScore = 0;
let computerScore = 0;

function playGame() {
    //iterate 5 rounds
    for(i = 0; i < 5; i++) {
        playRound();
    };

    //Handle tie (separate function)
    if (humanScore == computerScore) {
        
    }

    //Get a winner (separate function)
}

function handleTie(){
    let iterate = true;
    while(iterate){
        const tie = prompt("Do you want to go into a tiebreaker? y/n").trim().toLocaleLowerCase();
        if(tie === y || tie === n) {
            iterate = false;
        }
    }
    //tiebreaker
    if (tie === y){
        //Invoke playRound until there is a win
        iterate = true;
        while(iterate){
            playRound();
            //detect win
            if (humanScore !== computerScore) {
                iterate = false;
            }
        }
    } else {
        console.log("So it is a tie!\nThe final score is:");
        console.log(()=>{`Human: ${humanScore}  -  Computer: ${computerScore}`})
    }
    
}

function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(getCurrentScore());
    }
    switch(`${humanChoice + computerChoice}`) {
        //IF human wins
        case "rock" + "scissors": 
        case "paper" + "rock": 
        case "scissors" + "paper":
            humanScore ++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            //TO-DO function of global score
            console.log(getCurrentScore());
            break;
        //IF computer wins
        case "rock" + "paper": 
        case "paper" + "scissors": 
        case "scissors" + "rock":
            computerScore ++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            console.log(getCurrentScore());
            break;
    }
}

function getCurrentScore() {
    console.log("The current score is:");
    if (computerScore > humanScore){
        return `Computer: ${computerScore}  -  Human: ${humanScore}`;
    }
    return `Human: ${humanScore}  -  Computer: ${computerScore}`;
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