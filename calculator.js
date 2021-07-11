const pushables = document.querySelectorAll('.pushable')
const display = document.querySelector('#display p')
let num1 = []
let num2 = []


function calculate (num) {
    if (num == '+'){

    }
    else if (num == '-'){

    }
    else if (num == 'X'){

    }
    else if (num == '/'){

    }
    else if (num == 'RESET'){

    }
    else if (num == 'DEL'){

    }
    else if (num == '='){

    }
    else if (num == '.'){

    }
    else if (Number.isInteger(num)){

    }
    else{

    }
    


}






pushables.forEach(btn => {
    btn.addEventListener('click', (event) => {
        calculate( event.target.innerText );
   })
})



/*
get events
add int or symbol to list, convert X to *
concatenate list to display list - .join
equals triggers eval() - 
reset clears list
del removes the last item

num1 = []
num2 = []


var calc = "123+456"
calc
"123+456"
eval(calc)
579
*/

