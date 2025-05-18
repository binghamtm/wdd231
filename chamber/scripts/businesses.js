const businessCards = document.getElementById("business-container");

getData();

const listButton = document.getElementById("list-button");
const gridButton = document.getElementById("grid-button");

listButton.addEventListener('click', () => {
    const gridElements = document.querySelectorAll(".grid");

    gridElements.forEach(el => {
        el.classList.replace('grid', 'list');
    })
})

gridButton.addEventListener('click', () => {
    const listElements = document.querySelectorAll(".list");

    listElements.forEach(el => {
        el.classList.replace('list', 'grid');
    })
})





async function getData() {
    const response = await fetch('https://binghamtm.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    construct(data.businesses);
}

function construct(businesses) {
    businesses.forEach(business => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const membership = document.createElement("p");
        const logo = document.createElement("img");
        const phone = document.createElement("p");
        const address = document.createElement("p");
        const website = document.createElement("a");

        card.setAttribute("class", "grid")
        name.innerText = business.name;
        membership.innerText = ` ${business["membership-level"].charAt(0).toUpperCase() + business["membership-level"].slice(1).toLowerCase()} Tier`;
        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", business.name);
        phone.innerText = business.phone;
        address.innerText = business.address;
        website.innerText = business.website;
        website.setAttribute("href", business.website);

        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        
        businessCards.appendChild(card);
    });
}

