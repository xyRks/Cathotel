let burger = document.querySelector('.burger') 
let contentBurger = document.querySelector('.header-content-burger')

burger.onclick = function () {
    contentBurger.classList.toggle ('active')
    burger.classList.toggle ('active')
    document.body.classList.toggle ('hidden')
}