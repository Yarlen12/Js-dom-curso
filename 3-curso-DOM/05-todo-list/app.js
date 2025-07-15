const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = form.querySelector(".input");
const listContainer = document.querySelector(".list-container");

form.addEventListener("submit", handleSubmit);

message();
function message() {
  const h3 = document.createElement("h3");

  h3.classList.add("task-message");

  h3.textContent = listContainer.firstElementChild
    ? "Tareas por hacer"
    : "No hay tareas aun";

  // listContainer.appendChild(h3);

  // listContainer.parentElement.insertBefore(h3, listContainer); //Este metodo permite agregar un nodo como hermano anterior, antes de la referencia, esto es muy complejo y ya no se utiliza
  // asi es como se usa el codigo de arriba: parentNode.insertBefore(newNode, nodeReference)

  const prevMessage = document.querySelector(".task-message");

  // console.log(prevMessage);

  if (prevMessage) {
    // prevMessage.parentElement.replaceChild(h3, prevMessage); // El padre del elemento prevMessage, reemplazara al hijo primero va el nuevo nodo y una coma y el viejo nodo
    // parentNode.replaceChild(newNode, oldNode) pero este metodo ya no se usa porque es muy complicado en ves de esto se usa de la siguiente forma:

    prevMessage.replaceWith(h3);

    return;
  }

  listContainer.before(h3); //Solo se utiliza asi que hace que el h3 pase como el hermano anterior

  // listContainer.after(h3); //Esto hace que pase como segundo hermano o hermano despues si se puede decir asi, esto significa que el elemento listContainer pasara a hermano anterior
}

function handleSubmit(e) {
  e.preventDefault(); //Para que cuando le demos click al button la pagina no se recargue

  const inputValue = input.value;
  //   console.log(inputValue);

  createTask(inputValue);

  this.reset(); //Con esto cuando agreguemos un nuevo elemento en la lista lo que hara es que borrara las palabras que estaban en el input
  message();
}

function createTask(value) {
  const newTask = document.createElement("li");
  newTask.textContent = value;
  //   newTask.classList.add("nueva-clase");
  // newTask.classList.add(value);

  // listContainer.appendChild(newTask); //Este metodo permite agregar un nodo hijo a un elemento de referencia, se agrega como ultimo nodo

  // listContainer.append(newTask, "Hola"); //Esto permite que agregemos mas de un nodo, solo que cuando agreguemos un elemento nuevo abajo se pondra la palabra o frase que este entre comillas solo que no se agregara como lista

  listContainer.prepend(newTask); //Para agregar el nodo primero en vez de que se vayan agregando uno abajo del otro se agregara uno arriba de otro
  // console.log(newTask);
  addEvents(newTask); //Le pasamos el elemento Li
}

function addEvents(element) {
  element.addEventListener("dblclick", function () {
    // eliminar
    // element.parentElement.removeChild(element); // Esto es para que el elemento padre elimine o remueva al elemento hijo  y la funcion es si le das doble click el saldra un alert de que se esta eliminando al dar aceptar este elemento se borrara, esta forma ya no es utilizada por lo cual queda descartado por la siguiente linea:
    element.remove();
    alert("Elemento eliminado");

    message(); // Llamamos a message porque ya con esto el estado del parrado de tareas por hacer cuando este vacio cambiara a no hay tareas por hacer
  });
}

// Haciendo referencia a: InsertAdjacentHTML(), insertAdjacent(), cloneNode()

const wrapper = document.querySelector(".wrapper");

const copiaWrapper = wrapper.cloneNode(true); // Este elemento ya tiene por defecto true
// Si es true el nodo va a copiar a todos sus descendientes, si es false solo va a clonar al nodo principal que es la clase

wrapper.before(copiaWrapper); // Con esto ya se clono el elemento de wrapper, junto con todos sus elementos hijos

// console.log(copiaWrapper);

// const h2 = document.createElement("h2");
// h2.textContent = "Hola mundo";

// wrapper.insertAdjacentElement("beforeend", h2); // Este elemento wrapper que es un h2 se insertara hasta el ultimo

// wrapper.insertAdjacentHTML(
//   "beforebegin",
//   "<h1>Hola mundo, HTML creado con JS</h1> <button>Dame click</button>"
// ); // Este metodo inserta codigo html en un elemento dado en este caso wrapper, este metodo tiene dos parametros
// cuidado con este metodo porque pueden agregar codigo malicioso a tu codigo

/*

- 'beforebegin' <- El HTML se inserta antes del elemento de referencia, como el hermano anterior.

- 'afterbegin' <- El HTML se inserta como primer hijo del elemento.

- 'beforeend'  <- El HTML se inserta como ultijmo hijo del elemento.

- 'afterend'   <- El HTML se inserta despues del elemento de referencia, como hermano siguiente
 




*/
