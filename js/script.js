// // Toggle top bar 
// const $ = document;
// const topBarMenuIcon = $.querySelector('.fa-bars.menu-icon');
// const topBarCloseIcon = $.querySelector('.fa-xmark.close-icon');
// const navBar = $.querySelector('.top-bar__menu');


// topBarMenuIcon.addEventListener('click', () => {
//     navBar.classList.add('active');
// })

// topBarCloseIcon.addEventListener('click', () => {
//     navBar.classList.remove('active');
// })


// Toggle mobile menu
// Mobile menu toggle
const menubar = document.querySelector('.main-header__menubar');
const xmark = document.querySelector('.main-header__xmark');
const rightSection = document.querySelector('.main-header__right');

if (menubar && xmark && rightSection) {
  menubar.addEventListener('click', () => {
    rightSection.classList.add('active');
  });

  xmark.addEventListener('click', () => {
    rightSection.classList.remove('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!rightSection.contains(e.target) && !menubar.contains(e.target)) {
      rightSection.classList.remove('active');
    }
  });
}