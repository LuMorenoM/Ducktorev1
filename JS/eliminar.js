
function deleteproduct(product) {
    const elemento = document.getElementById(product)
    if (elemento) {
        elemento.remove();
    } else {
        console.warm("Elemento con ID '${product}' no encontrado.");
    }
}