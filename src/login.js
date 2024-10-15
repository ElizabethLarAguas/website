document.addEventListener("DOMContentLoaded", function () {
  //DOMContentLoaded  conocer el momento en el que todos los elementos del DOM
  //están cargados.
  const formulario = document.getElementsByTagName("form")[0]; //nombre de la etiqueta,todos h1,accede a todas las etiquetas
  const mensajeError = document.getElementById("mensajeError"); //CONTAINER
  const usuarioInput = document.getElementsByName("name")[0];

  //
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); //cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá

    //
    const usuario = usuarioInput.value;

    // Realiza una validación de usuario (aquí puedes implementar tu lógica)
    if (usuario === "usuario123") {
      // Usuario válido, redirige a la página deseada
      //window Sirve para proporcionar acceso a muchas funcionalidades y propiedades relacionadas con la ventana del navegador
      window.location.href = "pagina_destino.html"; //es una propiedad que nos permite interactuar con el navegador
    } else {
      // Usuario no válido, muestra el mensaje de error
      mensajeError.style.display = "block"; //sirve para bloquearlo qué atributo se utiliza.
      //se muestre en la página como un bloque en línea
    }
  });
});
