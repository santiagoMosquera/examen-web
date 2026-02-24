//Alumno : Dennis Sanchez
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



// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}

function pintarListaVendedores() {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    html += `<li>${vendedores[i].cedula} | ${vendedores[i].nombre} | ventas: ${vendedores[i].ventas}</li>`;
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
  total = calcularTotalVentas();
  mostrarHtmlEnDiv("totalVentas", `Total ventas: ${total}`);
  mostrarHtmlEnDiv("contadorVendedores", `Cantidad: ${vendedores.length}`);
}

function pintarListaVendedoresVIP() {
  let html = "<ul class='list'>";
  for (let j = 0; j < vendedoresVIP.length; j++) {
    html += `<li>${vendedoresVIP[j].nombre} >> nivel: ${vendedoresVIP[j].nivel}</li>`;
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorDerecha", html);
}

function agregarVendedor(vendedor) {
  vendedores.push(vendedor);
}

function agregarVendedorAction() {
  cedula = recuperarEntero("txtCedula");
  nombre = recuperarTexto("txtNombre");
  apellido = recuperarTexto("txtApellido");
  ventas = recuperarEntero("txtVentas");
  let vendedor = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    ventas: ventas
  }
  agregarVendedor(vendedor);
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}

function buscarVendedor(cedula) {
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula == cedula) {
      habilitarComponente("btnMover");
      return i;
    }
  }
  return -1;
}

function buscarVendedorAction() {
  cedula = recuperarEntero("txtBuscarCedula");
  posicion = buscarVendedor(cedula);
  if (posicion == -1) {
    mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor a dicho que la cedula no existe");
  } else {
    let vendedor = vendedores[posicion];
    mostrarHtmlEnDiv("resultadoBusqueda", `${vendedor.nombre} ${vendedor.apellido}`);
  }
}

function moverAction() {
  cedula = recuperarEntero("txtBuscarCedula");
  posicion = buscarVendedor(cedula);
  if (posicion == -1) {
    mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
  } else {
    vendedor = vendedores[posicion];
    nivel = calcularNivel(vendedor.ventas);
    vendedor.nivel = nivel;
    vendedoresVIP.push(vendedor);
    vendedores.splice(posicion, 1);
    pintarListaVendedores();
    pintarListaVendedoresVIP();
  }
}

function calcularNivel(ventas) {
  if (ventas >= 10 && ventas <= 12) {
    return "bronce";
  } else if (ventas >= 13 && ventas <= 15) {
    return "plata";
  } else if (ventas > 15) {
    return "oro";
  }
}

function calcularTotalVentas() {
  let total = 0;
  for (let i = 0; i < vendedores.length; i++) {
    total += vendedores[i].ventas;
  }
  return total;
}