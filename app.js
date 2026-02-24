//David Burneo
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
  let html = "<ul class='list'>";
  for(let i=0;i<vendedores.length;i++){
    let v = vendedores[i];
    html += `<li>${v.cedula} | ${v.nombre} ${v.apellido} | ventas: ${v.ventas}</li>`;
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
}
pintarListaVendedoresVIP=function(){
  let html = "<ul class='list'>";
  console.log(vendedoresVIP)
  for(let i=0;i<vendedoresVIP.length;i++){
    let v = vendedoresVIP[i];
    html += `<li>${v.nombre} >> nivel: ${v.nivel}</li>`;
  }
  html += "</ul>";
  console.log(html)
  mostrarHtmlEnDiv("contenedorDerecha", html);
}
agregarVendedor = function(vendedor){
  vendedores.push(vendedor);
  pintarListaVendedores();
}
agregarVendedorAction = function(){
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarTexto("txtVentas");
  let vendedor = {};

  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;

  agregarVendedor(vendedor);
}
buscarVendedor = function(cedula){
  for(let i=0;i<vendedores.length;i++){
    if(vendedores[i].cedula == cedula){
      return i;
    }
  }
  return -1;
}

buscarVendedorAction = function(){
  let cedula = recuperarTexto("txtBuscarCedula");
  pos = buscarVendedor(cedula);
  if (pos != (-1)){
    mostrarTextoEnDiv("resultadoBusqueda", `${vendedores[pos].nombre} ${vendedores[pos].apellido}` );
    habilitarComponente("btnMover")
  }else{
    mostrarTextoEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe!");
  }
}

moverAction = function(){
  let cedula = recuperarTexto("txtBuscarCedula");
  pos = buscarVendedor(cedula);
  vendedoresVIP.push(vendedores[pos]);
  vendedores.splice(pos,1);
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}