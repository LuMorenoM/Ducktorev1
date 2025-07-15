const imgFreddie = document.getElementById('imgFreddie');
const nomFreddie =  document.getElementById('nomFreddie');
const precioFreddie = document.getElementById('precioFreddie');

function imprimirPatos(array, numero){
     const ducksInfo = array[numero];
    array.forEach(patos=> {
        
    });
     console.log(ducksInfo);



     imgFreddie.src = ducksInfo.imagen;
     nomFreddie.textContent = ducksInfo.nombre;
     precioFreddie.textContent = ducksInfo.precio;

}

imprimirPatos(patos,3 );

    