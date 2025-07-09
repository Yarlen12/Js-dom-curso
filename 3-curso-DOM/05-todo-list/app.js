const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault(); //Para que cuando le demos click al button la pagina no se recargue
}
