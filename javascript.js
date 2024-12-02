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
    //Iterate until getting a valid answer
        //Ask the user to enter an option between rock, paper and scissors and store it in a variable
}