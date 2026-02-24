//Nombre: Edwin Geovany Cusin

// =========================
// Datos (arreglos)
// =========================
let vendedores = [
    { cedula: "1714616123", nombre: "Santiago", apellido: "Mosquera", ventas: 15, nivel: "" },
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

    if (buscarVendedor(cedula) == -1) {
        agregarVendedor(vendedorNuevo);
        pintarListaVendedores();
        alert("REGISTRO EXITOSO ");
        limpiar();
    } else {
        alert("YA EXISTE LA CEDULA REGISTRADA ");
    }

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
función moverAction, que será llamada desde el botón Mover
===================================================*/
moverAction = function() {
    let cedula = recuperarTexto("txtBuscarCedula");
    let posicion = buscarVendedor(cedula);
    recuperarVendedor = vendedores[posicion];


    let nivel = calcularNivel(recuperarVendedor.ventas);
    recuperarVendedor.nivel = nivel;

    vendedoresVIP.push(recuperarVendedor);
    vendedores.splice(posicion, 1);

    pintarListaVendedores();
    pintarListaVendedoresVIP();
    deshabilitarComponente("btnMover");
    limpiarBusqueda();
};

/*=================================================
función calcularNivel, va a determinar el nivel de los vendedores en función de sus ventas.
===================================================*/
calcularNivel = function(numeroVentas) {
    if (numeroVentas > 10 && numeroVentas <= 12) {
        return "Bronce";
    }
    if (numeroVentas > 13 && numeroVentas <= 15) {
        return "plata";
    }
    if (numeroVentas > 15) {
        return "Bronce";
    }
};
/*=================================================
función calcularTotalVentas, no recibe nada y retorna la suma de las ventas totales. 
===================================================*/
calcularTotalVentas = function() {
    let total = 0;
    for (let vendedor of vendedores) {
        total += vendedor.ventas;
    }
    return total;
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
    mostrarHtmlEnDiv("contenedorIzquierda", contenidoLista);
    totalVentas = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas", totalVentas);
    mostrarTextoEnDiv("contadorVendedores", vendedores.length);

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
    mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
};

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
    //indiceEncontrado = -1;
    //btnMover.disabled = true;
    mostrarTextoEnCaja("txtBuscarCedula", "");
    resultadoBusqueda.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
    telefonoBuscarEl.value = "";
}

limpiar = function() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtVentas", "");
};