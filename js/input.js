const input = document.getElementById("searchInput");

input.addEventListener("blur", function () {
  if (input.value.trim() !== "") {
    input.style.backgroundColor = "#F4F5FB";
    input.style.borderColor = "#F4F5FB";
  } else {
    input.style.backgroundColor = "";
    input.style.borderColor = "";
  }
});
