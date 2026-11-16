let source = document.querySelector("#source");
let destination = document.querySelector("#destination");

function intercambiar() {
  let textoSource = source.textContent;
  source.textContent = destination.textContent;
  destination.textContent = textoSource;
  source.classList.remove("cambio");
  destination.classList.remove("cambio");
  void source.offsetWidth;
  source.classList.add("cambio");
  destination.classList.add("cambio");
}

window.pasos = {
  titulo: "¡Shuffle!",
  acciones: [
    { texto: "Intercambiar el contenido", codigo: "source.textContent = destination.textContent", correr: intercambiar }
  ]
};
