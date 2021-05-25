const number = document.querySelectorAll('#num')
const output = document.getElementById('output')
const operator = document.querySelectorAll('#operat')
const equal = document.getElementById('equal')
const del = document.getElementById('del')
const reset = document.getElementById('rst')

let num2 = ''
let num1 = ''
let operators = ''
let total

// functions
function printScreen(num){
    output.innerText = num
}
function operations(num1, num2){
    operator.forEach(operat => {
        operat.addEventListener('click', (e)=>{
            let operas = e.target.value
            console.log(operas)
            switch(operas){
                case '+':
                    total = num1 + num2;
                    break
                case '-':
                    total = num1 - num2;
                    break
                case '*':
                    total = num1 * num2;
                    break
                case '/':
                    total = num1 / num2;
                    break
            }
        })
    })
}

number.forEach(number => {
    number.addEventListener('click', (e)=>{
        let nums = e.target.value;
        num1 += nums
        printScreen(num1)
    })
})

operations(num1, num2)