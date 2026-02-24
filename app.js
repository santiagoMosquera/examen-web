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

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}

pintarListaVendedores=function(){
  let html = "<ul class = 'list'>";

  for (let i=0; i<vendedores.length;i++){
    let v = vendedores[i];
    html += "<li>" + v.cedula+ " | " + v.nombre + " " + v.apellido + " | ventas: " + v.ventas + "</li>";

  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
}

pintarListaVendedoresVIP=function(){
  let html = "<ul class = 'list'>";

  for (let i=0; i<vendedoresVIP.length;i++){
    let v = vendedoresVIP[i];
    html += "<li>" + v.cedula+ " | " + v.nombre + " " + v.apellido + " | ventas: " + v.ventas + "</li>";

  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorDerecha", html); 
}
agregarVendedor=function(vendedor){
  vendedores.push(vendedor);
}

agregarVendedorAction=function(){
  let cedula=recuperarTexto("txtCedula");
  let nombre=recuperarTexto("txtNombre");
  let apellido=recuperarTexto("txtApellido");
  let ventas=recuperarTexto("txtVentas");

  let vendedor = {};

  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;
  vendedor.nivel = "";

  agregarVendedor(vendedor);
  pintarListaVendedores();

}
buscarVendedor = function(cedula){
  let posi = -1;

  for(let i = 0; i < vendedores.length; i++){
      let v = vendedores[i];
      if(v.cedula == cedula){
        posi = i;
      }
  }

  return posi;
}
buscarVendedorAction=function(){
  let buscarCedula=recuperarTexto("txtBuscarCedula");
  let posi=buscarVendedor(buscarCedula);
  if(posi==-1){
    mostrarTextoEnDiv("resultadoBusqueda", "Vendedor no existe...");
    deshabilitarComponente("btnMover");
  }else{
    vEncontrado=vendedores[posi];
    mostrarTextoEnDiv("resultadoBusqueda",vEncontrado.nombre + " " + vEncontrado.apellido);
  }
  habilitarComponente("btnMover");
}

moverAction=function(){
  let buscarCedula=recuperarTexto("txtBuscarCedula");
  let posi=buscarVendedor(buscarCedula);
  let vendedor=vendedores[posi];
  vendedoresVIP.push(vendedor);
  vendedores.splice(posi,1);

  pintarListaVendedores();
  pintarListaVendedoresVIP();
}