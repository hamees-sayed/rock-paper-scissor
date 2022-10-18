function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"]
    return choice[Math.floor(Math.random()*choice.length)]
}

console.log(getComputerChoice())