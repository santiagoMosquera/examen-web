// =========================
// Alumno: Paul Arias
// =========================


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

// Función para pintar la lista de vendedores
function pintarListaVendedores() {
    let html = "<ul class='list'>";
    
    for (let i = 0; i < vendedores.length; i++) {
        let vendedor = vendedores[i];
        html += "<li>" + vendedor.cedula + " | " + vendedor.nombre + " " + vendedor.apellido + " | ventas: " + vendedor.ventas + "</li>";
    }
    
    html += "</ul>";
    
    mostrarHtmlEnDiv("contenedorIzquierda", html);
}

inicializar = function() {
    pintarListaVendedores();
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

//funcion pintar vendedores
function pintarListaVendedores(){
    let HTML = '< class="list">';
    for (let i = 0;i < vendedores.length; i++){
        HTML = HTML + "<li>" +
        vendedores[i].cedula + '|'+
        vendedores[i].nombre + '| ventas:' +
        vendedores[i].ventas +
        "</li>";    
    }
    HTML += "</ul>;";
    mostrarHtmlEnDiv(contenedorIzquierda,HTML);
    let totalVentas = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas",totalVentas);
    mostrarTextoEnDiv("contadorVendedores",vendedores.length);
}

function pintarListaVendedoresVip(){
    let HTML = '< class="list">';
    for (let i = 0;i < vendedoresVIP.length; i++){
        HTML = HTML + "<li>" +
        vendedores[i].nombre + '>> nivel:'+
        vendedores[i].nivel
       
        "</li>";    
    }
    HTML += "</ul>;";
    mostrarHtmlEnDiv(contenedorDerecha,HTML);
    mostrarTextoEnDiv("contadorVendedoresVIP",vendedoresVIP.length);
}

function agragarVendedor(vendedor){
    vendedores.push(vendedor);
}

function agregarVendedoresAction(){
    let cedula = recuperaTexto("txtCedula");
    let nombre = recuperaTexto("txtNombre");
    let ventas = recuperarEntero("txtVentas");

    let posicion = buscarVendedor(cedula);
    if (posicion !== -1){
        alert('El vendedor ya existe, no se puede agragar');

    }else{
    let vendedor = {
        cedula: cedula,
        nombre: nombre,
        ventas: ventas
    };

    agragarVendedor(vendedor);
    pintarListaVendedores();
    limpiar();
    }
}
function buscarVendedor(cedula){
    let posicion = -1;
     for (let i=0; i<vendedores.length;i++){
        if(vendedores[i].cedula === cedula){
            posicion = i;
        }
     }
     return posicion;
}

function buscarVendedorAction(){
    let cedula = recuperaTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedula);

    if (posicion === -1){
        mostrarTextoEnDiv("resultadoBusqueda","el vendedor con dicha cedula no existe ");
    }else{
        let vendedor = vendedores[posicion];
        mostrarTextoEnDiv("resultadoBusqueda",vendedor.nombre);
        habilitarComponente("btnMover");
    };   
}

function moverAction(){
    let cedula = recuperarTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedula);

    if (posicion !== -1){
        let vendedor = vendedores[posicion];
        let nivel = calcularNivel(vendedor.ventas);
        vendedor.nivel = nivel;

        vendedoresVIP.push(vendedor);
        vendedores.splice(posicion,1);
        pintarListaVendedores();
        pintarListaVendedoresVip();
        deshabilitarComponente('btnMover');
    }
}
 
function calcularNivel(NumVentas){
    let nivel = '';
    if ( NumVentas >= 10 && NumVentas <= 12){
        nivel= 'bronce';
    }else if (NumVentas >= 13 && NumVentas <= 15){
        nivel= 'plata';
    }else if (NumVentas > 15){
        nivel = 'oro';
    }
    return nivel;
}

function calcularTotalVentas(){
    let total = 0;
    for (let i = 0 ;i<vendedores.length;i++){
        total = total + vendedores[i].ventas;
    }
    return total;
}

function limpiar (){
    let limpiarCedula = recuperarTexto("txtCedula");
    let limpiarNombre = recuperarTexto("txtNombre");
    let limpiarApellido = recuperaTexto("txtApellido");
    let limpiarVentas = recuperarEntero("txtVentas");

    limpiarCedula = '';
    limpiarNombre = '';
    limpiarApellido = '';
    limpiarVentas = '';
}
