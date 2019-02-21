
var buttonForm = document.querySelector(".search-form-button");
var form = document.querySelector(".form-search");
var formDate = form.querySelector(".search-arrival-date");

function focus() {
  formDate.focus();
  console.log('9 rabotau');
}

buttonForm.addEventListener("click", function functionName(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  setTimeout(focus, 2000);
} );
