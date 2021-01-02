const button = document.querySelector('button');
const conatiner = document.querySelector('.container')
const text = document.querySelector('.hex-color')

button.addEventListener('click', changebackground)

function changebackground() {
    let result = ''
    let numbers = Math.floor(Math.random()*10)
    let characters = "ABCDEF" + numbers
    let charlength = characters.length;
    for (let i = 0; i < 6; i++){
        result += characters.charAt(Math.floor(Math.random() * charlength))
    }
    conatiner.style.background = '#' + result
    text.innerText = '#' + result
    console.log(result)
}