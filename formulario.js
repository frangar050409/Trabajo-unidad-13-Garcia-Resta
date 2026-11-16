let formulario = document.createElement("form");
formulario.className = "form-js";

let labelNombre = document.createElement("label");
labelNombre.setAttribute("for", "nombre");
labelNombre.textContent = "Nombre y apellido";
let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.id = "nombre";
inputNombre.name = "nombre";
formulario.appendChild(labelNombre);
formulario.appendChild(inputNombre);

let labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.textContent = "E-mail";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.name = "email";
inputEmail.placeholder = "nombre@correo.com";
formulario.appendChild(labelEmail);
formulario.appendChild(inputEmail);

let grupoGenero = document.createElement("fieldset");
let leyenda = document.createElement("legend");
leyenda.textContent = "Género";
grupoGenero.appendChild(leyenda);
["Femenino", "Masculino", "No binario", "Prefiero no decirlo"].forEach(function (opcion, indice) {
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "genero";
  radio.value = opcion;
  radio.id = "genero" + indice;
  let etiqueta = document.createElement("label");
  etiqueta.setAttribute("for", radio.id);
  etiqueta.textContent = opcion;
  grupoGenero.appendChild(radio);
  grupoGenero.appendChild(etiqueta);
});
formulario.appendChild(grupoGenero);

let labelEdad = document.createElement("label");
labelEdad.setAttribute("for", "edad");
labelEdad.textContent = "Rango de edad";
let selectEdad = document.createElement("select");
selectEdad.id = "edad";
selectEdad.name = "edad";
["Menor a 18 años", "19-30", "31-45", "46-55", "Mayor a 56"].forEach(function (rango) {
  let opcion = document.createElement("option");
  opcion.value = rango;
  opcion.textContent = rango;
  selectEdad.appendChild(opcion);
});
formulario.appendChild(labelEdad);
formulario.appendChild(selectEdad);

let checkArgentino = document.createElement("input");
checkArgentino.type = "checkbox";
checkArgentino.id = "argentino";
checkArgentino.name = "argentino";
let labelArgentino = document.createElement("label");
labelArgentino.setAttribute("for", "argentino");
labelArgentino.textContent = "Soy argentino/a";
let filaCheck = document.createElement("div");
filaCheck.className = "fila-check";
filaCheck.appendChild(checkArgentino);
filaCheck.appendChild(labelArgentino);
formulario.appendChild(filaCheck);

document.body.appendChild(formulario);

function completarConMisDatos() {
  inputNombre.value = "Francisco García Resta";
  inputEmail.value = "francisco@correo.com";
  document.querySelector("#genero3").checked = true;
  selectEdad.value = "19-30";
  checkArgentino.checked = true;
}

function leerFormulario() {
  let generoElegido = document.querySelector('input[name="genero"]:checked');
  let datos = {
    nombreYApellido: inputNombre.value,
    email: inputEmail.value,
    genero: generoElegido ? generoElegido.value : "(sin elegir)",
    rangoDeEdad: selectEdad.value,
    esArgentino: checkArgentino.checked
  };
  console.log(datos.nombreYApellido);
  console.log(datos.email);
  console.log(datos.genero);
  console.log(datos.rangoDeEdad);
  console.log(datos.esArgentino);
  return datos;
}

window.pasos = {
  titulo: "Formulario e input",
  acciones: [
    { texto: "Completarlo con mis datos", codigo: 'inputNombre.value = "..."', correr: completarConMisDatos },
    { texto: "Leer los valores por consola", codigo: "console.log(inputNombre.value)", correr: leerFormulario, mostrar: true }
  ]
};
