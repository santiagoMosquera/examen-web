//ALUMNO: JEFFERSON  CHILUISA  =========================
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



// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




pintarListaVendedores = function () {
    let contenidoHtml = "<ul class='list'>";
    for (let i = 0; i < vendedores.length; i++) {
        let v = vendedores[i];
        contenidoHtml += "<li>" + v.cedula + " | " + v.nombre + " " + v.apellido + " | ventas: " + v.ventas + "</li>";
    }
    contenidoHtml += "</ul>";
    mostrarHtmlEnDiv("contenedorIzquierda", contenidoHtml);
}



pintarListaVendedoresVIP = function () {
    let contenidoHtml = "<ul class='list'>";
    for (let i = 0; i < vendedoresVIP.length; i++) {
        let v = vendedoresVIP[i];
        contenidoHtml += "<li>" + v.nombre + " " + v.apellido + " >> Nivel: " + v.nivel + "</li>";
    }
    contenidoHtml += "</ul>";
    mostrarHtmlEnDiv("contenedorDerecha", contenidoHtml);
}


agregarVendedor=function(vendedor){
  vendedores.push(vendedor);
  pintarListaVendedores();  
}

agregarVendedorAction=function(){
  let cedula=recuperarTexto("txtCedula");
  let nombre=recuperarTexto("txtNombre");
  let apellido=recuperarTexto("txtApellido");
  let ventas=recuperarEntero("txtVentas");
  
  let vendedor={
    cedula: cedula, nombre: nombre, apellido: apellido, ventas: ventas, nivel: ""
  };
  agregarVendedor(vendedor);
}

buscarVendedor=function(cedula){
  let indiceEncontrado=-1;
  for (let i=0; i<vendedores.length;i++){
    if(vendedores[i].cedula==cedula){
      indiceEncontrado=i;
      break;
    }
  }
  return indiceEncontrado;
}

buscarVendedorAction=function(){
  let cedula = recuperarTexto("txtBuscarCedula");
  let posicionVendedor=buscarVendedor(cedula);
  if(posicionVendedor!=-1){
    let v = vendedores[posicionVendedor];
    nombreCompleto= v.nombre + " "+v.apellido;
    mostrarHtmlEnDiv("resultadoBusqueda", nombreCompleto);
    habilitarComponente("btnMover");
  }else{
    mostrarHtmlEnDiv("resultadoBusqueda","El vendedor con dicha cedula no existe");
    deshabilitarComponente("btnMover");
  }
}