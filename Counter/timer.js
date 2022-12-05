let timerId;
let counter = 0;

let countDisplay = document.querySelector(".count");



function start() {
    if (!timerId) {
        timerId = setInterval(() => {
            counter++;
            countDisplay.innerText = counter;
        }, 1000)
    }
}

function reset() {
    counter = 0;
    countDisplay.innerText = counter;
}

function stop() {
    clearInterval(timerId);
    timerId = null;
}