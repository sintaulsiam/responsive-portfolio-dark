// nav toggle
const navToggle = document.querySelector('.nav__toggle')!;
const navLinks = document.querySelector('.nav__links')!;

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle('nav__toggle--active');
    navLinks.classList.toggle('nav__links--open');
});