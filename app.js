// Vinueza Pozo Gabriel Fernando
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

pintarListaVendedoresVIP = function () {
  let lista;
  lista = "<ul class='list'>"
  for (let i = 0; i < vendedoresVIP.length; i++) {
    let element = vendedoresVIP[i];
    lista += "<li>" + element.nombre + " " + element.apellido + " >> Nivel: " + element.nivel + "</li>";

  }
  lista += "</ul>"
  mostrarHtmlEnDiv("contenedorDerecha", lista);
}
pintarListaVendedores = function () {
  let lista;
  lista = "<ul class='list'>"
  for (let i = 0; i < vendedores.length; i++) {
    let element = vendedores[i];
    lista += "<li>" + element.cedula + " | " + element.nombre + " " + element.apellido + " | Ventas: " + element.ventas + "</li>";

  }
  lista += "</ul>"
  mostrarHtmlEnDiv("contenedorIzquierda", lista);
}
agregarVendedorAction = function () {
  let txtCedula = recuperarTexto("txtCedula");
  let txtNombre = recuperarTexto("txtNombre");
  let txtApellido = recuperarTexto("txtApellido");
  let txtVentas = recuperarEntero("txtVentas");
  let auxVendedor = {
    cedula: txtCedula,
    nombre: txtNombre,
    apellido: txtApellido,
    ventas: txtVentas,
    nivel: ""
  }
  agregarVendedor(auxVendedor);
  pintarListaVendedores();
}
agregarVendedor = function (vendedor) {
  vendedores.push(vendedor);
}
// =========================
// Búsqueda / movimiento
// =========================
buscarVendedor = function (valorCedula) {
  let resultado = -1;
    for (let i = 0; i < vendedores.length; i++) { 
        if (valorCedula== vendedores[index].cedula) { 
            resultado = i; 
            break; 
        } 
    } 
  return resultado;
}
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




