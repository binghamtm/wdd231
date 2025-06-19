//const businessModal = document.getElementById("business-modal");
const myDialog = document.getElementById("name-input");
const closeButton = document.getElementById("closeButton");
const nameButton = document.getElementById("name-button");
const givenName = document.getElementById("given-name");
const userName = document.getElementById("user-name");

localStorage.setItem('userName', 'Guest');

document.addEventListener("DOMContentLoaded", () => {
    myDialog.showModal();
    
});

closeButton.addEventListener("click", () => {
    myDialog.close();
    userName.innerHTML = localStorage.getItem('userName');
})

nameButton.addEventListener("click", () => {
    localStorage.setItem('userName', givenName.value);
    myDialog.close();
    userName.innerHTML = localStorage.getItem('userName');
})