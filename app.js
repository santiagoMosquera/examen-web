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
  let ventas = calcularTotalVentas();
  mostrarTextoEnDiv("totalVentas", ventas);
}
pintarListaVendedoresVIP=function(){
  let tablaHtml = "<ul class='list'>";
  for(let i = 0; i < vendedoresVIP.length; i++){
    let vendedorRecuperado = vendedoresVIP[i];
    tablaHtml += "<li>"+vendedorRecuperado.nombre+" "+vendedorRecuperado.apellido+" >> nivel: "+vendedorRecuperado.nivel+"</li>" 
  }
  tablaHtml += "</ul>"
  mostrarHtmlEnDiv("contenedorDerecha",tablaHtml);
}
agregarVendedor=function(vendedor){
  vendedores.push(vendedor);
}
agregarVendedorAction=function(){
  let vendedor = {};
  vendedor.cedula = recuperarTexto("txtCedula");
  vendedor.nombre = recuperarTexto("txtNombre");
  vendedor.apellido = recuperarTexto("txtApellido");
  vendedor. ventas = recuperarEntero("txtVentas");
  vendedor.nivel = ""
  agregarVendedor(vendedor);
  pintarListaVendedores();
}

buscarVendedor= function(cedula){
   let vendedor = -1;
  for(let i = 0; i < vendedores.length; i++){
     let posicion = vendedores[i];
     if (cedula == posicion.cedula){
      vendedor = posicion;
      break
     }
  }
  return vendedor;
}

buscarVendedorAction = function (){
  let cedula = recuperarTexto("txtBuscarCedula");
  let vendedor = buscarVendedor(cedula);
  if (vendedor === -1){
    mostrarTextoEnDiv("resultadoBusqueda","El vendedor con dicha cedula no existe");
  } else{
    mostrarTextoEnDiv("resultadoBusqueda", vendedor.nombre+" "+vendedor.apellido);
    habilitarComponente("btnMover");
  }
}

moverAction= function (){
  let cedula = recuperarTexto("txtBuscarCedula");
  let vendedor = buscarVendedor(cedula);
  let nivel = calcularNivel(vendedor.ventas);
  vendedor.nivel = nivel;
  vendedoresVIP.push(vendedor);
  let eliminar = vendedores.indexOf(vendedor.cedula);
  vendedores.splice(eliminar,1);
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}

calcularNivel = function(ventas) {
  let nivel = "";
  if(ventas >= 10 && ventas <= 12){
    nivel = "bronce"
  } else if(ventas >= 13 && ventas <= 15){
    nivel = "plata"
  } else if (ventas > 15){
    nivel = "oro"
  }
  return nivel;
}

calcularTotalVentas = function(){
  let totalVentas = 0;
  for(let i = 0; i < vendedores.length; i++){
    let vendedor = vendedores[i];
    totalVentas += vendedor.ventas;
  }
  return totalVentas;
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




