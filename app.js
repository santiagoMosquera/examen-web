//Alumno: ERIK RODRIGO TOAPANTA VELASCO

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


function pintarListaVendedores(){
  let tabla=`<table>`;

  for(let i=0;i<vendedores.length;i++){
      tabla+=`<tr>
      <td>${vendedores[i].cedula}</td>
      <td>| ${vendedores[i].nombre}</td>
      <td>| Ventas: ${vendedores[i].ventas}</td></tr>`;
  }
  tabla+="</table>";
  mostrarHtmlEnDiv("contenedorIzquierda", tabla);
}

function pintarListaVendedoresVIP(){
  let tabla=`<table>`;

  for(let i=0;i<vendedoresVIP.length;i++){
      tabla+=`<tr>
      <td>${vendedoresVIP[i].nombre}</td>
      <td> >>nivel: ${vendedoresVIP[i].nivel}</td></tr>`;
  }
  tabla+="</table>";
  mostrarHtmlEnDiv("contenedorDerecha", tabla);
}

function agregarVendedor(vendedor){
  vendedores.push(vendedor);
}

function agregarVendedorAction(){
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas");

  let vendedor = {};
  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;

  agregarVendedor(vendedor);
  pintarListaVendedores();
}

function buscarVendedor(cedula){
  for(let i=0;i<vendedores.length;i++){
      if(vendedores[i].cedula==cedula) return i;
    }
    return -1;
}

function buscarVendedorAction(){
  let cedula = recuperarTexto("txtBuscarCedula");
  let resultadoBusqueda = buscarVendedor(cedula);

  if(resultadoBusqueda != -1) {
    mostrarTextoEnDiv("resultadoBusqueda",
      `${vendedores[resultadoBusqueda].nombre} ${vendedores[resultadoBusqueda].apellido}`);
      habilitarComponente("btnMover");
  }else{
    mostrarTextoEnDiv("resultadoBusqueda", "El vendedor no existe");
  }
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




