const businessCards = document.getElementById("business-container")

const businesses = getData();

businesses.forEach(business => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const membership = document.createElement("p");
    const logo = document.createElement("img");
    const phone = document.createElement("p");
    const address = document.createElement("p");
    const website = document.createElement("a");

    name.innerText = business.name;
    membership.innerText = business.membership;
    logo.setAttribute("src", business.logo);
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


async function getData() {
    const response = await fetch('https://binghamtm.github.io/wdd231/chamber/data/members.json')
    const data = await response.json();
    return data;
}