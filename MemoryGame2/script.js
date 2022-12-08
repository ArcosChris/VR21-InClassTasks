const gameContainer = document.getElementById("game");


let flippedCard = false;
let firstCard;
let secondCard;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  event.target.style = `background: ${event.target.classList[0]}`;

  if (!flippedCard) {
    flippedCard = true;
    firstCard = event.target;
    return;
  }

  secondCard = event.target;
  flippedCard = false;

  checkMatch();
}

function checkMatch() {
  let firstCardColor = firstCard.classList[0];
  let secondCardColor = secondCard.classList[0];
  let cardArr = [firstCard, secondCard];

  if (firstCardColor != secondCardColor) {
    setTimeout(() => {
      cardArr.forEach((card) => {
        card.style["background"] = "#fff";
      })
    }, 600);
  }
  else {
    setTimeout(() => {
      cardArr.forEach((card) => {
        card.style["visibility"] = "hidden";
      })
    }, 600)
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
