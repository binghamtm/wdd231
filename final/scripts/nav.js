const navButton = document.getElementById("nav-button");
const NavElement = document.querySelector(".menu-links");

navButton.addEventListener('click', () => {
    NavElement.classList.toggle('open');
    navButton.classList.toggle('open');
});