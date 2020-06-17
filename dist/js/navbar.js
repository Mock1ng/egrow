const navbarMobile = () => {
    const burgerButton = document.querySelector('.hamburger');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const outLayer = document.querySelector('.outlayer');
    burgerButton.onclick = () => {
        menuWrapper.classList.toggle('nav-active');
        outLayer.classList.toggle('display-block');
    }
}

navbarMobile();