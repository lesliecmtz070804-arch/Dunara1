/* MENU DESPLEGABLE */

function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});


/* =========================================================
   ACORDEON
========================================================= */

const botones =
document.querySelectorAll(".titulo-acordeon");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const contenido =
        boton.nextElementSibling;

        if(contenido.style.maxHeight){

            contenido.style.maxHeight = null;

        } else {

            contenido.style.maxHeight =
            contenido.scrollHeight + "px";
        }

    });

});