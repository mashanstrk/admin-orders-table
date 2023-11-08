const paginationBtn = document.getElementById("paginationPageQuantity");
const paginationList = document.getElementById("paginationList");

paginationBtn.addEventListener("click", function () {
    paginationList.classList.toggle("active-pagination");
    paginationList.classList.toggle("inactive-pagination");
  });

paginationList.addEventListener("click", function (event) {
  event.stopPropagation();
});