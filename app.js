// Juan Jose Beltran
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
    let contenidoLista="<ul class='list'>";
    let elementoVendedor;

    for(let i=0;i<vendedores.length;i++){
        elementoVendedor=vendedores[i];
        contenidoLista+=
        "<li>"+elementoVendedor.cedula+" | "+elementoVendedor.nombre+" "+elementoVendedor.apellido+" | ventas: "+elementoVendedor.ventas+"</li>"
        
    }
    contenidoLista+="</ul>";
    
    mostrarHtmlEnDiv("contenedorIzquierda",contenidoLista);
}

pintarListaVendedoresVIP=function(){
  let contenidoLista="<ul class='list'>";
    let elementoVendedorVIP;

    for(let i=0;i<vendedoresVIP.length;i++){
        elementoVendedorVIP=vendedoresVIP[i];
        contenidoLista+=
        "<li>"+elementoVendedorVIP.nombre+" "+elementoVendedorVIP.apellido+" >> nivel: "+elementoVendedorVIP.nivel+"</li>"
        
    }
    contenidoLista+="</ul>";
    
    mostrarHtmlEnDiv("contenedorDerecha",contenidoLista);

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




