var draw = true,
    winner,
    choice = inputChoice()
while(draw && choice >=0 ){
    var availableChoices = ['rock','paper','scissor'],
    computerDrawChoice = Math.floor(Math.random()*3),
    compChoice = availableChoices[computerDrawChoice],
    userChoice = availableChoices[choice]
    console.log(userChoice,compChoice)
    draw = false
    if(compChoice === userChoice){
        console.log('its a tie')
        draw = true
    }
    else if(compChoice == 'rock' && userChoice=='paper'){
        winner = 'user'
    }
    else if(compChoice == 'paper' && userChoice == 'scissor'){
        winner = 'user'
    }
    else if(compChoice == 'scissor' && userChoice == 'rock'){
        winner = 'user'
    }
    else{
        winner = 'computer'
    }
}
console.log(winner,'is winner')


function inputChoice(){
    var ch = parseInt(process.argv[2])
    if(ch > 2 && ch < 0){
        console.log('invalid input')
        return -1
    }
    else return ch
}
