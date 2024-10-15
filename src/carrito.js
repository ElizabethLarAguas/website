const carrito = [];
const tasaIVA = 0.19; // 19%
const productos = [
  {
    id: 1,
    nombre: "Marcadores uniPOSCA",
    vendedor: "Elizabeth Lara",
    precio: 15000
  },
  {
    id: 2,
    nombre: "Juego De Pintura",
    vendedor: "Jisel Rojas",
    precio: 19000
  },
  {
    id: 3,
    nombre: "Juego De Pinceles",
    vendedor: "Juan Martinez",
    precio: 99900
  },
  {
    id: 4,
    nombre: "Paleta de pinturas",
    vendedor: "Jisel Rojas",
    precio: 99900
  },
  {
    id: 5,
    nombre: "Trípode",
    vendedor: "lizzy",
    precio: 45000
  },
  {
    id: 6,
    nombre: "Papel para Acuarela",
    vendedor: "jiseka",
    precio: 30000
  },
  {
    id: 7,
    nombre: "Lienzo para Pintura",
    vendedor: "mendez mendez",
    precio: 25000
  }
];

// Función para agregar un producto al carrito//
function agregarAlCarrito(productoId) {
  const cantidad = parseInt(
    //es para tomarlo como un numero entero//
    document.getElementById(`unidades${productoId}`).value
  );

  if (cantidad > 0) {
    //mayor//
    const producto = productos.find((p) => p.id === productoId);
    //"p" representa cada elemento del array y "productoId" es el valor que se esta buscando en la propiedad "id" de cada elemento.La función ".find()" devuelve el primer elemento que cumple con la condición especificada (en este caso, que el valor de "id" sea igual a "productoId"). Si no se encuentra ningún elemento que cumpla con la condición, se devuelve "undefined".//
    // se utiliza en programación para buscar un elemento específico en un array de objetos.//
    //ejemplo:Supongamos que tienes un array de productos con diferentes propiedades, y quieres encontrar el producto que tenga un id específico. Puedes usar el método ".find()" para buscar ese producto en el array.
    const item = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: cantidad
    };

    const carritoIndex = carrito.findIndex((item) => item.id === productoId); //para buscar el índice del elemento que cumple con la condición especificada. La condición es que el valor de la propiedad "id" del elemento sea igual a "productoId". El resultado se guarda en la variable "carritoIndex". Si no se encuentra ningún elemento que cumpla con la condición, el valor de "carritoIndex" será -1.//
    if (carritoIndex !== -1) {
      //verifica si el valor de "carritoIndex" es diferente de -1, lo que significa que se encontró un elemento en el array "carrito" que cumple con la condición especificada.//
      carrito[carritoIndex].cantidad += cantidad; // Si la condición anterior se cumple, esta línea de código incrementa la propiedad "cantidad" del elemento encontrado en el array "carrito" por el valor de "cantidad".//
    } else {
      carrito.push(item); //agregar un elemento al final de un array.//
    }

    mostrarCarrito();
  } else {
    alert("Debes ingresar una cantidad válida.");
  }
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  //utiliza el método "getElementById()" para seleccionar un elemento del DOM (Documento Object Model) con el id "carrito-items". Esto significa que se está buscando un elemento HTML con el id especificado y se está guardando en la variable "carritoItems".//
  carritoItems.innerHTML = "";
  // "innerHTML" se utiliza para acceder o modificar el contenido HTML dentro del elemento//

  let totalPrecio = 0;

  carrito.forEach((item) => {
    //recorre cada elemento del array "carrito"//
    const itemPrecio = item.precio * item.cantidad;
    totalPrecio += itemPrecio;
    //se realiza una operación para calcular el precio total de cada elemento del carrito. Se multiplica el valor de la propiedad "precio" del elemento por el valor de la propiedad "cantidad" del elemento y se guarda en la variable "itemPrecio".//
    const itemHTML = `
            <div class="carrito-item">
                <p>${item.nombre} - ${item.cantidad} unidades</p>
                <p>Precio: $${itemPrecio}</p>
            </div>
        `;

    carritoItems.innerHTML += itemHTML;
  });

  document.getElementById("total-precio").textContent = `$${totalPrecio}`;

  let totalIVA = 0; // Variable para almacenar el monto del IVA

  carrito.forEach((item) => {
    const itemPrecio = item.precio * item.cantidad;
    totalPrecio += itemPrecio;

    // Calcula el IVA para este item y agrégalo al total de IVA
    totalIVA += itemPrecio * tasaIVA;
    //totalIVA Se crea la variable para que el item precio sea igual y se alamacene en este
    //el cual al almacenarlo multiplicamos tasaIva y nos da el valor.
  });

  document.getElementById("total-precio").textContent = `$${totalPrecio}`;
  document.getElementById("iva").textContent = `IVA: $${totalIVA.toFixed(2)}`; // toFixed Muestra el IVA con dos decimales
}
//Con textContent solo modificas el contenido en texto,modifica la parte del contenido//
//agregar los ceros o disminuirlos al iva//

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito.length = 0; // Vacía el array del carrito//// length indica el número de argumentos que una función requiere//
  mostrarCarrito(); // Actualiza la vista del carrito
}

/* Asignar manejadores de eventos,onload se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado,
window Sirve para proporcionar acceso a muchas funcionalidades y propiedades relacionadas con la ventana del navegador y la 
ejecución del código en un entorno de navegador web*/
window.onload = function () {
  mostrarCarrito();
};
