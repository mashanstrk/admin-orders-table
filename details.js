const detailsButton = document.getElementById("detailsButton");
const ordersList = document.getElementById("ordersList");


detailsButton.addEventListener("click", function () {
    ordersList.classList.toggle("inactive-ordersList");
    ordersList.classList.toggle("active-ordersList");
  });