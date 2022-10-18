function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"]
    return choice[Math.floor(Math.random()*choice.length)]
}

let userInput = prompt("What's your pick? (Rock, Paper, Scissor")

if (userInput === getComputerChoice()) {
    alert("Nice")
}