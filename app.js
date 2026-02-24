// ========================= 
// Samuel Meneses 
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


// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}

pintarListaVendedores = function () {
    let contenidoHtml = "<ul class='list'>";
    let vendedor;

    for (let i = 0; i < vendedores.length; i++) {
        vendedor = vendedores[i];
        contenidoHtml += "<li>" + vendedor.cedula + " | " + vendedor.nombre + " " + vendedor.apellido + " | ventas: " + vendedor.ventas + "</li>";
    }

    contenidoHtml += "</ul>";
    mostrarHtmlEnDiv("contenedorIzquierda", contenidoHtml);
}

pintarListaVendedoresVIP = function () {
    let contenidoHtml = "<ul class='list'>";
    let vendedorVIP;

    for (let i = 0; i < vendedoresVIP.length; i++) {
        vendedorVIP = vendedoresVIP[i];
        
        contenidoHtml += "<li>" + vendedorVIP.nombre + " " + vendedorVIP.apellido + " >> nivel: " + vendedorVIP.nivel + "</li>";
    }

    contenidoHtml += "</ul>";
    mostrarHtmlEnDiv("contenedorDerecha", contenidoHtml);
}


inicializar=function(){
 pintarListaVendedores();
 pintarListaVendedoresVIP();
}

agregarVendedor = function(vendedor) {
    vendedores.push(vendedor);
} 

agregarVendedorAction = function() {
    
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

    pintarListaVendedores();
} 

buscarVendedor = function(cedula) {
    let vendedor;
    let busqueda = -1;

    for (let i = 0; i < vendedores.length; i++) {
        vendedor = vendedores[i];
        if (vendedor.cedula == cedula) {
            busqueda = i;
            break; 
        }
    }
    return busqueda;
}

buscarVendedorAction = function() {
    
    let cedulaBuscar = recuperarTexto("txtBuscarCedula");
    let indice = buscarVendedor(cedulaBuscar);

    if (indice == -1) {
        mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
        deshabilitarComponente("btnMover"); //Si no encuentra no lo mueve
    } else {
        let valor = vendedores[indice];

        mostrarHtmlEnDiv("resultadoBusqueda", valor.nombre + " " + valor.apellido);
        habilitarComponente("btnMover"); 
    }
}
moverAction = function() {
    let cedulaABuscar = recuperarTexto("txtBuscarCedula");
    let indice = buscarVendedor(cedulaABuscar);
    let vendedorAMover = vendedores[indice];
    let nivelCalculado = calcularNivel(vendedorAMover.ventas);

    vendedorAMover.nivel = nivelCalculado;
    vendedoresVIP.push(vendedorAMover);
    vendedores.splice(indice, 1); // splice elimina un elemento del arreglo

    pintarListaVendedores();
    pintarListaVendedoresVIP();
    limpiarBusqueda();
}

calcularNivel = function(ventas) {
    let nivel = "";
    if (ventas >= 10 && ventas <= 12) {
        nivel = "bronce";
    } else if (ventas >= 13 && ventas <= 15) {
        nivel = "plata";
    } else if (ventas > 15) {
        nivel = "oro";
    }
    return nivel;
}
