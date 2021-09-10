const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })  
})

const calculatorScreen = document.querySelector('.calculator-display')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    currentNumber += number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}