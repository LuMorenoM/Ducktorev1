const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const pato = patos.find(p => p.id === id);

if (!pato) {
  document.querySelector(".product-container").innerHTML = "<p>Patito no encontrado.</p>";
} else {
  document.getElementById("nombre").textContent = pato.nombre;
  document.getElementById("imagenPrincipal").src = pato.imagen;
  document.getElementById("precio").textContent = pato.precio.toFixed(2) + " €";
  document.getElementById("descripcion").textContent = pato.descripcion;  
  document.getElementById("cantidad").value = 1;
}


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

function anadirAlCarrito() {
  const cantidad = document.getElementById("cantidad").value;
  window.location.href = `pago.html?id=${encodeURIComponent(pato.id)}&cantidad=${cantidad}`;
}

