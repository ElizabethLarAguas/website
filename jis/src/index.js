// Seleccionar los botones de color
var colorButton1 = document.getElementById("color-button1");
var colorButton2 = document.getElementById("color-button2");
var colorButton3 = document.getElementById("color-button3");
var colorButton4 = document.getElementById("color-button4");

// Seleccionar el header
var header = document.querySelector("header");

// Funciones para cambiar el color del header
function cambiarColorRojo() {
  header.style.backgroundColor = "red";
}

function cambiarColorAzul() {
  header.style.backgroundColor = "blue";
}

function cambiarColorVerde() {
  header.style.backgroundColor = "green";
}

function cambiarColorNaranja() {
  header.style.backgroundColor = "orange";
}

// Agregar event listeners a los botones de color
colorButton1.addEventListener("click", cambiarColorRojo);
colorButton2.addEventListener("click", cambiarColorAzul);
colorButton3.addEventListener("click", cambiarColorVerde);
colorButton4.addEventListener("click", cambiarColorNaranja);
