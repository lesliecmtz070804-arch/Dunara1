/* =========================================================
   IMAGENES EN CARRUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    let index = 0;

    const images =
    document.querySelectorAll(".carousel img");

    function cambiarImagen() {

        images[index].classList.remove("active");

        index = (index + 1) % images.length;

        images[index].classList.add("active");

    }

    setInterval(cambiarImagen, 3000);


    /* =========================================================
       CARRUSELES DE CATEGORIAS
    ========================================================= */

    const carruseles =
    document.querySelectorAll(".contenedor-carrusel");

    carruseles.forEach(carrusel => {

        const galeria =
        carrusel.querySelector(".galeria2");

        const izquierda =
        carrusel.querySelector(".izquierda");

        const derecha =
        carrusel.querySelector(".derecha");


        derecha.addEventListener("click", () => {

            galeria.scrollBy({
                left: 320,
                behavior: "smooth"
            });

        });


        izquierda.addEventListener("click", () => {

            galeria.scrollBy({
                left: -320,
                behavior: "smooth"
            });

        });

    });

});


/* =========================================================
   MENU DESPLEGABLE
========================================================= */

function toggleMenu(e) {

    e.stopPropagation();

    document
    .getElementById("menu")
    .classList.toggle("active");

}


document.addEventListener("click", function () {

    document
    .getElementById("menu")
    .classList.remove("active");

});