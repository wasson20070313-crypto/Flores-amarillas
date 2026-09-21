const inicio = document.getElementById("inicio");
const sorpresa = document.getElementById("sorpresa");
const historia = document.getElementById("historia-seccion");
const final = document.getElementById("final");

const botonAbrir = document.getElementById("abrir");
const botonHistoria = document.getElementById("historia");
const botonAmor = document.getElementById("amor");

const respuesta = document.getElementById("respuesta");

let contador = 0;

botonAbrir.addEventListener("click", () => {
  inicio.style.display = "none";
  sorpresa.classList.remove("oculta");
  lanzarPetalos();
});

botonHistoria.addEventListener("click", () => {
  sorpresa.style.display = "none";
  historia.classList.remove("oculta");
});

botonAmor.addEventListener("click", () => {
  contador++;

  if (contador === 1) {
    respuesta.textContent = "muchísimo 💛";
  } else if (contador === 2) {
    respuesta.textContent = "más de lo que imaginas 🌻";
  } else if (contador === 3) {
    respuesta.textContent = "demasiado para explicarlo con palabras ❤️";
  } else if (contador === 4) {
    respuesta.textContent = "y todavía me quedo corto 🥹💛";
  } else {
    historia.style.display = "none";
    final.classList.remove("oculta");
    lanzarPetalos();
  }
});

function lanzarPetalos() {
  const contenedor = document.getElementById("petalos");

  for (let i = 0; i < 35; i++) {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");
    petalo.textContent = Math.random() > 0.5 ? "🌻" : "🌼";
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.fontSize = 15 + Math.random() * 20 + "px";
    petalo.style.animationDuration = 3 + Math.random() * 4 + "s";
    petalo.style.animationDelay = Math.random() * 2 + "s";
    contenedor.appendChild(petalo);

    setTimeout(() => {
      petalo.remove();
    }, 8000);
  }
}
