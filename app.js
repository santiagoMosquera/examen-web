//Ismael Hernandez
// =========================
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
function inicializar(){
    pintarListaVendedores();
    pintarListaVendedoresVIP();
    document.getElementById("btnMover").disabled = true;
}

function pintarListaVendedores(){
    let html = "<ul>";
    for (let i = 0; i < vendedores.length; i++) {
        let v = vendedores[i];
        html += "<li>" + v.cedula + " | " + v.nombre + " " + v.apellido + " | ventas: " + v.ventas + "</li>";
    }
    html += "</ul>";
    document.getElementById("contenedorIzquierda").innerHTML = html;
    document.getElementById("totalVentas").innerText = calcularTotalVentas();
    document.getElementById("contadorVendedores").innerText = vendedores.length;
}

function pintarListaVendedoresVIP(){
    let html = "<ul>";
    for (let i = 0; i < vendedoresVIP.length; i++) {
        let v = vendedoresVIP[i];
        html += "<li>" + v.nombre + " " + v.apellido + " | nivel: " + v.nivel + "</li>";
    }
    html += "</ul>";
    document.getElementById("contenedorDerecha").innerHTML = html;
    document.getElementById("contadorVendedoresVIP").innerText = vendedoresVIP.length;
}

function agregarVendedorAction(){
    let cedula = document.getElementById("txtCedula").value.trim();
    let nombre = document.getElementById("txtNombre").value.trim();
    let apellido = document.getElementById("txtApellido").value.trim();
    let ventas = parseInt(document.getElementById("txtVentas").value);

    if(cedula === "" || nombre === "" || apellido === "" || isNaN(ventas)) return;

    if(buscarVendedor(cedula) !== -1){
        document.getElementById("mensaje").innerText = "Ya existe un vendedor";
        return;
    }

    vendedores.push({ cedula, nombre, apellido, ventas, nivel:"" });

    pintarListaVendedores();
    limpiar();
    document.getElementById("mensaje").innerText = "";
}

function buscarVendedor(cedula){
    for(let i = 0; i < vendedores.length; i++){
        if(vendedores[i].cedula === cedula) return i;
    }
    return -1;
}

function buscarVendedorAction(){
    let cedula = document.getElementById("txtBuscarCedula").value.trim();

    let pos = buscarVendedor(cedula);

    let btn = document.getElementById("btnMover");

    if(pos === -1){
        document.getElementById("resultadoBusqueda").innerText = "No existe";

        btn.disabled = true;
    }else{
        let v = vendedores[pos];

        document.getElementById("resultadoBusqueda").innerText = v.nombre + " " + v.apellido;
        
        btn.disabled = false;
    }
}

function moverAction(){
    let cedula = document.getElementById("txtBuscarCedula").value.trim();
    let pos = buscarVendedor(cedula);

    if(pos !== -1){
        let v = vendedores[pos];

        v.nivel = calcularNivel(v.ventas);

        vendedoresVIP.push(v);

        vendedores.splice(pos,1);

        pintarListaVendedores();

        pintarListaVendedoresVIP();

        document.getElementById("btnMover").disabled = true;

        document.getElementById("resultadoBusqueda").innerText = "Movido";

        limpiarBusqueda();
    }
}

function calcularNivel(ventas){
    if(ventas >= 10 && ventas <= 12) return "bronce";

    if(ventas >= 13 && ventas <= 15) return "plata";

    if(ventas > 15) return "oro";

    return "sin nivel";
}

function calcularTotalVentas(){
    let total = 0;
    for(let i = 0; i < vendedores.length; i++){
        total += vendedores[i].ventas;
    }
    return total;
}

function limpiar(){
    document.getElementById("txtCedula").value = "";

    document.getElementById("txtNombre").value = "";

    document.getElementById("txtApellido").value = "";

    document.getElementById("txtVentas").value = "";
}

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda(){
    document.getElementById("txtBuscarCedula").value = "";
    document.getElementById("btnMover").disabled = true;
}




