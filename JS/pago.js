let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

const params = new URLSearchParams(window.location.search);
const idPato = parseInt(params.get("id"));
const cantidadPatos = parseInt(params.get("cantidad"));

const nuevoPato = patos.find((p) => p.id === idPato);
const patoEnCarrito = carrito.find((p) => p.id === idPato);

if (nuevoPato && !patoEnCarrito) {
  carrito.push({
    id: nuevoPato.id,
    nombre: nuevoPato.nombre,
    imagen: nuevoPato.imagen,
    precio: nuevoPato.precio,
    cantidad: cantidadPatos,
  });

  sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderCarrito() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  carrito.forEach((pato) => {
    const div = document.createElement("div");
    div.className = "item";
    div.id = `item${pato.id}`;

    div.innerHTML = `
    <img class="item-img" src="${pato.imagen}" alt="Pato de Goma ${
      pato.nombre
    }" />
    <div class="item-details">
        <p class="item-name">${pato.nombre}</p>
    </div>
    <p class="item-price">${Number(pato.precio).toFixed(2)} €</p>
    <div class="quantity-control">
        <button onclick="decrementar(${pato.id}, ${pato.precio})">-</button>
        <input type="number" id="cantidad${
          pato.id
        }" class="quantity-input" value="${pato.cantidad}" />
        <button onclick="incrementar(${pato.id}, ${pato.precio})">+</button>
    </div>
    <p class="item-total" id="total${pato.id}">${(
      pato.precio * pato.cantidad
    ).toFixed(2)} €</p>
    <button class="delete-btn" onclick="deleteProduct(${pato.id})">🗑️</button>
    <hr />
    `;

    container.appendChild(div);
  });

  actualizarTotalGeneral();
}

renderCarrito();

function incrementar(id, precio) {
  let cantidadInput = document.getElementById(`cantidad${id}`);
  let total = document.getElementById(`total${id}`);

  if (cantidadInput) {
    let nuevaCantidad = parseInt(cantidadInput.value) + 1;
    cantidadInput.value = nuevaCantidad;
    total.textContent = (nuevaCantidad * precio).toFixed(2) + " €";
    actualizarTotalGeneral();
  }
}

function decrementar(id, precio) {
  let cantidadInput = document.getElementById(`cantidad${id}`);
  let total = document.getElementById(`total${id}`);

  if (cantidadInput && parseInt(cantidadInput.value) > 1) {
    let nuevaCantidad = parseInt(cantidadInput.value) - 1;
    cantidadInput.value = nuevaCantidad;
    total.textContent = (nuevaCantidad * precio).toFixed(2) + " €";
    actualizarTotalGeneral();
  }
}

function actualizarTotalGeneral() {
  let total = 0;

  carrito.forEach((pato) => {
    const cantidadInput = document.getElementById(`cantidad${pato.id}`);
    if (cantidadInput) {
      const cantidad = parseInt(cantidadInput.value);
      total += cantidad * pato.precio;
    }
  });

  const totalGeneralElement = document.getElementById("totalGeneral");
  totalGeneralElement.textContent = total.toFixed(2) + " €";
  const subTotalElement = document.getElementById("subtotal");
  subTotalElement.textContent = total.toFixed(2) + " €";
}

function deleteProduct(id) {
  carrito = carrito.filter((pato) => pato.id !== id);

  const itemElement = document.getElementById(`item${id}`);
  if (itemElement) {
    itemElement.remove();
  }

  actualizarTotalGeneral();
}
