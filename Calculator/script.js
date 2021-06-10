// selectors
const number = document.querySelectorAll('#num')
const prevoutput = document.getElementById('prevoutput')
const currentoutput = document.getElementById('currentoutput')
const operator = document.querySelectorAll('#operat')
const equal = document.getElementById('equal')
const del = document.getElementById('del')
const reset = document.getElementById('rst')

let oper;
// check if operator button is clicked 
let elementisclicked = false;

// functions
// handles the click event of operator
function clickHandler(){
    elementisclicked = true
}
function clear(){
    elementisclicked = false
    currentoutput.innerText = '';
    prevoutput.innerText = 0;
    prevoutput.innerText =  prevoutput.innerText.toString().slice(0, -1);
}
function dels(){
    if(elementisclicked == true){
        currentoutput.innerText =  currentoutput.innerText.toString().slice(0, -1);
    }else{
        prevoutput.innerText =  prevoutput.innerText.toString().slice(0, -1);
    }
}
// selects the operator
function chooseOperation(operators){
    oper = operators;
}
function compute(){
    let computation;
    const prev = parseFloat(prevoutput.innerText);
    const current = parseFloat(currentoutput.innerText);
    // if(isNaN(prev) || isNaN(current)) return
    switch(oper){
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev + current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    prevoutput.innerText = computation
    prevoutput.innerText = prevoutput.innerText.slice(0, 10)
    currentoutput.innerText = ""
}
function printScreen(num){
    if(elementisclicked == true){
        currentoutput.innerText += num
    }else{
        prevoutput.innerText += num
    }
}

// implements
number.forEach(number => {
    number.addEventListener('click', (e)=>{
        let nums = e.target.value;
        printScreen(nums)
    })
})
del.addEventListener('click', ()=>{
    dels()
})
reset.addEventListener('click', ()=>{
    clear()
})
operator.forEach(opers => {
    opers.addEventListener('click', (e)=>{
        chooseOperation(e.target.value)
        clickHandler()
    })
})
equal.addEventListener('click', ()=>{
    compute()
})
