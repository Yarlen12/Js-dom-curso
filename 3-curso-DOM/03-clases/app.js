const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal_close");

// console.log(modal.classList.item(2)); // La propiedad classList es solamente de lectura y devuelkve una coleccion DOM token list con los valores separados de cada clase que tiene el elemento donde se llama a la propiedad
// El item con parentesis nos pondra en consola la clase que pongamos, en este caso como el class2 es el numero dos saldra ese por consola

// console.log(modal.classList[2]); // es lo mismo que usarlo con item()

button.addEventListener("click", function () {
  console.log(modal.classList); // Para ver las clases que tiene el modal antes de agregar el show

  modal.classList.add("show"); // El metodo add te permite agregar a la lista de clases del modal sin modificar las clases anteriores

  console.log(modal.classList); // Este ultimo solo se utiliza para visualizar la clase ya agregada
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show"); //Es en modal porque recuerda que ahi esta la funcion de agregar y en closemodal no hay nada, se esta abriendo la funcion para que al darle click el modal se remueva el show por lo cual se cerrara
});

// button.addEventListener("click", function () {
//   if (button.matches(".red")) { //Matches es para comparar
//     button.classList.remove("red"); //Si button tiene una clase llamada red, entonces este lo removera
//   } else {
//     button.classList.add("red"); //Abrimos esta funcion que para cuando le demos click al button se agregara la clase red
//   }
// }); // Ahora si le damos click se agrega la clase red y al darle otro click se lo quitamos

// UNA FORMA MAS FACIL DE HACER LO DE ARRIBA

// button.addEventListener("click", function () {
//   button.classList.toggle("red"); //Si ve la clase de red ya agregada en el classlist este lo borrara y en caso de no verla lo agregara, de esa manera es mas facil que hacerlo con un if/else
// }); //Se puede usar para abrir y cerrar menus

// button.addEventListener("click", function () {
//   modal.classList.toggle("show"); // Funciona pero no aplica porque no es el mismo boton el de abrir modal que el de cerrar pero igual funciona para abrirlo
// });

// CONTAINS
// console.log(modal.classList.contains("modal")); //Contains es para preguntarle si existe una clase dentro de la lista, si no existe solo dira false, si existe dira true

// REPLACE, permite cambiar una clase existente dentro de la lista de clases por una nueva
// modal.classList.replace("class2222", "nueva-clase-mejorada"); //Si la clase que queremos reemplazar no existe entonces nos va a retornar un false
// console.log(modal.classList); //Para verificar que se cambio y lo hizo, se reemplazo por la nueva clase
