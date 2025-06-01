//const businessModal = document.getElementById("business-modal");
const myDialog = document.getElementById("benefits");
const dialogBoxText = document.querySelector("#benefits div");
const closeButton = document.getElementById("closeButton");

nonProfit.addEventListener("click", () => {
    myDialog.showModal();
    dialogBoxText.innerHTML = "non-profit benefits:"
});

bronze.addEventListener("click", () => {
    myDialog.showModal();
    dialogBoxText.innerHTML = "bronze benefits:"
});

silver.addEventListener("click", () => {
    myDialog.showModal();
    dialogBoxText.innerHTML = "silver benefits:"
});

gold.addEventListener("click", () => {
    myDialog.showModal();
    dialogBoxText.innerHTML = "gold benefits:"
});

closeButton.addEventListener("click", () => {
    myDialog.close();
})