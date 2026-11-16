(function () {
  const host = document.createElement("aside");
  host.className = "panel";
  document.documentElement.appendChild(host);

  const acciones = (window.pasos && window.pasos.acciones) || [];
  host.innerHTML = `
    <a class="panel__volver" href="index.html">← DOM Lab</a>
    <h2 class="panel__titulo">${window.pasos ? window.pasos.titulo : ""}</h2>
    <p class="panel__ayuda">Cada botón ejecuta lo mismo que escribirías en la consola. El panel vive fuera del &lt;body&gt;, así que el body queda tal cual pide la consigna.</p>
    <div class="panel__acciones"></div>
    ${window.pasos && window.pasos.respuesta ? `<p class="panel__respuesta">${window.pasos.respuesta}</p>` : ""}
    <pre class="panel__salida" hidden></pre>
    <h3>Árbol del &lt;body&gt; en vivo</h3>
    <pre class="panel__arbol"></pre>`;

  const contenedor = host.querySelector(".panel__acciones");
  const salida = host.querySelector(".panel__salida");
  acciones.forEach((accion, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.innerHTML = `<span>${i + 1}</span><strong>${accion.texto}</strong><code></code>`;
    boton.querySelector("code").textContent = accion.codigo;
    boton.addEventListener("click", () => {
      const resultado = accion.correr();
      boton.classList.add("hecho");
      if (accion.mostrar && resultado) {
        salida.hidden = false;
        salida.textContent = Object.entries(resultado).map(([k, v]) => `> ${k}\n  ${JSON.stringify(v)}`).join("\n");
      }
    });
    contenedor.appendChild(boton);
  });

  const arbol = host.querySelector(".panel__arbol");
  function describir(nodo, nivel) {
    let lineas = [];
    nodo.childNodes.forEach((hijo) => {
      if (hijo.nodeType === 3) {
        const texto = hijo.textContent.trim();
        if (texto) lineas.push(`${"  ".repeat(nivel)}"${texto.length > 34 ? texto.slice(0, 34) + "…" : texto}"`);
        return;
      }
      if (hijo.nodeType !== 1 || hijo.tagName === "SCRIPT") return;
      const id = hijo.id ? `#${hijo.id}` : "";
      const clases = hijo.classList.length ? "." + [...hijo.classList].filter((c) => c !== "cambio").join(".") : "";
      lineas.push(`${"  ".repeat(nivel)}<${hijo.tagName.toLowerCase()}${id}${clases === "." ? "" : clases}>`);
      lineas = lineas.concat(describir(hijo, nivel + 1));
    });
    return lineas;
  }
  function actualizarArbol() {
    arbol.textContent = ["<body>", ...describir(document.body, 1)].join("\n");
    arbol.classList.remove("latido");
    void arbol.offsetWidth;
    arbol.classList.add("latido");
  }
  new MutationObserver(actualizarArbol).observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true, attributeFilter: ["class", "id"] });
  actualizarArbol();
})();
