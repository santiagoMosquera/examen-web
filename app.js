// =========================
// Datos (arreglos)
//Estudiante: Mateo Molina
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

function pintarListaVendedores(){
  //let cmpTabla=document.getElementById("contenedorIzquierda");
  let tabla="<ul>";
  for(let i=0;i<vendedores.length;i++){
    tabla+="<li>"+vendedores[i].cedula+" | "+vendedores[i].nombre+" "+vendedores[i].apellido+" | ventas: "+vendedores[i].ventas+" "+vendedores[i].nivel+"<li>";
  }tabla+="</ul>";
  //cmpTabla.innerHTML=tabla;
  mostrarHtmlEnDiv("contenedorIzquierda",tabla);
}
function pintarListaVendedoresVIP(){
  let tabla="<ul>";
  for(let i=0;i<vendedoresVIP.length;i++){
    tabla+="<li>"+vendedoresVIP[i].cedula+" | "+vendedoresVIP[i].nombre+" "+vendedoresVIP[i].apellido+" | ventas: "+vendedoresVIP[i].ventas+" "+vendedoresVIP[i].nivel+"<li>";
  }tabla+="</ul>";
  mostrarHtmlEnDiv("contenedorDerecha",tabla);
}
function agregarVendedor(vendedor){
  vendedores.push(vendedor);
}
function agregarVendedorActivo(){
  let txtcedula=recuperarEntero("txtCedula");
  let txtnombre=recuperarTexto("txtNombre");
  let txtapellido=recuperarTexto("txtApellido");
  let txtventas=recuperarEntero("txtVentas");
  let vendedor={cedula:txtcedula, nombre:txtnombre, apellido:txtapellido, ventas:txtventas};
  agregarVendedor(vendedor);
  pintarListaVendedores();
}//esta incompleta no se muestra el nuebo vendedor en pantalla
function buscarVendedor(cedula){
  let vendedor=-1;
  for(let i=0;i<vendedores.length;i++){
        if(vendedores[i].cedula==cedula){
            return vendedor=i;
            break;
        }
    }
    return vendedor;
}
function buscarVendedorActivo(){
  let buscarCedula=recuperarTexto("txtBuscarCedula");
  let encontrado=buscarVendedor(buscarCedula);
  if (encontrado!=-1){
    let vendedor=vendedores[encontrado];
    mostrarTextoEnDiv("resultadoBusqueda",vendedor.nombre);
    habilitarComponente("btnMover");
  }else{
    mostrarTextoEnDiv("resultadoBusqueda","El vendedor con dicha cedula no existe");
  }
}
function moverAction(){
  let cedula=recuperarTexto("txtBuscarCedula")
  let indice=buscarVendedor(cedula);
  if (indice!=-1){
    let vendedor=vendedores[indice];
    let nivel=calcularNivel(vendedor.ventas)
    vendedor.nivel=nivel;
    vendedoresVIP.push(vendedor);
    vendedores.splice(indice,1);
    pintarListaVendedoresVIP()
    pintarListaVendedores()
  }
  vendedores.splice(vendedor,1);
  pintarListaVendedoresVIP()
  pintarListaVendedores()
}
function calcularNivel(ventas){
  let nivel="";
  if (ventas>=10 && ventas<=12){
    nivel="bronce";
  }else if (ventas>=13 && ventas<=15){
    nivel="plata";
  }else if (ventas>15){
    nivel="oro";
  }
  return nivel
}
function calcularTotalVentas(){}