let div = document.querySelector("div");
let intervalo = null;

function conStyle() {
  div.classList.remove("square");
  div.style.height = "200px";
  div.style.width = "200px";
  div.style.backgroundColor = "tomato";
}

function conClassList() {
  div.removeAttribute("style");
  div.classList.add("square");
  console.log(div.classList);
}

function sacarClase() {
  div.classList.remove("square");
}

function alternarCadaSegundo() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
    return;
  }
  intervalo = setInterval(function () {
    if (div.classList.contains("square")) {
      div.classList.remove("square");
    } else {
      div.classList.add("square");
    }
  }, 1000);
}

window.pasos = {
  titulo: "Manipular CSS",
  acciones: [
    { texto: "Darle estilo con la propiedad style", codigo: 'div.style.backgroundColor = "tomato"', correr: conStyle },
    { texto: "Usar classList.add(\"square\")", codigo: 'div.classList.add("square")', correr: conClassList },
    { texto: "Sacarle la clase .square", codigo: 'div.classList.remove("square")', correr: sacarClase },
    { texto: "Alternar la clase cada un segundo (encender / apagar)", codigo: "setInterval(..., 1000)", correr: alternarCadaSegundo }
  ],
  respuesta: "div.classList devuelve un DOMTokenList: una lista con las clases del elemento, por ejemplo DOMTokenList ['square']."
};
