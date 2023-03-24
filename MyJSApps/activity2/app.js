const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button');
let choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => {
    //console.log(possibleChoice);
    possibleChoice.addEventListener('click', e => {
        //console.log(`clicked: ${e.target.id}`);
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
         getResult()
    });
});

const generateComputerChoice = () => {
    const randonNumber = Math.floor(Math.random() * 3);
        computerChoice = choices[randonNumber];
        computerChoiceDisplay.innerHTML = computerChoice;

};

    //const getResult = () => {

    //if(userChoice === computerChoice){
    //resultDisplay.innerHTML = " It's a draw";
    //result = " It's a draw";
    //}
    //else if(computerChoice === 'rock' && userChoice === 'paper') {
    //result = "You win!"
    //}
    //else if(computerChoice === 'paper' && userChoice === 'scissors') {
    //result = "You win!"
    //}
    //else if(computerChoice === 'scissors' && userChoice === 'rock') {
    //result = "You win!"
    //}
    //else{
    //vresult = 'You lose!';
    //}

    //resultDisplay.innerHTML = result;
    //};

const getResult = () => {

    const wins = {
        paper: "rock",
        rock: "scissors",
        scissors:"paper"
    };

    if(wins[userChoice] === computerChoice){
        result = "Win!";
    }
    else if(wins[computerChoice] === userChoice){
        result = "Lose!";
    }
    else {
        result = "It's a draw!";
    }

    resultDisplay.innerHTML = result;
};