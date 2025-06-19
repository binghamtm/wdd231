//const businessModal = document.getElementById("business-modal");
const myDialog = document.getElementById("name-input");
const closeButton = document.getElementById("closeButton");
const nameButton = document.getElementById("name-button");
const givenName = document.getElementById("given-name");
const userName = document.getElementById("user-name");





    if (localStorage.getItem('visitCount')) {
        let visitCount = Number(localStorage.getItem('visitCount'));
        visitCount += 1;
        localStorage.setItem('visitCount', visitCount);
        userName.innerHTML = localStorage.getItem('userName');
    }
    else {
        myDialog.showModal();
        localStorage.setItem('visitCount', 1);
        
        userName.innerHTML = localStorage.getItem('userName');
    }
    
    


closeButton.addEventListener("click", () => {
    myDialog.close();
    localStorage.setItem('userName', 'Guest');
    userName.innerHTML = localStorage.getItem('userName');
})

nameButton.addEventListener("click", () => {
    localStorage.setItem('userName', givenName.value);
    myDialog.close();
    userName.innerHTML = localStorage.getItem('userName');
})