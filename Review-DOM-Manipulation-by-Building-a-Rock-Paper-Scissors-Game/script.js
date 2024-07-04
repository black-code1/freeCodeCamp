function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore += 1;
        return `Player wins! ${userOption} beats ${computerResult}`
    }

    if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`
    }

    if (hasPlayerWonTheRound(computerResult, userOption)) {
        computerScore += 1;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);