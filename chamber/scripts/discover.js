import {places} from '../data/data.mjs';

const placesDiv = document.getElementById("places");

construct(places);

function construct(data) {
    data.forEach(dataPoint => {
        const card = document.createElement("section");
        const title = document.createElement("h3");
        const coordinates = document.createElement("p");
        const description = document.createElement("p");
        const photo = document.createElement("img");
        const learnMore = document.createElement("button");

        card.setAttribute("class", "grid");
        title.innerText = dataPoint.title;
        coordinates.innerText = `Latitude: ${dataPoint.coordinates.lat}° Longditude: ${dataPoint.coordinates.lng}°`;
        coordinates.setAttribute("class", "coordinates");
        description.innerText = dataPoint.description;
        description.setAttribute("class", "description");
        photo.setAttribute("src", `images/${dataPoint.image_url}`);
        photo.setAttribute("alt", dataPoint.title);
        photo.setAttribute("loading", "lazy");
        learnMore.innerHTML = "Learn More";
        
        

        card.appendChild(title);
        card.appendChild(coordinates);
        card.appendChild(description);
        card.appendChild(photo);
        card.appendChild(learnMore);
    
        
        placesDiv.appendChild(card);
    });
}

