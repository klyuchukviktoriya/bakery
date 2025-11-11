const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLinks = document.querySelectorAll(".mobile-menu a");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");

  if (mobileMenu.classList.contains("is-open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });
});
