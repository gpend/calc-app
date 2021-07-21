const pushables = document.querySelectorAll('.pushable')
const display = document.querySelector('#display p')
let numbersNew = ""
let operation = ""
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

function preformCalculation(operation){
    sessionStorage.setItem('operation', operation)
    let numbersOld = sessionStorage.getItem('numbersNew')
    sessionStorage.setItem('numbersOld',numbersOld)
    numbersNew = ''
    sessionStorage.setItem('numbersNew', numbersNew)
    display.innerText = numbersNew
}

function calculate (num) {
    if (num == 'RESET'){
        sessionStorage.setItem('numbersNew', '')
        sessionStorage.setItem('numbersOld', '')
        display.innerText = 0
    }

    else if (num == 'DEL'){
        let numbersNew = sessionStorage.getItem('numbersNew')
        numbersNew = numbersNew.slice(0,-1)
        sessionStorage.setItem('numbersNew', numbersNew)
        display.innerText = numbersNew
    }

    else if (num == 'X'){
        operation = '*'
        preformCalculation(operation)
    }

    else if (num == '-'){
        operation = '-'
        preformCalculation(operation)
    }

    else if (num == '+'){
        operation = '+'
        preformCalculation(operation)
    }

    else if (num == '/'){
        operation = '/'
        preformCalculation(operation)
    }

    else if (num == '='){ 
        let numbersOld = sessionStorage.getItem('numbersOld')
        let numbersNew = sessionStorage.getItem('numbersNew')
        let operation = sessionStorage.getItem('operation')
        let mathSet = numbersOld + operation + numbersNew
        let total  = eval(mathSet)
        display.innerText = total
        numbersNew = total
        sessionStorage.setItem('numbersNew',total)

        // console.log(numbers)
    }

    else{
        let numbersNew = sessionStorage.getItem('numbersNew')
        numbersNew += num
        sessionStorage.setItem('numbersNew', numbersNew)
        display.innerText = numbersNew
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
