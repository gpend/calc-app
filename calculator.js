const pushables = document.querySelectorAll('.pushable')
const display = document.querySelector('#display p')
let numbers = []
let theme = 1

// function convertNumbersAndDisplay(itemToDisplay){
//     toDisplay = itemToDisplay.join('')
//     if (toDisplay.length >= 12){
//         toDisplay = toDisplay.toExponential()
//     }
//     display.innerText = toDisplay
// }

// TODO split the numbers between operations
// TODO remember theme via `prefers-color-scheme` in browser
// TODO make the theme dot clickable

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

// if ( 2 == 2 ){
//     theme += 1
// }

// else{
//     theme = 1
// }
let toggle_dot = $(".toggle-trough .toggle-dot")
toggle_dot.draggable({
    axis: 'x',
    containment: 'parent',
     stop: function() {
        let switchPosition = document.querySelector('.toggle-dot').style["left"]  
        switchCurrentPosition = switchPosition.replace('px','');
        switchCurrentPosition = parseInt(switchCurrentPosition)
        if (switchCurrentPosition < 14){
            //theme1 snap to 2
            document.querySelector('.toggle-dot').style["left"] = "2px"
            document.querySelector("body").id = "theme1"
        }
        else if (switchCurrentPosition >= 14 && switchCurrentPosition <= 35){
            //theme2 snap to 23
            document.querySelector('.toggle-dot').style["left"] = "23px"
            document.querySelector("body").id = "theme2"
        }
        else if (switchCurrentPosition > 35){
            //theme3 snap to 52
            document.querySelector('.toggle-dot').style["left"] = "52px"
            document.querySelector("body").id = "theme3"
        }
    }
  });
