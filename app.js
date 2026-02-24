//BRAYAN STEVEN NARVÁEZ AGUIRRE
// =========================
// Datos (arreglos)
// =========================
let vendedores = [
  { cedula: "1714616123", nombre: "Santiago", apellido: "Mosquera", ventas: 10, nivel: "" },
  { cedula: "1708934242", nombre: "Paúl", apellido: "Torres", ventas: 12, nivel: "" },
];

let vendedoresVIP = [
  { cedula: "0720304056", nombre: "Josselyn", apellido: "Pillajo", ventas: 17, nivel: "oro" },
  { cedula: "1945504089", nombre: "Alexandra", apellido: "Analuisa", ventas: 10, nivel: "bronce" },

];

inicializar = function () {
  pintarListaVendedores();
}

pintarListaVendedores = function () {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    html += "<li>" + vendedores[i].cedula + " | " + vendedores[i].nombre + " " + vendedores[i].apellido + " | ventas: " + vendedores[i].ventas + "</li>";
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
}



// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




