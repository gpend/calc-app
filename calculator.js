const pushables = document.querySelectorAll('.pushable')
const display = document.querySelector('#display p')
let numbersNew = ""
let operation = ""
let theme = 1
let storageTheme = localStorage.getItem(`prefers-color-scheme`)
if (storageTheme != null){
    toggleTheme(parseInt(storageTheme))
}
// function convertNumbersAndDisplay(itemToDisplay){
//     toDisplay = itemToDisplay.join('')
//     if (toDisplay.length >= 12){
//         toDisplay = toDisplay.toExponential()
//     }
//     display.innerText = toDisplay
// }

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
// setting up sessionstorage to avoid a null message
sessionStorage.setItem('numbersNew', '')

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
let themeID1 = $("#1")
let themeID2 = $("#2")
let themeID3 = $("#3")
let toggle_trough = $(".toggle-trough")

function toggleTheme(theme){
    if (theme == 1){
        document.querySelector('.toggle-dot').style["left"] = "2px"
        document.querySelector("body").id = "theme1"
        localStorage.setItem(`prefers-color-scheme`, 1)
    }
    else if (theme == 2){
        document.querySelector('.toggle-dot').style["left"] = "23px"
        document.querySelector("body").id = "theme2"
        localStorage.setItem(`prefers-color-scheme`, 2)
    }
    else if (theme == 3){
        document.querySelector('.toggle-dot').style["left"] = "52px"
        document.querySelector("body").id = "theme3"
        localStorage.setItem(`prefers-color-scheme`, 3)
    }
}

themeID1.click( function () {
    toggleTheme(1)
})
 themeID2.click( function () {
    toggleTheme(2)
})
themeID3.click( function () {
    toggleTheme(3)
})

toggle_trough.click( function () {
    let themeVar = $(".theme")[0]["id"]
    themeVar = parseInt(themeVar.slice(-1))
    if (themeVar == 1){
        toggleTheme(2)
    }
    else if (themeVar == 2){
        toggleTheme(3)
    }
    else if (themeVar == 3){
        toggleTheme(1)
    }
})

toggle_dot.draggable({
    axis: 'x',
    containment: 'parent',
     stop: function() {
        let switchPosition = document.querySelector('.toggle-dot').style["left"]  
        switchCurrentPosition = switchPosition.replace('px','');
        switchCurrentPosition = parseInt(switchCurrentPosition)
        if (switchCurrentPosition < 14){
            //theme1 snap to 2
            toggleTheme(1)
        }
        else if (switchCurrentPosition >= 14 && switchCurrentPosition <= 35){
            //theme2 snap to 23
            toggleTheme(2)
        }
        else if (switchCurrentPosition > 35){
            //theme3 snap to 52
            toggleTheme(3)
        }
    }
  });
