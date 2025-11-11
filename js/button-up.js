const btnUp = document.getElementById("btn-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0
  });
});
