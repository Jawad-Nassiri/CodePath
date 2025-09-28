// Toggle top bar 
const $ = document;
const topBarMenuIcon = $.querySelector('.fa-bars.menu-icon');
const topBarCloseIcon = $.querySelector('.fa-xmark.close-icon');
const navBar = $.querySelector('.top-bar__menu');


topBarMenuIcon.addEventListener('click', () => {
    navBar.classList.add('active');
})

topBarCloseIcon.addEventListener('click', () => {
    navBar.classList.remove('active');
})