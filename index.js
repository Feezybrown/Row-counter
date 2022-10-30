// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



let countEl = document.getElementById("count-el") //pass in arguments

let saveEl = document.getElementById("save-el")


let passengerCount = 0

function increment() {
    passengerCount += 1   //OR passengerCount = passengerCount + 1//
    countEl.textContent = passengerCount
}


function save() {
    let countSeparator = passengerCount + " - "
    saveEl.textContent += countSeparator
    countEl.textContent = 0 //sets our conter back to 0 - first step//
    passengerCount = 0 //second step to start from 0//
}



