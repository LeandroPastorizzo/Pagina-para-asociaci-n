// menu desplegable

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click" , function (){
    menu.classList.toggle("mostrar")
})

//submenu desplegable

const submenuBtn = document.querySelectorAll(".submenu-btn");
for (let i=0; i < submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;
            
            if (submenu.classList.contains("desplegar")) {
                submenu.classList.remove("desplegar");
                submenu.removeAttribute("style");                

            }else{
                submenu.classList.add("desplegar");
            submenu.style.height = height + "px"
            }

        }
    })
}


// respuestas

// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todas las preguntas
    const preguntas = document.querySelectorAll(".contenedor-consultas > div[class^='contenedor-pregunta']");

    // Agregar un controlador de clic a cada pregunta
    preguntas.forEach(function (pregunta) {
        const titulo = pregunta.querySelector("h4");
        const respuesta = pregunta.querySelector(".respuesta");

        titulo.addEventListener("click", function () {
            respuesta.classList.toggle("visible");
        });
    });
});





