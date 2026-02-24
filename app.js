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
}

inicializar = function() {
    pintarListaVendedores();
    pintarListaVendedoresVIP(); 
}


// =========================
// =EJJERCICIO 3
// =========================



function buscarVendedor(cedula) {
    for (let i = 0; i < vendedores.length; i++) { [cite: 42]
        if (vendedores[i].cedula === cedula) {
            return i; 
        }
    }
    return -1; 
}

function buscarVendedorAction() {
    let cedulaBuscar = recuperarTexto("txtBuscarCedula"); [cite: 44]
    let indiceEncontrado = buscarVendedor(cedulaBuscar); [cite: 44]

    if (indiceEncontrado !== -1) { [cite: 45]
        let v = vendedores[indiceEncontrado]; [cite: 45]
        mostrarHtmlEnDiv("resultadoBusqueda", v.nombre + " " + v.apellido); [cite: 44]
        
        habilitarComponente("btnMover"); [cite: 47]
    } else {
        mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe"); [cite: 44]
    }
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
