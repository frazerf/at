const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.main-nav__menu');

// toggle show/active class on menu and burger when the burger is clicked
burger.addEventListener('click', () => {
  menu.classList.toggle('show');
  burger.classList.toggle('active');
});

// close the menu and remove active when the window is resized above 767px
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    menu.classList.remove('show');
    burger.classList.remove('active');
  }
});