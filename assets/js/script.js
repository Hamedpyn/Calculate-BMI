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
}

// call an event to change in second when the input value is changing
userHeight.addEventListener('input', changInputValue)
userWeight.addEventListener('input', changInputValue)