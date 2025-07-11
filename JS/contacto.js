document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContacto");
  
  
    form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensaje = document.getElementById("mensaje")?.value.trim();
  
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
  
    form.reset();
    alert("¡Mensaje enviado con éxito!");
    });
  });clear