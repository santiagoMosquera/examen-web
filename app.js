//jhosep TERAn
let vendedores = [
    { cedula: "1714616123", nombre: "Santiago", apellido: "Mosquera", ventas: 10, nivel: "" },
    { cedula: "1708934242", nombre: "Paúl", apellido: "Torres", ventas: 12, nivel: "" }
];

let vendedoresVIP = [
    { cedula: "0720304056", nombre: "Josselyn", apellido: "Pillajo", ventas: 17, nivel: "oro" },
    { cedula: "1945504089", nombre: "Alexandra", apellido: "Analuisa", ventas: 10, nivel: "bronce" }
];

function inicializar() {
    pintarListaVendedores();
    pintarListaVendedoresVIP();
}

function pintarListaVendedores() {
    let html = "<ul class='list'>";
    for (let i = 0; i < vendedores.length; i++) {
        let v = vendedores[i];
        html += `<li>${v.cedula} | ${v.nombre} ${v.apellido} | ventas: ${v.ventas}</li>`;
    }
    html += "</ul>";
    mostrarHtmlEnDiv("contenedorIzquierda", html); 
    mostrarTextoEnDiv("totalVentas", calcularTotalVentas()); 
    mostrarTextoEnDiv("contadorVendedores", vendedores.length); 
}

function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";
    for (let i = 0; i < vendedoresVIP.length; i++) {
        let v = vendedoresVIP[i];
        html += `<li>${v.nombre} ${v.apellido} >> nivel: ${v.nivel}</li>`;
    }
    html += "</ul>";
    mostrarHtmlEnDiv("contenedorDerecha", html); 
    mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length); 
}

function agregarVendedorAction() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");

    if (buscarVendedor(cedula) !== -1) { 
        alert("Ya existe el vendedor, no se puede agregar");
    } else {
        let nuevo = { cedula, nombre, apellido, ventas, nivel: "" };
        vendedores.push(nuevo);
        pintarListaVendedores();
        limpiar(); 
    }
}

function buscarVendedor(cedula) { // 
    for (let i = 0; i < vendedores.length; i++) {
        if (vendedores[i].cedula === cedula) return i;
    }
    return -1;
}

function buscarVendedorAction() {
    let cedula = recuperarTexto("txtBuscarCedula");
    let indice = buscarVendedor(cedula);
    if (indice !== -1) {
        let v = vendedores[indice];
        mostrarHtmlEnDiv("resultadoBusqueda", `${v.nombre} ${v.apellido}`);
        habilitarComponente("btnMover"); 
    } else {
        mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
    }
}

function moverAction() { 
    let cedula = recuperarTexto("txtBuscarCedula");
    let indice = buscarVendedor(cedula);
    if (indice !== -1) {
        let v = vendedores[indice];
        v.nivel = calcularNivel(v.ventas); 
        vendedoresVIP.push(v);
        vendedores.splice(indice, 1); 
        
        pintarListaVendedores();
        pintarListaVendedoresVIP();
        deshabilitarComponente("btnMover"); 
        mostrarHtmlEnDiv("resultadoBusqueda", "<span class='muted'>Sin búsqueda aún</span>");
    }
}



function calcularNivel(ventas) { // 
    if (ventas >= 10 && ventas <= 12) return "bronce";
    if (ventas >= 13 && ventas <= 15) return "plata";
    if (ventas > 15) return "oro";
    return "bajo";
}
function calcularTotalVentas() { // [cite: 56]
    let total = 0;
    for (let i = 0; i < vendedores.length; i++) {
        total += vendedores[i].ventas;
    }
    return total;
}