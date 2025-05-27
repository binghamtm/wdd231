



const businessCards = document.getElementById("row-two");








function randomThree(data) {
    const randomData = [];
    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * data.length);
        
        
        randomData.push(data[random]);
        data.splice(random, 1);
    }
    construct(randomData);
}

function filterData(data) {
    const filteredData = data.filter(dataPoint => dataPoint["membership-level"] === "gold" || dataPoint["membership-level"] === "silver");
    randomThree(filteredData);
}

async function getData() {
    const response = await fetch('https://binghamtm.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    filterData(data.businesses);
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
        logo.setAttribute("loading", "lazy");
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

getData();