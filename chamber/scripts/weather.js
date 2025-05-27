const myTown = document.getElementById("town");
const myDescription = document.getElementById("description");
const myTemperature = document.getElementById("temperature");
const myGraphic = document.getElementById("graphic");
const threeDayContainer = document.getElementById("forecast");

const myKey = "7f9e9818419387cdfd193ad12c58b1f6";
const myLat = "-77.80448209706444";
const myLong = "166.7379379157282";

const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


apiFetch();

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            displayThreeDayForecast(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    };
}

function displayResults(data) {
    myTown.innerHTML = data.city.name;
    myDescription.innerHTML = data.list[0].weather[0].description;
    myTemperature.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.list[0].weather[0].description)
}

function displayThreeDayForecast(data) {
    let forecastDay = 8;
    for (let i = 0; i < 3; i++) {
        const forecastCard = document.createElement("div");
        forecastCard.setAttribute("class", `day-${i+1}`);
        const date = document.createElement("h4");
        const description = document.createElement("p");
        const temp = document.createElement("p");

        date.innerHTML = data.list[forecastDay].dt_txt;
        description.innerHTML = data.list[forecastDay].weather[0].description;
        temp.innerHTML = `${data.list[forecastDay].main.temp}&deg;F`;

        forecastCard.appendChild(date);
        forecastCard.appendChild(description);
        forecastCard.appendChild(temp);

        threeDayContainer.appendChild(forecastCard);

        forecastDay += 8;

    }
}



