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
let yourScore = 0;
let computerScore = 0;


const playerChoice = player.forEach(option => {
    option.addEventListener('click', () => {
        move += 1
        moves.textContent = `Moves: ${move}`;
    })
});

// function computerChoice() {
//     let system = [rock, paper, scissor];
//     return Math.floor(Math.random() * system.length)
// };  

function resetGame() {
    move = 0;
    moves.textContent = `Moves: ${move}`;
};

reset.addEventListener('click', resetGame);   

rock.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)
    


    if (i === 0) {
        console.log("tie")
        console.log(system[i])
    } else if (i === 1) {
        console.log("computer wins")
        console.log(system[i])
    } else if (i === 2) {
        console.log("you win")
        console.log(system[i])
    }
});

paper.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)


    if (i === 0) {
        console.log("you win")
        console.log(system[i])
    } else if (i === 1) {
        console.log("tie")
        console.log(system[i])
    } else if (i === 2) {
        console.log("computer wins")
        console.log(system[i])
    }

});

scissor.addEventListener('click', () => {

    const i = Math.floor(Math.random() * system.length)


    if (i === 0) {
        console.log("computer wins")
        console.log(system[i])
    } else if (i === 1) {
        console.log("you win")
        console.log(system[i])
    } else if (i === 2) {
        console.log("tie")
        console.log(system[i])
    }
    
});



