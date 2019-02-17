
var buttonForm = document.querySelector(".search-form-button");
var form = document.querySelector(".form-search");
var formDate = form.querySelector(".search-arrival-date");

buttonForm.addEventListener("click", function functionName(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  formDate.focus();
} );
