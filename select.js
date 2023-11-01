const filterBtn = document.getElementById("filterBtn");
const filterList = document.getElementById("filterList");
const iconFilter = document.getElementById("iconFilter");

filterBtn.addEventListener("click", function () {
  if (filterList.classList.contains("inactive")) {
    filterList.classList.remove("inactive");
    filterList.classList.add("active");
    iconFilter.classList.add("active__icon");
  } else {
    filterList.classList.remove("active");
    filterList.classList.add("inactive");
    iconFilter.classList.remove("active__icon");
  }
});

filterList.addEventListener("click", function (event) {
  event.stopPropagation();
});


  