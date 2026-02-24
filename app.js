// =========================
// Datos (arreglos)
// =========================
// ANA MOPOSITA

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

function pintarListaVendedores() {
    let html =  "<ul class='list'>";
    for (let i = 0; i < vendedores.length; i++) {
        let vendedor = vendedores[i];
        let cedula = vendedor.cedula;
        let nombre = vendedor.nombre;
        let apellido= vendedor.apellido;
        let ventas= vendedor.ventas;
        html = html + "<li>" + cedula + " | " + nombre + " " + apellido + " | ventas: " + ventas + "</li>";
    }
    html = html + "</ul>";

    mostrarHtmlEnDiv("contenedorIzquierda", html);
};

function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {
        let vendedor = vendedoresVIP[i];
        let nombre = vendedor.nombre;
        let apellido = vendedor.apellido;
        let nivel = vendedor.nivel;

        html = html + "<li>" + nombre + " " + apellido + " >> nivel: " + nivel + "</li>";
    }

    html = html + "</ul>";

    mostrarHtmlEnDiv("contenedorDerecha", html);
};


function agregarVendedor(vendedor) {
    vendedores.push(vendedor);
};

function agregarVendedorAction() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");

    let vendedor = {};
    vendedor.cedula = cedula;
    vendedor.nombre = nombre;
    vendedor.apellido = apellido;
    vendedor.ventas = ventas;
    vendedor.nivel = "";

    agregarVendedor(vendedor);
    pintarListaVendedores();
};


function buscarVendedor(cedula) {
    let posicion = -1;

    for (let i = 0; i < vendedores.length; i++) {
        let vendedor = vendedores[i];

        if (vendedor.cedula == cedula) {
            posicion = i;
        }
    }

    return posicion;
};

function buscarVendedorAction() {
    let cedulaBuscada = recuperarTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedulaBuscada);

    if (posicion == -1) {
        mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
        deshabilitarComponente("btnMover");
    } else {
        let vendedor = vendedores[posicion];
        let texto = vendedor.nombre + " " + vendedor.apellido;

        mostrarHtmlEnDiv("resultadoBusqueda", texto);
        habilitarComponente("btnMover");
    }
};


