//ALUMNO: Leonardo_Narvaez
// =========================
// Datos (arreglos)
// =========================
let vendedores = [
  { cedula:"1714616123",nombre: "Santiago", apellido: "Mosquera", ventas:10, nivel:""},
  { cedula:"1708934242",nombre: "Paúl", apellido: "Torres", ventas:12, nivel:""},
 ];

let vendedoresVIP = [
    { cedula:"0720304056",nombre: "Josselyn", apellido: "Pillajo", ventas:17, nivel:"oro"},
    { cedula:"1945504089",nombre: "Alexandra", apellido: "Analuisa", ventas:10, nivel:"bronce"},

];

inicializar=function(){
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}
pintarListaVendedores=function(){
  let tablaHtml = "<ul class='list'>";
  for(let i = 0; i < vendedores.length; i++){
    let vendedorRecuperado = vendedores[i];
    tablaHtml += "<li>"+vendedorRecuperado.cedula+" | "+vendedorRecuperado.nombre
    +" "+vendedorRecuperado.apellido+" | ventas: "+vendedorRecuperado.ventas+"</li>" 
  }
  tablaHtml += "</ul>"
  mostrarHtmlEnDiv("contenedorIzquierda",tablaHtml);
}
pintarListaVendedoresVIP=function(){
  let tablaHtml = "<ul class='list'>";
  for(let i = 0; i < vendedores.length; i++){
    let vendedorRecuperado = vendedoresVIP[i];
    tablaHtml += "<li>"+vendedorRecuperado.nombre+" "+vendedorRecuperado.apellido+" >> nivel: "+vendedorRecuperado.nivel+"</li>" 
  }
  tablaHtml += "</ul>"
  mostrarHtmlEnDiv("contenedorDerecha",tablaHtml);
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




