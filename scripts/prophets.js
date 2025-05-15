const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json");
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthdate = document.createElement("p")
        const birthplace = document.createElement("p")

        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", fullName);
        portrait.setAttribute("loading", "lazy");
        //portrait.setAttribute("height", portrait.naturalHeight);
        portrait.setAttribute("width", 300);
        birthdate.innerText = `Date of birth: ${prophet.birthdate}`;
        birthplace.innerText = `Place of Birth: ${prophet.birthplace}`;
        
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

getProphetData();