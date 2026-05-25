   /* IMAGENES EN CARUSEL */
   

    /* MENU DESPLEGABLE */
function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});