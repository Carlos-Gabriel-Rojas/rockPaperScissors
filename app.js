// computer choice function

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(math.random() * 3)];
}

//player choice function

function playerPlay() {
    return prompt("Chose your move: rock, paper or scissors").toLocaleLowerCase();
}

//play round function

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "it's a tie";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock")    ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "you win";
    } else {
        return "you lose"
    }
}

//start game function