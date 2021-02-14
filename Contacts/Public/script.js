const button = document.querySelector('.add button');
const close = document.querySelector('.close button')

button.addEventListener('click', Modal);
close.addEventListener('click', closeModal)

function Modal() {
    document.querySelector('.modal').style.display = 'block'
    document.querySelector('body').classList.add('modal-active')
}
function closeModal(e) {
    e.preventDefault()
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('body').classList.remove('modal-active');
}