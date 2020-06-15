const burgerButton = document.querySelector('.hamburger');
const menuWrapper = document.querySelector('.menu-wrapper');

burgerButton.onclick = () => {
    menuWrapper.classList.toggle('nav-active')
}