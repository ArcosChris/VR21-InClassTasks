const calcForm = document.querySelector('#calcForm');
const amountInput = calcForm.querySelector('#loanAmount');
const termInput = calcForm.querySelector('#loanTerm');
const rateInput = calcForm.querySelector('#loanRate');
const resultArea = document.querySelector('.monthly-payment');


function getFormData() {
    return {
        amount: Number(amountInput.value),
        term: Number(termInput.value),
        rate: Number(rateInput.value),
    }
}

function calculateLoan(loanDetails) {
    const monthsInYear = 12;
    const monthlyRate = (loanDetails.rate / 100) / monthsInYear;
    const n = Math.floor(loanDetails.term * monthsInYear);
    return (
        (monthlyRate * loanDetails.amount) /
        (1 - Math.pow((1 + monthlyRate), -n))
    );
}

function getFormValuesAndDisplayResults() {
    const loanInfo = getFormData();
    const payment = calculateLoan(loanInfo);

    resultArea.innerText = payment.toFixed(2);
}

function setInitialValues() {
    amountInput.value = 10000;
    termInput.value = 10;
    rateInput.value = 4.5;
    getFormValuesAndDisplayResults();
}

function start() {
    setInitialValues();

    calcForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        getFormValuesAndDisplayResults();
    });
}

start();

export { calculateLoan };