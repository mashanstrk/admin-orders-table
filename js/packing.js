(() => {
    const refs = {
      openBtn: document.getElementById("confirmPackages"),
      closeBtns: document.querySelectorAll("[data-packing-close]"),
      modal: document.getElementById("modalPacking"),
    };
  
    refs.openBtn.addEventListener("click", toggleModal);

    refs.closeBtns.forEach((btn) => {
        btn.addEventListener("click", toggleModal);
    });

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
