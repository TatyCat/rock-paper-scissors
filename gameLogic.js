humanScore = 0;
computerScore = 0;

// write a function that randomly returns “rock”, “paper” or “scissors”.

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 9)+1;
    // console.log(randomNum);
    if (randomNum <= 3) {
        return "rock";
    } else if (randomNum <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice of rock, paper or scissors: ").toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Enter your choice of rock, paper or scissors: ");
    }

    return humanChoice;
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer wins, paper covers rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Human wins, rock crushes scissors.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Computer wins, scissors cuts paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Human wins, paper covers rock.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Computer wins, rock crushes scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Human wins, scissors cuts paper.";
    }
}       

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
console.log(playRound(humanSelection, computerSelection));
// playRound(humanSelection, computerSelection);
