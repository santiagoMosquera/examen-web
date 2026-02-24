// =========================
//ANGEL MORALALES MALES
// =========================


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

    let total = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas", total);

// --- EJERCICIO 7 ---
    mostrarTextoEnDiv("contadorVendedores", vendedores.length);


}

inicializar = function() {
    pintarListaVendedores();

}

function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";
    
    for (let i = 0; i < vendedoresVIP.length; i++) {
        let vendedorVip = vendedoresVIP[i];
        html += "<li>" + vendedorVip.nombre + " " + vendedorVip.apellido + " >> nivel: " + vendedorVip.nivel + "</li>";
    }
    
    html += "</ul>";
    
    mostrarHtmlEnDiv("contenedorDerecha", html);
// --- EJERCICIO 7 ---
    mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
}

inicializar = function() {
    pintarListaVendedores();
    pintarListaVendedoresVIP(); 
}


// =========================
// =EJJERCICIO 3
// =========================



function buscarVendedor(cedula) {
    for (let i = 0; i < vendedores.length; i++) { 
        if (vendedores[i].cedula === cedula) {
            return i; 
        }
    }
    return -1; 
}
function buscarVendedorAction() {
    let cedulaBuscar = recuperarTexto("txtBuscarCedula"); 
    let indiceEncontrado = buscarVendedor(cedulaBuscar); 
    if (indiceEncontrado !== -1) { 
        let v = vendedores[indiceEncontrado]; 
        mostrarHtmlEnDiv("resultadoBusqueda", v.nombre + " " + v.apellido); 
        
        habilitarComponente("btnMover"); 
    } else {
        mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe"); 
        deshabilitarComponente("btnMover");
    }
}
function agregarVendedor(vendedor) {
    vendedores.push(vendedor); 
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
    pintarListaVendedores(); 
}

// =========================
// EJERCICIO 4:
// =========================

function moverAction() {
    let cedulaABuscar = recuperarTexto("txtBuscarCedula");

    let indice = buscarVendedor(cedulaABuscar);

    if (indice !== -1) {
        let vendedorRecuperado = vendedores[indice];

        vendedoresVIP.push(vendedorRecuperado);

        vendedores.splice(indice, 1);

        pintarListaVendedores();
        pintarListaVendedoresVIP();
        
        deshabilitarComponente("btnMover");
        mostrarHtmlEnDiv("resultadoBusqueda", "Vendedor movido con exito");
    }
}



// ------------
// ejercicio 5
//--------------
function calcularNivel(ventas) {
    if (ventas >= 10 && ventas <= 12) {
        return "bronce";
    } 
    else if (ventas >= 13 && ventas <= 15) {
        return "plata";
    } 
    else if (ventas > 15) {
        return "oro";
    } else {
        return "sin nivel"; 
    }
}

function moverAction() {
    let cedulaABuscar = recuperarTexto("txtBuscarCedula");
    let indice = buscarVendedor(cedulaABuscar);
    if (indice !== -1) {
        let vendedorRecuperado = vendedores[indice];
        let nivelCalculado = calcularNivel(vendedorRecuperado.ventas);
        vendedorRecuperado.nivel = nivelCalculado;
        vendedoresVIP.push(vendedorRecuperado);
        vendedores.splice(indice, 1);
        pintarListaVendedores();
        pintarListaVendedoresVIP();
        deshabilitarComponente("btnMover");
    }
}
// --------
//ejercicio 6
//---------

function calcularTotalVentas() {
    let total = 0; 
    
    for (let i = 0; i < vendedores.length; i++) {
        total += vendedores[i].ventas;
    }
    
    return total;  
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
