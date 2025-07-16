const optionColor = document.querySelectorAll(".opcionColor");
const optionCategoria = document.querySelectorAll(".opcionCategoria");
const optionTamaño = document.querySelectorAll(".opcionTamaño");

const targetas = document.querySelectorAll(".targetaProducto");



function filter(filterOption, key){
    filterOption.forEach(option => {
        option.addEventListener("click", ()=>{
            const value = option.getAttribute(`data-${key}`);

            console.log(key, value);


            const buscaId = patos.filter(pato=> pato[key] === value)
                                 .map(pato => pato.id.toString());

            targetas.forEach(targeta => {
                const idTargeta = targeta.getAttribute("id-targeta");

                
                if(buscaId.includes(idTargeta)){
                    targeta.style.display = "inline-block";


                } else{
                    targeta.style.display = "none";
                }
            });
        });
        
    });
    

}

filter(optionColor, "color");
filter(optionCategoria, "categoria");
filter(optionTamaño, "tamaño");



/*
optionColor.forEach(opcion =>{
    opcion.addEventListener("click", ()=>{
        const colorEligido = opcion.getAttribute("data-color");
        console.log(colorEligido);

        const buscaId = patos.filter(pato => pato.color === colorEligido)
                             .map(pato => pato.id.toString());
        
        targetas.forEach(targeta => {
            const idTargeta = targeta.getAttribute("id-targeta");

            if(buscaId.includes(idTargeta)){
                targeta.style.display = "inline-block";

            } else{
                targeta.style.display = "none";
                
            }
        });


    });
});
*/
