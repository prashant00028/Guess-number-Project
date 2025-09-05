let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const guesrem = document.querySelector(".lastresult")
const lowOrhigh = document.querySelector(".lowOrhi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid  number")
    }
    else if (guess < 1) {
        alert("Please enter a number more  than 0 ")
    }
    else if (guess > 100) {
        alert("Please enter a number less 100 ")
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(` 😢 Game over, Random message was ${random}`);
            endgame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`😄🎉 You guessed it right, Random message was ${random}`);
        endgame(guess)
    }
    else if (guess < random) {
        displayMessage(`You are Too low`)
    }
    else if (guess > random) {
        displayMessage(`You are high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    guesrem.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newGamebutton = document.querySelector("#newGame");
    newGamebutton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        guesrem.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playgame = true;

    })
}