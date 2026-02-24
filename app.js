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
    pintarListaVendedoresVIP()
}

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