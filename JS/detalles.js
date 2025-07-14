// Lista de patitos disponibles
const patitos = [
  {
    id: "1",
    nombre: "FREDDIE MERCURY",
    imagen: "../Imágenes/pato_0.jpg",
    precio: 8.80,
    descripcion: "Juguete de baño coleccionable de patito de goma. Todos nuestros patos pasan estrictos controles de toxicidad y seguridad. Están diseñados pensando en su uso seguro para la salud y el medio ambiente. Nuestros patos están libres de ftalatos, son reciclables, de tacto suave y perfectos para todas las edades."
  },
  {
    id: "2",
    nombre: "CÓDIGO BINARIO",
    imagen: "../Imágenes/pato_1.jpg",
    precio: 11.57,
    descripcion: "Juguete de baño coleccionable de patito de goma. Todos nuestros patos pasan estrictos controles de toxicidad y seguridad. Están diseñados pensando en su uso seguro para la salud y el medio ambiente.  Nuestros patos están libres de ftalatos, son reciclables, de tacto suave y perfectos para todas las edades."
},
  {
    id: "3",
    nombre: "UNICORNIO GLITTER",
    imagen: "../Imágenes/pato_2.jpg",
    precio: 6.25,
    descripcion: "Juguete de baño coleccionable de patito de goma. Todos nuestros patos pasan estrictos controles de toxicidad y seguridad. Están diseñados pensando en su uso seguro para la salud y el medio ambiente. Nuestros patos están libres de ftalatos, son reciclables, de tacto suave y perfectos para todas las edades."
}
];

// Obtener el ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Buscar el patito correspondiente
const pato = patitos.find(p => p.id === id);

// Si no existe, mostrar mensaje de error
if (!pato) {
  document.querySelector(".product-container").innerHTML = "<p>Patito no encontrado.</p>";
  throw new Error("Patito no encontrado");
}

// Mostrar la info en la página
document.getElementById("nombre").textContent = pato.nombre;
document.getElementById("imagenPrincipal").src = pato.imagen;
document.getElementById("precio").textContent = pato.precio.toFixed(2) + " €";
document.getElementById("descripcion").textContent = pato.descripcion;
document.getElementById("cantidad").value = 1;

// Funciones para incrementar y decrementar cantidad
function incrementar() {
  let cantidadInput = document.getElementById("cantidad");
  cantidadInput.value = parseInt(cantidadInput.value) + 1;
}

function decrementar() {
  let cantidadInput = document.getElementById("cantidad");
  if (parseInt(cantidadInput.value) > 1) {
    cantidadInput.value = parseInt(cantidadInput.value) - 1;
  }
}

// Añadir al carrito (simulado)
function anadirAlCarrito() {
  const cantidad = document.getElementById("cantidad").value;
  window.location.href = `pago.html?pato=${encodeURIComponent(pato.nombre)}&cantidad=${cantidad}`;
}
