const pato = {
    id: 1,
    nombre: "FREDDIE MERCURY",
    imagen: "../Imágenes/pato-goma-freddie-1.jpg",
    precio: 8.80,
    descripcion: "Juguete de baño coleccionable de patito de goma. Todos nuestros patos pasan estrictos controles de toxicidad y seguridad. Están diseñados pensando en su uso seguro para la salud y el medio ambiente. Nuestros patos están libres de ftalatos, son reciclables, de tacto suave y perfectos para todas las edades."
}

let nombreP = document.getElementById("nombre")
nombreP.textContent = pato.nombre

let imagenPrincipal = document.getElementById("imagenPrincipal")
imagenPrincipal.src = pato.imagen

let precioTxt = document.getElementById("precio")
precioTxt.textContent = pato.precio.toFixed(2)+ " €"

let descripcionTxt = document.getAnimations("descripcion")

let cantidadInput = document.getElementById("cantidad")
cantidadInput.value = 1

function incrementar() {
    let cantidadInput = document.getElementById("cantidad")

    let valorActual = parseInt(cantidadInput.value)
    let nuevoValor = valorActual + 1

    cantidadInput.value = nuevoValor
}

function decrementar() {
    let cantidadInput = document.getElementById("cantidad")

    let valorActual = parseInt(cantidadInput.value)
    
    if (valorActual > 1){
        let nuevoValor = valorActual -1
        cantidadInput.value = nuevoValor
    }
   
}

