//const body = document.body.childNodes; // si yo quiero acceder a los hijos de body o de otra etiqueta html, yo tengo la propiedad childNodes esta propiedad retorna una lista de nodos con todos los nodos hijos directos de un nodo padre que en este caso el nodo padre es body // los espacios son marcados como tipo texto

// const wrapper = document.body.childNodes[1];

// const wrapper = document.body.children; propiedad para que solo me de los nodos de tipo elemento de un padre

//const wrapper = document.body.firstChild; // me dara el primer nodo del padre basicamente es el primer hijo

//const wrapper = document.body.lastChild; // me dara el ultimo nodo del padre basicamente me dara el ultimo hijo

//const wrapper = document.body.lastElementChild; // esta propiedad va a retornar el ultimo nodo del padre solo que este nodo si o si va a ser de tipo elemento una etiqueta de html

//const wrapper = document.body.children[0]; //para obtener sus hijos y vamos a tomar la posicion 0

//const div = wrapper.children[1]; // estamos accediendo al hijo de wrapper en la posicion uno

//const h1 = div.previousElementSibling;

//const anchor = div.children[0];

//console.log(anchor.parentNode.parentNode.parentNode.parentNode); // para tener su nodo padre o ancestro, basicamente lo que aqui estamos haciendo es el padre, del padre, del padre, del padre, el primer padre es el div, el segundo padre es wrapper, el tercer padre es body y cuarto padre es html, basicamente el ultimo es todo el documento

// anchor.addEventListener(`click`, function () {
//   document.documentElement.style.backgroundColor = "black";
//   document.documentElement.style.color = "white";
//}); // Todo el documento se pone negro menos los a que son los primero, segundo y tercero y el texto del h1 se vuelve blanco

// anchor.addEventListener("click", function () {
//   h1.textContent = "Estoy siendo modificado por el DOM";
// }); // cambiar el titulo al hacer click

// h1.textContent = "Estoy siendo modificado desde el DOM ";

//console.log(div.previousElementSibling); // Retorna el nodo o hermano anterior de un nodo pero el nodo que va a retornar va a ser un nodo de tipo elemento

//console.log(div.previousSibling); // retorna el hermano anterior del nodo actual, este admite cualquier tipo

//console.log(div.nextElementSibling); // me retorna el hermano siguiente del nodo actual, pero este debe ser un nodo de tipo elemento, ya que solo retorna de este tipo

//console.log(div.nextSibling); // Me retorna el hermano siguiente del nodo actual
//console.log(wrapper.hasChildNodes()); // Este metodo me retorna verdadero si este contenedor tiene hijos
// console.log(wrapper);

//console.log(wrapper.childNodes); // si queremos saber los hijos del wrapper solo es poniendo el childNodes

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// GetElement y QuerySelector

//const wrapper = document.getElementById("wrapper"); // Va a obtener su elemento envase a su ID
// console.log(wrapper);

//const links = document.getElementsByClassName("link"); // esto es porque vamos a obtener una lista de elementos html que contengan el valor ingresado en el metodo dentro de su atributo class
//console.log(links); // me retorna 4 elementos que tengan la clase de link

//const links = wrapper.getElementsByClassName("link"); // Me mostrara todos los elementos de la clase link que este dentro del wrapper
//console.log(links);

//const divs = document.getElementsByTagName("div"); // Este metodo va a retornar una lista de elementos html con todos los nodos de tipo elemento que consida con la etiqueta especificada en el metodo, si no se encuentra coincidencias esta lista saldra vacia
//console.log(divs); // me va a salir una lista de todas las etiquetas de div

//const input = document.getElementsByName("telefono"); // Va a retornar una lista de nodos con todos los nodos html que contengan en su atributo name el valos especificado en el metodo
//console.log(input); // Me mostrara una lista de nodos que contengan la palabra telefono, en este caso la lista es de uno ya que el codigo solo tiene uno
// Los getElements Siempre son en la raiz me refiero al document. ya que de no hacerlo puede marcar un error

//const wrapper = document.querySelector(`#wrapper`); // funciona ingresando un selector de css y solamente va a retornar al primer elemento que coincida con el selector que ingresamos (podemos ingresar cualquier elemento)
//console.log(wrapper); // se buscara por el id de wrapper ya que le pusimos el # y nos mostrara el primer elemento que coincida con el selector

//const linkBold = document.querySelector(`.link.bold`);
//console.log(linkBold); // Y nos mostrara el primer elemento que coincida con .link.bold

//const linkBold = document.querySelector(`.link:last-of-type`); // quiero obtener el ultimo de su tipo
//console.log(linkBold); // y me mando al tercer hijo que es el ultimo elemento del link

//const linkBold = wrapper.querySelectorAll(`.link:last-of-type`);
//console.log(linkBold); // Nos va a seleccionar todos los ultimos .link de wrapper que en este caso seria el tercero y el cuarto

//const linkBold = document.querySelectorAll(`.link`); // Nos va a seleccionar todos los .link
//console.log(linkBold);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// HTMLCollection vs NodeList

// const linksHTML = document.getElementsByClassName("link");
// console.log(linksHTML);

// const linksNode = document.querySelectorAll(".link");
// const linksNode = Array.from(document.querySelectorAll(".link")); // para convertirlo en un array es de esta forma
// console.log(linksNode);

// linksNode.forEach((link) => {
//   console.log(link);
// }); //Deberia de retornarnos segundo, tercero y cuarto hijo, nota: el HTMLCollection no puede usar una lista forEach ya que marca un error

// const tagAnchor = document.createElement(`a`);
// tagAnchor.setAttribute(`class`, `link`);
// tagAnchor.textContent = "Hola mundo";
// document.body.append(tagAnchor); // Aqui creamos un nuevo elemento que dice hola mundo // Obtuvimos esta lista de nodos antes de agregar la etiqueta a y agregarla al body, la etiqueta htmlcollection si la toma, ya que la lista es un objeto vivo que se actualizaa si el dom cambia, una caracteristica es que no puedo usar el foreach

// ChildNodes: retorna una lista de nodos, esta lista de nodos si se actualiza

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// ClassName, nodeName, innerHTML, outerHTML, textContent

// Nota: todos los objetos son nodos por si se te olvida
const wrapper = document.querySelector(".wrapper");
const title = document.querySelector(".title");
const link = document.querySelector(".title.bold");
const inputNumber = document.querySelector(`[type = "number"]`);

// console.dir(wrapper); // console.dir es para mostrar todas las propiedades de un objeto

// console.log(wrapper.className); //Esto te muestra el nombre de la clase que tiene wrapper, ya sea que si tiene 3 o menos te los mostrara todos los nombres

// wrapper.className = "container"; // tambien es un metodo de escritura, si vemos en consola ya saldra que su nombre es container, pero esto no es buena idea si no queremos sobreescribir las clases anteriores

// console.log(link.href); // deberia de mostrar en consola la direccion que tiene link
// console.log(title.nodeName); //Va a retornar el nombre del nodo en el cual se llama a la propiedad, en este caso el nombre del nodo del title es H1

// console.log(wrapper.childNodes[0].nodeName); //Nos mostrara que es un nodo de tipo texto

// console.log(wrapper.innerHTML); // Va a retornar el html interno del nodo en el que es llamado, el innerhtml tambien sirve para sobreescribir

// wrapper.innerHTML = `
//     <h2>He sobreescrito el DOM</h2>
// `; // Ahora va a sobreescribir todo el html interno de wrapper

// wrapper.innerHTML = `
//     <img src="error" onerror="alert('Te han hackeado')"/>
// `; // Lo que hara esto es sobreescribir el html interrno del wrapper y ademas arrojara una alerta de te han hackeado

// wrapper.innerHTML += `
//     <h2>Html concatenado </h2>
// `; //Esto no es recomendado usar ya que toma muchos recursos del usuario, lo que hace como esta concatenado sigue cargando el html interno, pero abajo sobreescribe el h2 que agregamos

// wrapper.outerHTML = `
//     <h1>Nuevo HTML!!!!!!! </h1>

// `; // De igual forma sobreescribe todo y en consola de elements solo se ve un h1 donde antes estaba en wrapper

// console.log(wrapper.outerHTML); //Sigue referenciando al div anterior, no al nuevo, es una caracteristica del outerhtml, que aunque sobreescribas el html de un nodo, si lo guardaste previamente el html anterior se va a quedar guardado

// const h1 = document.querySelector("h1");
// console.log(h1); //en el innerhtml saldra el nuevo html!!

// textContent: va a apermitir visualizar el texto actual de un  nodo o reemplazarlo este metodo es ideal para agregar contenido nuevo que el usuario ingrese, ya que solo acepta texto no acepta etiquetas html

// console.log(title.textContent); // Solo me mostrara el texto que tiene el titulo que en este caso es DOM(Document Object Model)

// console.log(wrapper.textContent); //Me va a mostrar todos los textos que estan dentro del wrapper

// const textoUsuario = prompt("como te llamas?"); // Hara que salga como un tipo alerta arriba que dira como te llamas y hay una barra de string donde puedes escribir tu nombre
// title.textContent = `Hola, Bienvenido ${textoUsuario}`; //Ya enviado el nombre saldra en title hola bienvenido y tu nombre

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Temas:
//setAttribute(), hasAttribute(), getAttributte(), removeAttributte(), data

// console.dir(inputNumber); el console.dir muestra una lista de las propiedades del objeto

// console.dir(title.getAttribute("href")); // Nos permite obtener un atributo de un nodo de tipo elemento no importa que el atributo que yo especifique en el metodo no este enlistado en las propiedades del nodo, si no existe el atributo me va a arrojar null
// como en este caso el atributo si existe nos arroja el href de google que le asignamos
// console.dir(title.getAttribute("class")); // en este caso el atributo de class es titulo

// console.dir((title.id = "encabezado")); //Ahora el id de title sera encabezado

// console.dir(title.setAttribute("id", "encabezado")); // tiene dos parametros, el primero es el nombre del atributo que quieres poner o quieres sobreescribir, el segundo parametro es el valor que quieres ponerle al atributo
// en title ya quedo agregado el id con el valor de encabezado

// console.dir(title.setAttribute("src", "google.com")); //Ya se agrego en title es scr y su valor de google.com

const img = document.querySelector('[data-identificador="img"]');
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg";

img.setAttribute("alt", "spiderman genial"); // Con la linea de codigo de abajo su respuesta depende de este ya que si lo comentamos saldra false y si esta sin comentar dara true

img.removeAttribute("alt"); // De esta forma removemos el atributo de alt
console.log(img.hasAttribute("alt")); //Estamos preguntando que si img tiene el atributo alt, en este caso tiene que dar true ya que arriba lo agregamos
console.log(img.attributes); // Solo para ver los atributos de img

const figcaption = document.querySelector("img");
const textoMostrar = img.getAttribute("data-texto-mostrar"); //Vamos a obtener el atributo texto-mostrar
figcaption.textContent = img.dataset.textoMostrar; //Vamos a sobreescribir y se pondra el texto que tiene texto-mostrar en index que es Spiderman foto

//Dato: al utilizar data al principio de un atributo le decimos a html que ese atributo sera utilizado despues por javascrips
