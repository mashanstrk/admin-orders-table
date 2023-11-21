(() => {
    const refs = {
      openModalBtn: document.getElementById("splitBtn"),
      closeModalBtns: document.querySelectorAll("[data-modal-close]"),
      modal: document.getElementById("modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);

    refs.closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", toggleModal);
    });

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
