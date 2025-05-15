const navButton = document.getElementById("myButton");
const NavElement = document.querySelector(".menuLinks");

navButton.addEventListener('click', () => {
    NavElement.classList.toggle('open');
    navButton.classList.toggle('open');
});