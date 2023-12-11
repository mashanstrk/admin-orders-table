const firstStepThumb = document.getElementById("firstStepThumb");
const secondStepThumb = document.getElementById("secondStepThumb");
const firstStepBtn = document.getElementById("firstStepBtn");
const secondStepBtn = document.getElementById("secondStepBtn");
const firstStepNavTitle = document.querySelector("#firstStepBtn .confirm__modal__nav__title");
const secondStepNavTitle = document.querySelector("#secondStepBtn .confirm__modal__nav__title");
const navCurrentClass = "confirm__modal__nav-current";
const navTitleCurrentClass = "confirm__modal__nav__title-curent";
const printBtn = document.getElementById("printBtn");
const finishBtn = document.getElementById("finishBtn");


function showElement(elementToShow, elementToHide, buttonToShow, buttonToHide, buttonShow, buttonHide) {
  elementToShow.style.display = "block";
  elementToHide.style.display = "none";

  buttonShow.style.display = "block";
  buttonHide.style.display = "none";

  buttonToShow.classList.add(navCurrentClass);
  buttonToHide.classList.remove(navCurrentClass);

  buttonToShow.querySelector('.confirm__modal__nav__title').classList.add(navTitleCurrentClass);
  buttonToHide.querySelector('.confirm__modal__nav__title').classList.remove(navTitleCurrentClass);
}

firstStepBtn.addEventListener("click", function() {
  showElement(firstStepThumb, secondStepThumb, firstStepBtn, secondStepBtn, printBtn, finishBtn);
});

secondStepBtn.addEventListener("click", function() {
  showElement(secondStepThumb, firstStepThumb, secondStepBtn, firstStepBtn, finishBtn, printBtn);
});
