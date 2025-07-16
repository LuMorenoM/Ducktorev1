const container = document.getElementById("productsContainer");

patos.forEach((pato) => {
  const div = document.createElement("div");
  div.className = "targetaProducto";
  div.setAttribute("id-targeta", pato.id);

  div.innerHTML = `
      <img src="${pato.imagen}" alt="Pato de goma ${pato.nombre}">
      <p>${pato.nombre}</p>
      <p>${pato.precio.toFixed(2)} €</p>
      <a href="detalles.html?id=${pato.id}">
         <button>Ver producto</button>
      </a> 
      `;
  container.appendChild(div);
});
