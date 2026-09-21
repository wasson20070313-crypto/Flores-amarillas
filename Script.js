const inicio = document.getElementById("inicio");
const sorpresa = document.getElementById("sorpresa");
const historia = document.getElementById("historia-seccion");
const final = document.getElementById("final");

const abrir = document.getElementById("abrir");
const botonHistoria = document.getElementById("historia");
const botonAmor = document.getElementById("amor");
const volverSorpresa = document.getElementById("volver-sorpresa");

function mostrarPantalla(pantalla) {
    document.querySelectorAll(".pantalla").forEach(function(elemento) {
        elemento.classList.remove("activa");
    });

    pantalla.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

abrir.addEventListener("click", function() {
    mostrarPantalla(sorpresa);
});

botonHistoria.addEventListener("click", function() {
    mostrarPantalla(historia);
});

botonAmor.addEventListener("click", function() {
    mostrarPantalla(final);
});

volverSorpresa.addEventListener("click", function() {
    mostrarPantalla(sorpresa);
});
