import { gunRentals } from "./rentalList.mjs";

const rentalsContainer = document.getElementById("rentals-container");

const allButton = document.getElementById("all");
const pistolButton = document.getElementById("pistol");
const revolverButton = document.getElementById("revolver");
const rifleButton = document.getElementById("rifle");
const shotgunButton = document.getElementById("shotgun");


document.addEventListener("DOMContentLoaded", displayGuns(gunRentals));

allButton.addEventListener("click", () => {
    displayGuns(gunRentals);
});
pistolButton.addEventListener("click", () => {
    const filteredRentals = gunRentals.filter(gun => gun.type === "pistol");
    displayGuns(filteredRentals);
});
revolverButton.addEventListener("click", () => {
    const filteredRentals = gunRentals.filter(gun => gun.type === "revolver");
    displayGuns(filteredRentals);
});
rifleButton.addEventListener("click", () => {
    const filteredRentals = gunRentals.filter(gun => gun.type === "rifle");
    displayGuns(filteredRentals);
});
shotgunButton.addEventListener("click", () => {
    const filteredRentals = gunRentals.filter(gun => gun.type === "shotgun");
    displayGuns(filteredRentals);
});

function displayGuns(gunRentals) {
    rentalsContainer.replaceChildren();
    gunRentals.forEach(gun => {
    const gunCard = document.createElement('section');
    const gunName = document.createElement('h1');
    const gunImage = document.createElement('img');
    const gunDescription = document.createElement('p');
    const gunType = document.createElement('p');
    const gunCaliber = document.createElement('p');

    gunName.innerHTML = `${gun.name}`;
    gunImage.setAttribute('src', gun.image);
    gunImage.setAttribute('alt', gun.name);
    gunImage.setAttribute('loading', 'lazy');
    gunDescription.innerHTML = `${gun.description}`;
    gunType.innerHTML = `Classification: ${gun.type.charAt(0).toUpperCase() + gun.type.slice(1)}`;
    gunCaliber.innerHTML = `Caliber: ${gun.caliber}`;

    gunCard.appendChild(gunName);
    gunCard.appendChild(gunImage);
    gunCard.appendChild(gunDescription);
    gunCard.appendChild(gunType);
    gunCard.appendChild(gunCaliber);

    rentalsContainer.appendChild(gunCard);
});
}