// Select DOM Elements

let
    userWeight = document.querySelector('#weight'),
    weightText = document.querySelector('#weight-val'),
    userHeight = document.querySelector('#height'),
    heightText = document.querySelector('#height-val'),
    resultNumber = document.querySelector('#result'),
    resultText = document.querySelector('#category');


// change the heightText and weightText in a ms when the input range is changing
function changInputValue() {
    let height = userHeight.value
    let weight = userWeight.value
    heightText.innerHTML = `${height} cm`
    weightText.innerHTML = `${weight} kg`
    // calculate the BMI and show it in <p>
    let result = weight / ((height / 100) * (height / 100))
    resultNumber.innerHTML = result.toFixed(1)
// change the text && number of the result
function changingCss(text, color) {
    resultText.innerHTML = text
    resultNumber.style.color = `#${color}`
    resultText.style.color = `#${color}`
}

// call an event to change in second when the input value is changing
userHeight.addEventListener('input', changInputValue)
userWeight.addEventListener('input', changInputValue)