let regbtn = document.querySelector('.register_btn')
let loginbtn = document.querySelector('.login_btn')
let container = document.querySelector('.container')

regbtn.addEventListener('click', () => {
    container.classList.add('active')
})
loginbtn.addEventListener('click', () => {
    container.classList.remove('active')
})