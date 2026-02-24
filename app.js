// ==================================
// COMENTARIO PRUEBA ALEXANDRA MORENO
//===================================

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

agregarVendedor = function (vendedorNuevo) {
  vendedores.push(vendedorNuevo);
}

agregarVendedorAction = function () {

  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas");

  let vendedorNuevo = {};

  vendedorNuevo.cedula = cedula;
  vendedorNuevo.nombre = nombre;
  vendedorNuevo.apellido = apellido;
  vendedorNuevo.ventas = ventas;
  vendedorNuevo.nivel = "";

  agregarVendedor(vendedorNuevo);
  pintarListaVendedores();

  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtVentas", "");
}

buscarVendedor = function(cedulaBuscar) {

  let posicion = -1;

  for (let i = 0; i < vendedores.length; i++) {

    if (vendedores[i].cedula === cedulaBuscar) {
      posicion = i;
      break;
    }
  }

  return posicion;
}

buscarVendedorAction = function() {

  let cedulaBuscar = recuperarTexto("txtBuscarCedula");

  let posicion = buscarVendedor(cedulaBuscar);

  if (posicion === -1) {

    mostrarTextoEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
    deshabilitarComponente("btnMover");

  } else {

    let vendedorEncontrado = vendedores[posicion];

    let mensaje = vendedorEncontrado.nombre + " " + vendedorEncontrado.apellido;

    mostrarTextoEnDiv("resultadoBusqueda", mensaje);

    habilitarComponente("btnMover");
  }
}

moverAction = function() {

  let cedulaBuscar = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedulaBuscar);

  if (posicion === -1) {
    return;
  }

  let vendedorMover = vendedores[posicion];
  vendedoresVIP.push(vendedorMover);
  vendedores.splice(posicion, 1);

  pintarListaVendedores();
  pintarListaVendedoresVIP();

  mostrarTextoEnCaja("txtBuscarCedula", "");
  mostrarTextoEnDiv("resultadoBusqueda", "Sin búsqueda aún");
  deshabilitarComponente("btnMover");
}

pintarListaVendedores = function () {

  let listaVendedores = "<ul class='list'>";
  let totalVentas = 0;

  for (let i = 0; i < vendedores.length; i++) {

    listaVendedores = listaVendedores + "<li>";
    listaVendedores = listaVendedores + vendedores[i].cedula + " | ";
    listaVendedores = listaVendedores + vendedores[i].nombre + " ";
    listaVendedores = listaVendedores + vendedores[i].apellido + " | ventas: ";
    listaVendedores = listaVendedores + vendedores[i].ventas;
    listaVendedores = listaVendedores + "</li>";

    totalVentas = totalVentas + vendedores[i].ventas;
  }

  listaVendedores = listaVendedores + "</ul>";

  mostrarHtmlEnDiv("contenedorIzquierda", listaVendedores);
  mostrarTextoEnDiv("totalVentas", totalVentas);
  mostrarTextoEnDiv("contadorVendedores", vendedores.length);
}

pintarListaVendedoresVIP = function () {

  let listaVendedoresVIP = "<ul class='list'>";

  for (let i = 0; i < vendedoresVIP.length; i++) {

    listaVendedoresVIP = listaVendedoresVIP + "<li>";
    listaVendedoresVIP = listaVendedoresVIP + vendedoresVIP[i].nombre + " ";
    listaVendedoresVIP = listaVendedoresVIP + vendedoresVIP[i].apellido;
    listaVendedoresVIP = listaVendedoresVIP + " >> Nivel: ";
    listaVendedoresVIP = listaVendedoresVIP + vendedoresVIP[i].nivel;
    listaVendedoresVIP = listaVendedoresVIP + "</li>";
  }

  listaVendedoresVIP = listaVendedoresVIP + "</ul>";

  mostrarHtmlEnDiv("contenedorDerecha", listaVendedoresVIP);

  mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
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




