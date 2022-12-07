let flippedCard = false;
let previousCard;
let currentCard;
let userPoints = 0;

let cards = document.querySelectorAll('.flip-card');
cards.forEach(card => card.addEventListener('click', cardClicked));

window.onload = function () {
    setUserMessage();
}

function setUserMessage() {
    let usersName = localStorage.getItem('userName');
    let userGreeting = document.querySelector('.player-message');
    let score = document.querySelector('.user-score');
    let welcomeMessage;

    if (usersName == undefined || usersName == null) {
        welcomeMessage = 'Welcome! Let/s get started!'
    } else {
        welcomeMessage = `Welcome ${usersName}! Let's get Started!`;
    }

    userGreeting.innerHTML = welcomeMessage;
    score.innerHTML = `SCORE : ${userPoints}`
}

function updateScore() {
    userPoints++;
    let score = document.querySelector('.user-score');

    setTimeout(() => {
        score.innerHTML = `SCORE : ${userPoints}`
    }, 500);
}



function cardClicked(e) {
    let selected = e.target.closest('.flip-card');
    let innerCard = selected.querySelector('.flip-card-inner');

    innerCard.classList.add('is-flipped');

    if (!flippedCard) {
        flippedCard = true;
        previousCard = selected;
        return;
    }

    currentCard = selected;
    flippedCard = false;

    checkMatch();

}

function checkMatch() {
    if (previousCard.dataset.cardIdentifier === currentCard.dataset.cardIdentifier) {
        updateScore();
        removeMatches();
        return;
    }

    resetCards();
}


function resetCards() {
    setTimeout(() => {
        previousCard.querySelector('.flip-card-inner').classList.remove('is-flipped');
        currentCard.querySelector('.flip-card-inner').classList.remove('is-flipped');
    }, 1000);

}

function removeMatches() {

}




//remove event listener from card if they match 


