const checkboxContainers = document.querySelectorAll('.packing__item__icon');

checkboxContainers.forEach(function(checkboxContainer) {
  const checkboxInput = checkboxContainer.querySelector('input');
  const checkboxSvg = checkboxContainer.querySelector('.packing__checkbox');

  checkboxContainer.addEventListener('click', function() {
    checkboxInput.checked = !checkboxInput.checked;
    updateCheckboxClass();
  });

  checkboxInput.addEventListener('change', function() {
    updateCheckboxClass();
  });

  function updateCheckboxClass() {
    if (checkboxInput.checked) {
      checkboxSvg.classList.add('packing__checkbox-checked');
    } else {
      checkboxSvg.classList.remove('packing__checkbox-checked');
    }
  }
});
