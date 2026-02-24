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

pintarListaVendedores = function () {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    html += "<li>" + vendedores[i].cedula + " | "
      + vendedores[i].nombre + " "
      + vendedores[i].apellido
      + " | ventas: " + vendedores[i].ventas + "</li>";
  }
  html += "</ul>";

  mostrarHtmlEnDiv("contenedorIzquierda", html);
}

pintarListaVendedoresVIP = function () {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedoresVIP.length; i++) {
    html += "<li>" + vendedoresVIP[i].nombre + " "
      + vendedoresVIP[i].apellido
      + " >>nivel:" + vendedoresVIP[i].nivel + "</li>";
  }
  html += "</ul>";

  mostrarHtmlEnDiv("contenedorDerecha", html);
}

agregarVendedor = function (vendedor) {
  vendedores.push(vendedor);
}

agregarVendedorAction = function () {

  // a
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas");
  // b
  let vendedor = {};
  // c
  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;
  vendedor.nivel = "";
  // d
  agregarVendedor(vendedor);

  // e)
  pintarListaVendedores();

}

buscarVendedor = function (cedula) {
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula === cedula) {
      return i;
    }
  }
  return -1;
}

buscarVendedorAction = function () {

  let cedula = recuperarTexto("txtBuscarCedula");

  let posicion = buscarVendedor(cedula);
  let resultadoBusquedaEl = document.getElementById("resultadoBusqueda");

  if (posicion === -1) {
    resultadoBusquedaEl.innerHTML = "<span class='muted'>El vendedor con dicha cédula no existe</span>";

    deshabilitarComponente("btnMover");
  } else {
    let vendedor = vendedores[posicion];
    resultadoBusquedaEl.innerHTML = "<span class='muted'>" + vendedor.nombre + " " + vendedor.apellido + "</span>";

    habilitarComponente("btnMover");
  }
}

moverAction = function () {
  let cedula = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedula);

  if (posicion !== -1) {
    let vendedor = vendedores[posicion];

    let nivel = calcularNivel(vendedor.ventas);
    vendedor.nivel = nivel;

    vendedoresVIP.push(vendedor);

    vendedores.splice(posicion, 1);

    pintarListaVendedores();
    pintarListaVendedoresVIP();
  }
}

calcularTotalVentas = function() {
  let totalVentas = 0;
  for (let i = 0; i < vendedores.length; i++) {
    totalVentas += vendedores[i].ventas;
  }
  return totalVentas;
}


calcularNivel = function (ventas) {
  if (ventas >= 10 && ventas <= 12) {
    return "bronce";
  } else if (ventas >= 13 && ventas <= 15) {
    return "plata";
  } else if (ventas > 15) {
    return "oro";
  } else {
    return "";
  }
}



inicializar = function () {
  pintarListaVendedores();
  pintarListaVendedoresVIP();
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




