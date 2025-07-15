function mostrarInfo(array){
   array.forEach(element => {
      const imgNombre = 'img' + element.id;
      const imgPato = document.getElementById(imgNombre);
      imgPato.src = element.imagen;

      const nombrePato = 'nombre' + element.id;
      const patoNombre = document.getElementById(nombrePato);
      patoNombre.textContent = element.nombre;

      const precioNombre = 'precio' + element.id;
      const precioPato = document.getElementById(precioNombre);
      precioPato.textContent = `${element.precio} €`;
   });

};

mostrarInfo(patos);






/* 1. cambiar text desde javascript
//write directly to html
const title = document.getElementById("hola");
title.textContent = "hola soy freddie";

const precioFreddie = document.getElementById("precioFreddie");
precioFreddie.textContent = 8.99;

*/

/*2. cambiar text desde javascript y extraer de BD
const hola = document.getElementById("hola");
hola.textContent = patos[0].nombre;

const precioFreddie = document.getElementById("precioFreddie");
precioFreddie.textContent = patos[0].precio;

   //get images from DB
const img = document.getElementById("imgfreddie");
img.src = patos[0].imagen;
*/


/*
//paso: 3 | usar function

const imgFreddie = document.getElementById('imgFreddie');
const nomFreddie =  document.getElementById('nomFreddie');
const precioFreddie = document.getElementById('precioFreddie');


function imprimirPatos(array, numero){
     const ducksInfo = array[numero];

     imgFreddie.src = ducksInfo.imagen;
     nomFreddie.textContent = ducksInfo.nombre;
     precioFreddie.textContent = ducksInfo.precio;

}

imprimirPatos(patos,3 );
*/

/*
function ducksName(array, nombre){
   const getName = document.querySelector('nombre')
   array.(forEachelement => {
      
   });
}

*/
/*
function imprimirInfo(array){
   const ducksInfo = array;

   ducksInfo.forEach(element => {
      xxxx.src = element.imagen;
      xxxx.textContent = element.nombre;
      xxxx.textContent = element.precio;
      
   });
}
*/






