document.addEventListener("DOMContentLoaded", function () {
    const filterBox = document.getElementById("filterBox");
    const filterList = document.getElementById("filterList");
  
    filterBox.addEventListener("click", function () {
      if (filterList.style.display === "none" || filterList.style.display === "") {
        filterList.style.display = "block";
      } else {
        filterList.style.display = "none";
      }
    });
  });
  