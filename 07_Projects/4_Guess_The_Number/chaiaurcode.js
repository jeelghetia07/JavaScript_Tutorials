let randomNum = (Math.round(Math.random() * 100 + 1));

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        const guess = Number(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){      // validates if num is 0 < num <= 100
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number more than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess >= 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){         // checks if equal or low or high
    if(guess === randomNum){
        displayMessage(`You Guessed it right.`);
        endGame();
    }
    else if(guess < randomNum){
        displayMessage(`Number is TOOO low.`);
    }
    else if(guess > randomNum){
        displayMessage(`Number is TOOO high.`);
    }
}

function displayGuess(guess){       // displays the userInput, adds the guess into the array. and reduce the number of guess remaining
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')      // this is key value pair.
    p.classList.add('button');
    p.innerHTML = `<button id = "newGame">Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNum = (Math.round(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;

        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = '';
        
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

