// -- -- -- -- OPEN MENU

const menu = document.querySelector('.menu-top__mobile');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('active');
});

// -- -- -- -- -- MENU ANIMATION

// -- -- -- -- -- MENU ANIMATION

// -- -- -- -- OPEN MENU

// -- -- -- -- -- DOMContentLoaded Header
const headerAnimation = document.querySelector('.header-title__items');

document.addEventListener('DOMContentLoaded', function () {
    headerAnimation.classList.toggle('opacity');
});

// -- -- -- -- -- DOMContentLoaded Header


// -- -- -- -- -- SLIDER

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
