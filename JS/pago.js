let carrito = [
    {
      id: 1,
      nombre: "FREDDIE MERCURY",
      imagen: "../Imágenes/pato-goma-freddie-1.jpg",
      precio: 8.80,
      cantidad: 2
    },
    {
      id: 6,
      nombre: "NUBES",
      imagen: "/Imágenes/pato_5.jpg",
      precio: 10.25,
      cantidad: 1
    }
  ]
  
  const container = document.getElementById("cartItems")
  
  function renderCarrito() {
    container.innerHTML = ""
  
    carrito.forEach(pato => {
      const div = document.createElement("div")
      div.className = "item"
      div.id = `item${pato.id}`
  
      div.innerHTML = `
        <img class="item-img" src="${pato.imagen}" alt="Pato de Goma ${pato.nombre}" />
        <div class="item-details">
          <p class="item-name">${pato.nombre}</p>
        </div>
        <p class="item-price">${Number(pato.precio).toFixed(2)} €</p>
        <div class="quantity-control">
          <button onclick="decrementar(${pato.id}, ${pato.precio})">-</button>
          <input type="number" id="cantidad${pato.id}" class="quantity-input" value="${pato.cantidad}" />
          <button onclick="incrementar(${pato.id}, ${pato.precio})">+</button>
        </div>
        <p class="item-total" id="total${pato.id}">${(pato.precio * pato.cantidad).toFixed(2)} €</p>
        <button class="delete-btn" onclick="deleteProduct(${pato.id})">🗑️</button>
        <hr />
      `;
  
      container.appendChild(div)
    });
  
    actualizarTotalGeneral()
  }
  
  function incrementar(id, precio) {
    let cantidadInput = document.getElementById(`cantidad${id}`)
    let total = document.getElementById(`total${id}`)
  
    if (cantidadInput) {
      let nuevaCantidad = parseInt(cantidadInput.value) + 1
      cantidadInput.value = nuevaCantidad
      total.textContent = (nuevaCantidad * precio).toFixed(2) + " €"
      actualizarTotalGeneral()
    }
  }
  
  function decrementar(id, precio) {
    let cantidadInput = document.getElementById(`cantidad${id}`)
    let total = document.getElementById(`total${id}`)
  
    if (cantidadInput && parseInt(cantidadInput.value) > 1) {
      let nuevaCantidad = parseInt(cantidadInput.value) - 1
      cantidadInput.value = nuevaCantidad;
      total.textContent = (nuevaCantidad * precio).toFixed(2) + " €"
      actualizarTotalGeneral()
    }
  }
  
  function actualizarTotalGeneral() {
    let total = 0
  
    carrito.forEach(pato => {
      const cantidadInput = document.getElementById(`cantidad${pato.id}`)
      if (cantidadInput) {
        const cantidad = parseInt(cantidadInput.value)
        total += cantidad * pato.precio
      }
    })
  
    const totalGeneralElement = document.getElementById("totalGeneral")
    if (totalGeneralElement) {
      totalGeneralElement.textContent = total.toFixed(2) + " €"
    }
  }
  
  function deleteProduct(id) {
 
    carrito = carrito.filter(pato => pato.id !== id)
  
    const itemElement = document.getElementById(`item${id}`)
    if (itemElement) {
      itemElement.remove()
    }
  
    actualizarTotalGeneral()
  }
  
  renderCarrito()
  