// const title = document.querySelector(".title");
// const inputColor = document.querySelector('[type="color"]');
// const inputRange = document.querySelector('[type="range"]');

// // Style: la propiedad style es un objeto el cual nosotros podemos obtener un estilo o determinarlo

// // console.log(title.style.color); //contiene todas las propiedades existentes que tengas css (la propiedad mas .style)
// // El font-size se escribe aqui como fontSize, todo pegado y la segunda palabra debe de empezar con mayusculas
// document.documentElement.style.setProperty("--color-title", "hotpink"); //custom property

// title.style.fontFamily = "cursive"; // con esto ya el estilo del titulo se pone en mayusculas
// title.style.color = "var(--color-title)";
// title.style.fontSize = "4rem";

// title.style.removeProperty("font-family"); //deberia de remover el font-family
// title.style.color = ""; //Una forma de eliminar el color es dejarlo vacio
// title.style.removeProperty("font-size");
// title.setAttribute("style", ""); //Otra forma de quitar todos los estilos en linea seria este ya que los dejaremos vacios

// console.log(title);

// console.log(title.style.color);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// setProperty(), getPropertyValue(), getPropertyPriority()

const title = document.querySelector(".title");
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');

title.style.fontFamily = "cursive";

const estilosTitle = getComputedStyle(title, "::after"); //El segundo valor es para los pseudoelemento

console.log(estilosTitle.getPropertyValue("display"));

// console.log(estilosTitle.content);

// console.log(estilosTitle.color); //Me va a devolver el valor de color que tiene title

// console.log(getComputedStyle(title).background); //Me va a retornar un objeto con los valores o estilos finales

// console.log(title.style.fontFamily); //Para verificar el tipo de estilo de fuente que tiene la variable title, tambien se puede de diferente forma aunque es mas tedioso

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(title.style.getPropertyValue("font-family")); //Para ver el valor de la propiedad de los estilos de la  variable title, esto es mas para custom property

inputColor.addEventListener("change", function (e) {
  const newColor = e.target.value;

  title.style.color = newColor; //Cambiaria de color el estilo del titulo dependiendo del color que seleccionemos

  // console.log(newColor); //Con esto ya cambiara el color que seleccionemos y se veria reflejado en consola
});

inputRange.addEventListener("change", function (e) {
  const newFontSize = e.target.value; //Para conocer el valor de inputTarget

  title.style.setProperty("font-size", newFontSize + "px", "important"); // Debermos agregar un px ya que como estaba solo la variable de newFontSize ya tenia un valor absoluto por lo cual no se aplicaba cuando cambiabamos de tamanio
  // Como ya hemos visto en cursos pasados el important es cuando tienes mas funciones, con el important tomara como prioridad a la funcion a la que se le asignemos
  console.log(title.style.getPropertyPriority("font-family")); //Esto nos mostrara si hay un important en una funcion, como este no tiene un important no saldra nada por consola
  console.log(title.style.getPropertyPriority("font-size")); //El font-size como si tiene un important si saldra en consola cuando elijamos un tamanio

  // La otra forma de cambiar el fontSize con la barra es :
  // title.style.fontSize = newFontSize + "px"; //Es casi lo mismo pero un poco mas simple y funcionan de la misma manera

  // console.log(newFontSize); //Con esto ya se deberia de ver por consola el numero de tamanio de que estamos poniendo en la barra
});
