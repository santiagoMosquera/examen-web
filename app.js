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

// Función para pintar la lista de vendedores VIP
function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {
        let vendedorVIP = vendedoresVIP[i];
        html += "<li>" + vendedorVIP.nombre + " " + vendedorVIP.apellido + " >> nivel: " + vendedorVIP.nivel + "</li>";
    }
    
    html += "</ul>";
    
    mostrarHtmlEnDiv("contenedorDerecha", html);
}

//EJERCICIO 3
function agregarVendedor(vendedor) {
    vendedores.push(vendedor);
    pintarListaVendedores();
}

function agregarVendedorAction() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");
    
    let nuevoVendedor = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        ventas: ventas,
        nivel: ""
    };
    agregarVendedor(nuevoVendedor);
}

inicializar = function() {
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
