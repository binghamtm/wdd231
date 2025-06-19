const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");
const currentDate = new Date();
currentYear.textContent = currentDate.getFullYear();
lastModified.textContent = document.lastModified;