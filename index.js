const screenText = document.querySelector(".screen-text")
const numberBtns = document.getElementsByClassName("number-btn")
const clearBtn = document.querySelector(".clear-button")
const deleteBtn = document.querySelector(".delete-button")
const dotBtn = document.querySelector(".dot-btn")
const operationBtns = document.getElementsByClassName("operation-btn")
const equalBtn = document.querySelector(".equal-btn")

console.log(screenText.textContent)

let a = "0"
let b = "0"
let operation = ""

// Punching numbers in
for (let index = 0; index < numberBtns.length; index++) {
    numberBtns[index].addEventListener('click', () => {
        const btnText = numberBtns[index].innerText
        if(btnText === "0" && screenText.textContent === "0") {
            console.log("We're not gonna do SHIT")
        } else if(screenText.textContent === "0") {
            screenText.textContent = btnText
        } else {
            let currentText = screenText.textContent + btnText;
            screenText.textContent = currentText
        }
    })
}

dotBtn.addEventListener('click', () => {
    if(screenText.textContent.includes(".")) {

    } else {
        let newScreen = screenText.textContent + "."
        screenText.textContent = newScreen
    }
})

for (let index = 0; index < operationBtns.length; index++) {
    operationBtns[index].addEventListener('click', () => {
        operation = operationBtns[index].innerText
        a = screenText.textContent
        screenText.textContent = "0"
    })
}

equalBtn.addEventListener('click', () => {
    b = screenText.textContent
    let aFloat = parseFloat(a)
    let bFloat = parseFloat(b)

    if(operation === "*") {
        let result = aFloat * bFloat
        a = String(result)
        b = "0"
        screenText.textContent = String(result)
    } else if(operation === "/") {
        let result = aFloat / bFloat
        a = String(result)
        b = "0"
        screenText.textContent = String(result)
    } else if(operation === "+") {
        let result = aFloat + bFloat
        a = String(result)
        b = "0"
        screenText.textContent = String(result)
    } else if(operation === "-") {
        let result = aFloat - bFloat
        console.log(result)
        a = String(result)
        b = "0"
        screenText.textContent = String(result)
    }
})

clearBtn.addEventListener('click', () => {
    a = 0
    b = 0
    operation = ""
    screenText.textContent = "0"
})

deleteBtn.addEventListener('click', () => {
    if(screenText.textContent.length == 1) {
        screenText.textContent = "0"
    } else {
        let newScreen = screenText.textContent.slice(0, -1)
        screenText.textContent = newScreen
    }
})