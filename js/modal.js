const modal = document.querySelector(".backdrop");
const modalBtnsOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
const modalForm = document.querySelector(".modal__form");

const toggleModal = () => {
  modal.classList.toggle("is-hidden");

  if (modal.classList.contains("is-hidden")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
};

modalForm.addEventListener("submit", e => {
  e.preventDefault();
  modal.classList.add("is-hidden");
  document.body.style.overflow = "";
});

modalBtnsOpen.forEach(btn => btn.addEventListener("click", toggleModal));
modalBtnClose.addEventListener("click", toggleModal);
