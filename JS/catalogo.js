const container = document.getElementById("productsContainer")

patos.forEach(pato => {
   const div = document.createElement("div");

   div.innerHTML = `
      <img src="${pato.imagen}" alt="Pato de goma ${pato.nombre}">
      <p>${pato.nombre}</p>
      <p>${Number(pato.precio).toFixed(2)} €</p>
      <a href="detalles.html?id=${pato.id}">
         <button ${pato.existencias === 0 ? 'disable': ''}>${pato.existencias === 0 ? 'Agotado' : 'Ver producto'}</button>
      </a> 
      `
   container.appendChild(div)
})





