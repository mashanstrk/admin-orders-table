document.addEventListener("DOMContentLoaded", function () {
    const filterBox = document.getElementById("filterBox");
    const filterList = document.getElementById("filterList");
  
    filterBox.addEventListener("click", function () {
      if (filterList.style.display === "none" || filterList.style.display === "") {
        filterList.style.display = "block";
        filterBox.style.border = "3px solid var(--active)";
      } else {
        filterList.style.display = "none";
        filterBox.style.border = "3px solid var(--white)";
      }
    });
  });
  