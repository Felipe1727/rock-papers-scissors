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