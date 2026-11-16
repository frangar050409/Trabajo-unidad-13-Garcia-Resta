function cambiarTitulo() {
  document.querySelector("h1").textContent = "Cambié el título desde la consola";
}

function tituloAParrafo() {
  let titulo = document.querySelector("h1");
  let parrafo = document.createElement("p");
  parrafo.textContent = "Ahora soy un párrafo que reemplazó al título.";
  titulo.replaceWith(parrafo);
}

function agregarParrafo() {
  let nuevo = document.createElement("p");
  nuevo.textContent = "Y yo soy otro párrafo agregado con appendChild.";
  document.body.appendChild(nuevo);
}

window.pasos = {
  titulo: "Manipular texto y contenido",
  acciones: [
    { texto: "Cambiar el texto del título", codigo: 'document.querySelector("h1").textContent = "Cambié el título desde la consola"', correr: cambiarTitulo },
    { texto: "Cambiar el título por un párrafo", codigo: 'titulo.replaceWith(parrafo)', correr: tituloAParrafo },
    { texto: "Agregar otro párrafo al body", codigo: "document.body.appendChild(nuevo)", correr: agregarParrafo }
  ]
};
