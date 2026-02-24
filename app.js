//Nombre: Edwin Geovany Cusin

// =========================
// Datos (arreglos)
// =========================
let vendedores = [
    { cedula: "1714616123", nombre: "Santiago", apellido: "Mosquera", ventas: 10, nivel: "" },
    { cedula: "1708934242", nombre: "Paúl", apellido: "Torres", ventas: 12, nivel: "" },
];

let vendedoresVIP = [
    { cedula: "0720304056", nombre: "Josselyn", apellido: "Pillajo", ventas: 17, nivel: "oro" },
    { cedula: "1945504089", nombre: "Alexandra", apellido: "Analuisa", ventas: 10, nivel: "bronce" },

];

inicializar = function() {
    pintarListaVendedores();
    pintarListaVendedoresVIP();
    deshabilitarComponente("btnMover");

}

/*=================================================
función agregarVendedor, recibe como parámetro un vendedor y lo agrega al arreglo de vendedores.
===================================================*/
agregarVendedor = function(vendedor) {
    vendedores.push(vendedor);
};

/*=================================================
función agregarVendedorAction, no recibe y no retorna
===================================================*/
agregarVendedorAction = function() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");

    let vendedorNuevo = {};
    vendedorNuevo.cedula = cedula;
    vendedorNuevo.nombre = nombre;
    vendedorNuevo.apellido = apellido;
    vendedorNuevo.ventas = ventas;

    agregarVendedor(vendedorNuevo);
    pintarListaVendedores();
};

/*=================================================
la función buscarVendedor, recibe como parámetro la cédula y retorna -1 
===================================================*/
buscarVendedor = function(cedulaBuscar) {
    for (let i = 0; i < vendedores.length; i++) {
        if (vendedores[i].cedula == cedulaBuscar) {
            return i;
        }
    }
    return -1;
};

/*=================================================
la función buscarVendedorAction, que será invocada desde el botón Buscar
===================================================*/
buscarVendedorAction = function() {
    let cedula = recuperarTexto("txtBuscarCedula");
    let resultadoBusqueda = buscarVendedor(cedula);
    if (resultadoBusqueda == -1) {
        deshabilitarComponente("btnMover");
        mostrarTextoEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
    } else {
        let mensaje = vendedores[resultadoBusqueda].nombre + " " + vendedores[resultadoBusqueda].apellido;
        mostrarTextoEnDiv("resultadoBusqueda", mensaje);
        habilitarComponente("btnMover");
    }
};


/*=================================================
función pintarListaVendedores, no recibe y no retorna
===================================================*/
pintarListaVendedores = function() {
    let contenidoLista = "<ul>";
    for (let vendedor of vendedores) {
        contenidoLista += "<li>" + vendedor.cedula + " | " + vendedor.nombre + " " + vendedor.apellido + " | " + vendedor.ventas + "</li>";

    }
    contenidoLista += "</ul>";
    mostrarHtmlEnDiv("contenedorIzquierda", contenidoLista)
};


/*=================================================
función moverAction, que será llamada desde el botón Mover
===================================================*/
moverAction = function() {
    let cedula = recuperarTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedula);
    recuperarVendedor = vendedores[posicion];
    vendedoresVIP.push(recuperarVendedor);
    vendedores.splice(posicion, 1);

    pintarListaVendedores();
    pintarListaVendedoresVIP();

};










/*=================================================
función pintarListaVendedoresVIP, no recibe y no retorna
===================================================*/
pintarListaVendedoresVIP = function() {
    let contenidoLista = "<ul>";
    for (let vendedorVIP of vendedoresVIP) {
        contenidoLista += "<li>" + vendedorVIP.nombre + " " + vendedorVIP.apellido + " >> Nivel: " + vendedorVIP.nivel + "</li>";

    }
    contenidoLista += "</ul>";
    mostrarHtmlEnDiv("contenedorDerecha", contenidoLista)
};

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
    indiceEncontrado = -1;
    btnMover.disabled = true;
    resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
    telefonoBuscarEl.value = "";
}