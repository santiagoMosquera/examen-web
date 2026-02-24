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
  pintarListaVendedoresVIP();
}

pintarListaVendedores = function() {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    html += "<li>" + vendedores[i].cedula + " | " + vendedores[i].nombre + " " + vendedores[i].apellido + " | ventas: " + vendedores[i].ventas + "</li>";
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
  let total = calcularTotalVentas();
  mostrarTextoEnDiv("totalVentas", total);
}

pintarListaVendedoresVIP = function() {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedoresVIP.length; i++) {
    html += "<li>" + vendedoresVIP[i].nombre + " " + vendedoresVIP[i].apellido + " >> nivel: " + vendedoresVIP[i].nivel + "</li>";
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorDerecha", html);
}

agregarVendedor = function(vendedor) {
  vendedores.push(vendedor);
}

agregarVendedorAction = function() {
  let cedula   = recuperarTexto("txtCedula");
  let nombre   = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas   = recuperarEntero("txtVentas");

  let vendedor = {};
  vendedor.cedula   = cedula;
  vendedor.nombre   = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas   = ventas;
  vendedor.nivel    = "";

  agregarVendedor(vendedor);
  pintarListaVendedores();
}

buscarVendedor = function(cedula) {
  let posicion = -1;
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula === cedula) {
      posicion = i;
    }
  }
  return posicion;
}

buscarVendedorAction = function() {
  let cedula = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedula);
  if (posicion === -1) {
    mostrarHtmlEnDiv("resultadoBusqueda", "<span class='muted'>El vendedor con dicha cédula no existe</span>");
    deshabilitarComponente("btnMover");
  } else {
    let v = vendedores[posicion];
    mostrarHtmlEnDiv("resultadoBusqueda", v.nombre + " " + v.apellido);
    habilitarComponente("btnMover");
  }
}

moverAction = function() {
  let cedula = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedula);
  let vendedor = vendedores[posicion];
  let nivel = calcularNivel(vendedor.ventas);
  vendedor.nivel = nivel;
  vendedoresVIP.push(vendedor);
  vendedores.splice(posicion, 1);
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}

calcularNivel = function(ventas) {
  let nivel = "";
  if (ventas >= 10 && ventas <= 12) {
    nivel = "bronce";
  } else if (ventas >= 13 && ventas <= 15) {
    nivel = "plata";
  } else if (ventas > 15) {
    nivel = "oro";
  }
  return nivel;
}

calcularTotalVentas = function() {
  let total = 0;
  for (let i = 0; i < vendedores.length; i++) {
    total = total + vendedores[i].ventas;
  }
  return total;
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




