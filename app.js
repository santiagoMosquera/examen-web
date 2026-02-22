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
//ejercicio 1 
function pintarListaVendedores() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedores.length; i++) {
        html += `<li>${vendedores[i].cedula} | ${vendedores[i].nombre} ${vendedores[i].apellido} | ventas: ${vendedores[i].ventas}</li>`;
    }

    html += "</ul>";

    mostrarHtmlEnDiv("contenedorIzquierda", html);
}

//ejercicio 2

function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {
        html += `<li> ${vendedoresVIP[i].nombre} ${vendedoresVIP[i].apellido} | nivel: ${vendedoresVIP[i].nivel}</li>`;
    }

    html += "</ul>";

   
    mostrarHtmlEnDiv("contenedorDerecha", html);
}

//ejercicio 3

function agregarVendedor(vendedor) {
  vendedores.push(vendedor);
 pintarListaVendedores();
}

//ejercicio 4 

function agregarVendedorAction(){
let cedula = recuperarTexto("txtCedula");
let nombre = recuperarTexto("txtNombre");
let apellido = recuperarTexto("txtApellido");
let ventas = recuperarEntero("txtVentas");

  
  let vendedor={
    cedula:cedula,
    nombre:nombre,
    apellido:apellido,
    ventas:ventas,
    nivel:""
  }
  agregarVendedor(vendedor);
}


inicializar=function(){
  pintarListaVendedores();
  pintarListaVendedoresVIP();
}

//ejercicio5





// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




