const pushables = document.querySelectorAll('.pushable')
const display = document.querySelector('#display p')
let numbers = []

// function convertNumbersAndDisplay(itemToDisplay){
//     toDisplay = itemToDisplay.join('')
//     if (toDisplay.length >= 12){
//         toDisplay = toDisplay.toExponential()
//     }
//     display.innerText = toDisplay
// }

// need to split the numbers between operations

function calculate (num) {
    if (num == 'RESET'){
        numbers = []
        display.innerText = 0
    }

    else if (num == 'DEL'){
        numbers.pop()
        toDisplay = numbers.join('')
        display.innerText = toDisplay
    }

    else if (num == 'X'){
        numbers.push('*')
        toDisplay = numbers.join('')
        display.innerText = toDisplay
    }

    else if (num == '='){ 
        numbersToDisplay = numbers.join('')
        toDisplay = eval(numbersToDisplay)
        display.innerText = toDisplay
        console.log(typeof(toDisplay))
        numbers = (toDisplay.toString()).split('') 
        // console.log(numbers)
    }

    else{
        numbers.push(num)
        toDisplay = numbers.join('')
        display.innerText = toDisplay
    }
}

pushables.forEach(btn => {
    btn.addEventListener('click', (event) => {
        calculate( event.target.innerText );
   })
})
