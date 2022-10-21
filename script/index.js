const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const reset = document.querySelector('.reset');
const moves = document.querySelector('.moves');
const winner = document.querySelector('.winner');
const you = document.querySelector('.you');
const computer = document.querySelector('.computer');
const player = [rock, paper, scissor]
let system = ["rock", "paper", "scissor"];
let move = 0;
let yourScore= 0;
let computerScore = 0;


const playerChoice = player.forEach(option => {
    option.addEventListener('click', () => {
        move += 1
        moves.textContent = `Moves: ${move}`;
    })
});
 

function resetGame() {
    move = 0;
    computerScore = 0;
    yourScore = 0;
    computer.textContent = `Computer: ${computerScore}`;
    you.textContent = `You: ${yourScore}`;
    moves.textContent = `Moves: ${move}`;
    console.log("reset")
};

reset.addEventListener('click', resetGame);   


rock.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)

    if (i === 0) {
        console.log("tie")
        console.log(system[i])
        computerScore += 1;
        yourScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        you.textContent = `You: ${yourScore}`;
    } else if (i === 1) {
        console.log("computer wins")
        console.log(system[i])
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
    } else {
        console.log("you win")
        console.log(system[i])
        yourScore += 1;
        you.textContent = `You: ${yourScore}`;
    }
});

paper.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)

    if (i === 0) {
        console.log("you win")
        console.log(system[i])
        yourScore += 1;
        you.textContent = `You: ${yourScore}`;
    } else if (i === 1) {
        console.log("tie")
        console.log(system[i])
        computerScore += 1;
        yourScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        you.textContent = `You: ${yourScore}`;
    } else {
        console.log("computer wins")
        console.log(system[i])
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
    }
});

scissor.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)

    if (i === 0) {
        console.log("computer wins")
        console.log(system[i])
        computerScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
    } else if (i === 1) {
        console.log("you win")
        console.log(system[i])
        yourScore += 1;
        you.textContent = `You: ${yourScore}`;
    } else {
        console.log("tie")
        console.log(system[i])
        computerScore += 1;
        yourScore += 1;
        computer.textContent = `Computer: ${computerScore}`;
        you.textContent = `You: ${yourScore}`;
    }
});