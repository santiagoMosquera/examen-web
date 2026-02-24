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
    
    let totalVentas = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas", totalVentas);
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

function moverAction() {
    let cedulaBuscada = recuperarTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedulaBuscada);

    if (posicion != -1) {
        let vendedor = vendedores[posicion];

        let nivelCalculado = calcularNivel(vendedor.ventas);
        vendedor.nivel = nivelCalculado;

        vendedoresVIP.push(vendedor);
        vendedores.splice(posicion, 1);

        pintarListaVendedores();
        pintarListaVendedoresVIP();

        mostrarHtmlEnDiv("resultadoBusqueda", "<span class='muted'>Sin búsqueda aún</span>");
        mostrarTextoEnCaja("txtBuscarCedula", "");
        deshabilitarComponente("btnMover");
    }
};


function calcularNivel(ventas) {
    let nivel = "";

    if (ventas >= 10 && ventas <= 12) {
        nivel = "bronce";
    } else if (ventas >= 13 && ventas <= 15) {
        nivel = "plata";
    } else if (ventas > 15) {
        nivel = "oro";
    }

    return nivel;
};


function calcularTotalVentas() {
    let total = 0;

    for (let i = 0; i < vendedores.length; i++) {
        let vendedor = vendedores[i];
        total = total + vendedor.ventas;
    }

    return total;
};

