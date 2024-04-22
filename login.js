const signUpBtnlink = document.querySelector('.signUpBtn-link')
const signInBtnLink = document.querySelector('.signInBtn-link')
const wrapper = document.querySelector('.wrapper')

signUpBtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active')
})

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active')
})


