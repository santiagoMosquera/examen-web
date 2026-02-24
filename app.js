//alumno: Hancel Espin

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
  pintarListaVendedores()
  pintarListaVendedoresVIP()
}

// =========================
// Pintar lista
// =========================
function pintarListaVendedores() {

  let html = "<ul class='list'>";

  for (let i = 0; i < vendedores.length; i++) {
    let v = vendedores[i];

    html += "<li>"
      + v.cedula + " | "
      + v.nombre + " " + v.apellido
      + " | ventas: " + v.ventas
      + "</li>";
  }

  html += "</ul>";

  mostrarHtmlEnDiv("contenedorIzquierda", html);
  document.getElementById("contadorVendedores").innerHTML = vendedores.length;
}

// =========================
// Pintar listaVIP
// =========================

function pintarListaVendedoresVIP() {

  let html = "vendedores vip :";
  html += "<ul class='list'>";

  for (let i = 0; i < vendedoresVIP.length; i++) {
    let v = vendedoresVIP[i];

    html += "<li>"
      + v.nombre + " " + v.apellido
      + " >> nivel: " + v.nivel
      + "</li>";
  }

  html += "</ul>";

  mostrarHtmlEnDiv("contenedorDerecha", html);
  document.getElementById("contadorVendedoresVIP").innerHTML = vendedoresVIP.length;
}

// =========================
// agregar Vendedor y Vendedor de Accion
// =========================

function agregarVendedor(vendedor) {
  vendedores.push(vendedor);
}

function agregarVendedorAction() {


  let cedula = document.getElementById("txtCedula").value;
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let ventas = parseInt(document.getElementById("txtVentas").value);

  let posicion = buscarVendedor(cedula);

  if (posicion != -1) {
    alert("Ya existe el vendedor, no se puede agregar");
    return;
  }

  let vendedor = {};
  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;
  vendedor.nivel = "";

  agregarVendedor(vendedor);

  pintarListaVendedores();

  limpiar()
}

// =========================
// Búsqueda / movimiento
// =========================


function buscarVendedor(cedula) {

  let posicion = -1;

  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula == cedula) {
      posicion = i;
      break;
    }
  }

  return posicion;
}


function buscarVendedorAction() {

  let cedulaBuscar = document.getElementById("txtBuscarCedula").value;
  let posicion = buscarVendedor(cedulaBuscar);

  if (posicion == -1) {

    mostrarHtmlEnDiv("resultadoBusqueda",
      "El vendedor con dicha cédula no existe");

    deshabilitarComponente("btnMover");

  } else {

    let vendedor = vendedores[posicion];

    mostrarHtmlEnDiv("resultadoBusqueda",
      vendedor.nombre + " " + vendedor.apellido);

    habilitarComponente("btnMover");
  }
}


function moverAction() {

  let cedulaBuscar = document.getElementById("txtBuscarCedula").value;
  let posicion = buscarVendedor(cedulaBuscar);


  if (posicion == -1) {
    return;
  }
  let vendedor = vendedores[posicion];


  // agregamos la funcion calcuar nuvvel
  let nivelCalculado = calcularNivel(vendedor.ventas);
  vendedor.nivel = nivelCalculado;

  vendedoresVIP.push(vendedor);

  vendedores.splice(posicion, 1);

  pintarListaVendedores();
  pintarListaVendedoresVIP();

  document.getElementById("btnMover").disabled = true;
}


// =========================
// Calcula nivel
// =========================


function calcularNivel(ventas) {

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

function limpiar() {
  document.getElementById("txtCedula").value = "";
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApellido").value = "";
  document.getElementById("txtVentas").value = "";
}



function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




