// toggle navbar in tablet and mobile screen 
const menubarIcon = document.querySelector('.main-header__menubar');
const closeNavbarIcon = document.querySelector('.main-header__xmark');
const navbar = document.querySelector('.main-header__right');

menubarIcon.addEventListener('click', () => {
  navbar.classList.add('active');
})

closeNavbarIcon.addEventListener('click', () => {
  navbar.classList.remove('active');
});


// toggle the navbar dropdowns 
const hasDropdowns = document.querySelectorAll('.has-dropdown');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    hasDropdowns.forEach(closeDropdown);
  }
});

hasDropdowns.forEach(item => {
  const trigger = item.querySelector('.main-header__link');
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = item.classList.contains('is-open');
    hasDropdowns.forEach(closeDropdown);

    if (!isOpen) openDropdown(item);
  });
});

function openDropdown(item) {
  const dd = item.querySelector('.main-header__dropdown');
  const icon = item.querySelector('.fa-chevron-down');
  dd.style.visibility = 'visible';
  dd.style.opacity = '1';
  dd.style.transform = 'translateY(0)';
  icon.style.transform = 'rotate(180deg)';
  item.classList.add('is-open');
}

function closeDropdown(item) {
  const dd = item.querySelector('.main-header__dropdown');
  const icon = item.querySelector('.fa-chevron-down');
  dd.style.visibility = 'hidden';
  dd.style.opacity = '0';
  dd.style.transform = 'translateY(-10px)';
  icon.style.transform = 'rotate(0deg)';
  item.classList.remove('is-open');
}


// toggle the category selection menu 

if (location.href.includes('category')) {
  const selectionMenu = document.querySelector('.courses-top-bar__selection');
  const arrowIcon = document.querySelector('.courses-top-bar__selection-icon');
  const selectionList = document.querySelector('.courses-top-bar__selection-list');

  let isMenuOpen = false;

  selectionMenu.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      arrowIcon.style.transform = 'rotate(180deg)';
      selectionList.style.display = 'block';
    } else {
      arrowIcon.style.transform = 'rotate(0)';
      selectionList.style.display = 'none';
    }
  });

  document.addEventListener('click', (event) => {
    if (!selectionMenu.contains(event.target) && !selectionList.contains(event.target)) {
      arrowIcon.style.transform = 'rotate(0)';
      selectionList.style.display = 'none';
      isMenuOpen = false;
    }
  })
}