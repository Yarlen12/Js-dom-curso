function agregarTarea() {
  //Obtenemos el valor del campo de la tarea
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value; // al utilizar value estamos utilizando el valor de mi input ya que estamos seleccionando el id

  //validamos que el valor no sea vacio
  if (nuevaTareaTexto === "") {
    // si nuevaTareaTexto es vacia, tendra una alerta con por favor ingrese una tarea
    alert("Por favor, ingrese una tarea");
    return;
  }

  //crear elemento en la lista LI

  let nuevaTarea = document.createElement("li"); // let nueva tarea va a crear un elemento del tipo li

  nuevaTarea.textContent = nuevaTareaTexto + " "; // text.content con ella obtenemos el valor de texto o asignamos el valor de texto de un elemento dentro del DOM

  //Crear boton eliminar

  let botonEliminar = document.createElement("button"); // Igual que arriba se crea un elemento de tipo button
  botonEliminar.textContent = "Eliminar"; // le agregamos un texto que es eliminar

  botonEliminar.onclick = function () {
    nuevaTarea.remove(); //Estamos dando la funcionalidad onclick con una funcion que remueve cualquier elemento del DOM en este caso la nuevaTarea
  };

  // Agregar boton de eliminar al elemento de la lista
  nuevaTarea.appendChild(botonEliminar); // Ya asociamos quien es el padre y quien es el hijo

  // Agregar el elemento/la tarea a la lista
  document.getElementById("listaTareas").appendChild(nuevaTarea); // Agrega el elemento nuevaTarea como último hijo del contenedor con id "listaTareas"

  // Limpiar el cuadro de texto del nombre de la tarea
  document.getElementById("nuevaTarea").value = "";
}
