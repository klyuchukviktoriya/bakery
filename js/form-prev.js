const contactsForm = document.querySelector(".contacts__form");

contactsForm.addEventListener("submit", e => {
  e.preventDefault();
  document.activeElement.blur();
  contactsForm.reset();
});
