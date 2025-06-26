// const wrapper = document.querySelector('[data-id="wrapper"]');

// const input = document.querySelector('[type="text"]');

// const changeUser = document.querySelector('[data-id="name"]');

// const section = document.querySelector(".section");

// const buttonShow = document.querySelector('[data-id="button-show"]');

// const buttonHide = document.querySelector('[data-id="button-hide"]');

// input.addEventListener("change", function (e) {
//   changeUser.textContent = e.target.value;
// }); // El proposito de esto es cuando en el input pongamos un nombre o letras (a eso se le llama darle foco ya que lo estamos utilizando) y damos click en una parte en blanco con el textcontent hara que donde dice usuario dira el nombre que le pongas en el input

// function controladorEvento() {
//   const nombre = prompt("Cual es tu nombre?");

//   alert(`Hola, ${nombre}`);
//   changeUser.textContent = nombre; //realizado por mi para una prueba
// } // No poner un onclick="controladorEvento() una funcion dentro del onclick ya que es una mala practica y eso no se debe de hacer "

// buttonShow.onclick = controladorEvento; //No se debe de poner parentesis porque la funcion se llama automaticamente, esto no se debe de usar

// buttonShow.addEventListener("click", controladorEvento);

// buttonShow.addEventListener("click", function () {
//   alert("soy otro manejador");
// });

// function showSection(event) {
//   event.preventDefault(); //Le quita su comportamiento por defecto
//   //Este objeto tiene toda la informacion sobre el evento que acaba de ocurrir
//   // console.log(event.type); // es un evento que nos dice todo lo que acaba de ocurrir
//   // console.log(event.target); // va a imprimir el evento al que le di click
//   wrapper.className = "show"; //Sobre escribimos todas las clases del elemento con classname
// }

// function hideSection() {
//   wrapper.className = "hide";
// }

// buttonShow.addEventListener("click", showSection); // Mostrara el contenido de wrapper

// buttonHide.addEventListener("click", hideSection); // Lo que hara es que ocultara el contenido del wrapper con una tipo animacion

// input.addEventListener("change", function (e) {
//   changeUser.textContent = e.target.value;

//   // console.dir(e.target.value); // para verificar en que momento se ejecuto el evento
// }); //Le vamos a poner console.dir para ver sus propiedades //Le vamos a poner .value para ver el valor de e.target que vendria siendo el input donde agregamos un nombre

// // wrapper.addEventListener("click", function (e) {
// //   console.log(e.taget); //Aqui solo vimos el contenido de los elementos al darle click
// // });

// wrapper.addEventListener("click", function (e) {
//   e.target.style.backgroundColor = "hotpink";
// }); //Lo que hara es que cambiara a color rosa a donde le de click en el wrapper

// const form = input.parentElement; // vamos a pasar por el padre del input

// // console.log(form);

// // form.addEventListener("submit", function (e) {
// //   e.preventDefault(); //Como ya preeve su comportamiento por defecto no hara nada, ni saltara a otra ventana ni nada
// //   console.log("hola"); //Lo unico que hara es que cuando le des a submit se ponga un hola en el console, cada vez que le das un hola se suman en la consola, es lo unico que sucede
// // });

// form.onsubmit = function () {
//   console.log("enviado");

//   return false;
// }; //Tambien preeviene su comportamiento por defecto por el return false al final

// function showSection(event) {
//   event.preventDefault();
//   wrapper.className = "show";

//   // this.textContent = "He cambiado el texto"; // Solo cambiamos el texto de mostrar seccion del boton
//   // console.log("this"); //Esta palabra de this esta palabra hace referencia al objeto en el contexto actual
// }

// const hideSection = () => {
//   event.preventDefault();
//   wrapper.className = "hide";

//   console.log(this); //Hara referencia al objeto global window, esto es porque cuando usamos funciones de flecha el valor de this no sera la del objeto donde se llamo la funcion si no que tomara el contexto de la funcion contenedora del arrow function como en este caso el global window
// };

// function hideSection(event) {
//   event.preventDefault();
//   wrapper.className = "hide";
// } //De esta manera ya se puede remover el hideSection

// buttonShow.addEventListener("click", showSection);

// buttonHide.addEventListener("click", hideSection);

// // buttonHide.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   wrapper.className = "hide";
// // });

// buttonShow.removeEventListener("click", showSection); // Es un metodo que me permite borrar o remover una funcion manejadora de un evento
// //Ya al momento de ocultarla y querer mostrarla de nuevo ya no se podra porque lo removimos

// buttonHide.removeEventListener("click", hideSection); // Ya con esto pudimos hacer que ya no funcionara el hideSection ya no se oculta ni pasa nada

// buttonHide.removeEventListener("click", function (event) {
//   event.preventDefault();
//   wrapper.className = "hide";
// }); // En este caso como es un funcion anonima de que se oculta no podemos removerlo

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function handleEvent(e) {
//   console.log(`Ha dado click en ${e.currentTarget.nodeName}`); // esto lo que hara es que al darle click a cualquier parte de la pagina dira que he dado click en body no importa donde porque tiene un currentTarget
// }

// // function handleEvent(e) {
// //   console.log(`Ha dado click en ${e.target.nodeName}`); //Con esto me dira donde hice click exactamente ya sea en h1 o en button, etc
// // }

// // document.body.addEventListener(`click`, handleEvent);
// section.addEventListener(`click`, handleEvent); //Aunque tenga este evento de igual forma me va a estar dando click y diciendome por consola donde lo hice
// buttonShow.addEventListener(`click`, handleEvent); //Lo que esto hara es que al darle click se seleccionara todas las clases que tiene por atras, por ejemplo button, section y body, de igual forma si le doy click a todo lo que tiene por detras como en este caso section, se seleccionara todo ese paquete en consola
// buttonHide.addEventListener(`click`, handleEvent); // Este hara exactamente lo mismo que el de arriba
// document.body.addEventListener(`click`, handleEvent); //Este solo dira body en donde selecciones, solo en donde no se le asigno un evento, lo que ya fueron seleccionados solo dira lo de su paquete como el de buttonShow

// Para parar la propagacion de eventos

// function handleEvent(e) {
//   console.log(`Ha dado click en ${(e, currentTarget.nodeName)}`);
// }

// function handleEventStop(e) {
//   // e.stopPropagation(); //Con esto paramos las propagacion lo que significa que ya no tiene que salir lo que hay por detras
//   // e.stopimmediatePropagation(); //Esto lo que hace es evita que se agregue mas de un manejador para un evento
//   console.log(`Ha dado click en ${e.currentTarget.nodeName}`);
// }
// // Teniendo el e.stopPropagation y el section con la alerta funcina bien sale la alerta primero y despues por consola te dice que fue a lo que le hiciste click

// buttonShow.addEventListener(`click`, handleEvent);
// buttonHide.addEventListener(`click`, handleEvent);
// document.body.addEventListener(`click`, handleEvent);
// section.addEventListener(`click`, handleEvent);
// section.addEventListener(`click`, () => {
//   alert(`Hola mundo`);
// }); //Dira la alerta sin mas
// section.addEventListener(`click`, handleEventStop);

// Fase de captura: esta face es en lugar de propagar el elemento de forma ascendente, va a capturar los eventos desde el nodo principal del dom, llegando hasta el elemento que se disparo el evento

// function handleEvent(e) {
//   console.log(`Has dado click en ${e.currentTarget.nodeName}`);
// }

// buttonShow.addEventListener(`click`, handleEvent, {
//   capture: true,
// });

// buttonHide.addEventListener(`click`, handleEvent, {
//   capture: true,
// });

// section.addEventListener(`click`, handleEvent, {
//   capture: true,
// });

// document.body.addEventListener(`click`, handleEvent, {
//   capture: true,
// }); // Lo que hara es que se propagara de forma ordenada

// matches y closest

// const elements = document.querySelectorAll("[data-id]");
// console.log(elements); // Me dara una lista que tenga data-id

// for (element of elements) {
//   const buttonShow = element.matches(`[data-id = "button-show"]`);
//   console.log(buttonShow); //Este es para verificar si button-show tiene el data-id, me dara 4 resultados que son los elementos que tienen el data-id en caso de no ser un button-show dara false y si lo tiene un elemento dara true

// console.log(element); // Me mostrara todos los elementos que tengan el data-id con sus atributos
// }

// const ButtonHide = document.querySelector(`[data-id="button-hide"]`);

// const elements = document.querySelectorAll("[data-id]");

// for (element of elements) {
//   const currentElement = element.matches(`[data-id="button-show"]`);

//   if (currentEleent) {
//     console.log(element); //Deberia de mostrarnos en consola el data-id="button-show" ya que element tiene esos elementos
//     console.log(
//       `El boton ${element.nodeName} contiene el valor button-show en su atributo`
//     ); //Esto lo que hara es que al encontrar el elemento button-show pondra en la consola el mensaje de arriba.
//   }
// }

// //Retorna un nodo de tipo elemento que coincida con el selector dado, empieza la busqueda desde el mismo elemento y si no lo encuentra lo va buscando de forma ascendente
// console.log(input.closest(".wrapper")); // Usamos el closest para que nos retorne su metodo mas cercano, en caso de escribir mal el nombre y no haya coincidencias me va a arrojar un null

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Event Delegation (Delegacion de eventos nos permite aprovecharnos de la propagacion de eventos para determinar un manejador de eventos a un manejador de nodos que haga una accion predeterminada, en vez de manejar un  manejador de eventos por cada nodo vamos a declarar un manejador de eventos global )
//  En vez de poner un manejador por boton vamos a poner un manejador por seccion

const section = document.querySelector(`.section`);

function eventDelegation(e) {
  if (e.target.matches(".button-color")) {
    const getColor = e.target.getAttribute("data-color"); // Con esto deberia de darnos el atributo de data-color al dar click a uno de los 3 botones

    e.currentTarget.style.backgroundColor = getColor; // Se cambiara el estilo del background  al dar click a un boton, dependiendo a que boton le des click es color que se pondra de background, ya que cada boton tiene un color predeterminado

    // console.log(getColor);
    // console.log("Diste click a un boton");
  }
  // console.log(e.target);
}
section.addEventListener("click", eventDelegation); //Me deberia devolver las clases y los elementos que hay dentro de section de la clase section
