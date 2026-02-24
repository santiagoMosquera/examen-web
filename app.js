//Ismael Hernandez
pintarListaVendedores = function(){

    let html = "<ul class='list'>";

    for (let i = 0; i < vendedores.length; i++) {

        let v = vendedores[i];

        html += "<li>" 
            + v.cedula + " | "
            + v.nombre + " " + v.apellido 
            + " | ventas: " + v.ventas 
            + "</li>";
    }

    html += "</ul>";

    mostrarHtmlEnDiv("contenedorIzquierda", html);

    let totalVentas = calcularTotalVentas();
    document.getElementById("totalVentas").innerText = totalVentas;

    document.getElementById("contadorVendedores").innerText = vendedores.length;
}

pintarListaVendedoresVIP=function() {

    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {

        let vip = vendedoresVIP[i];

        html += "<li>"
            + vip.nombre + " " + vip.apellido
            + " >> nivel: " + vip.nivel
            + "</li>";
    }

    html += "</ul>";

  
    mostrarHtmlEnDiv("contenedorDerecha", html);

    
    document.getElementById("contadorVendedoresVIP").innerText = vendedoresVIP.length;
}


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

inicializar=function(){
    pintarListaVendedores();
    pintarListaVendedoresVIP();
}
agregarVendedor=function(vendedor) {
    vendedores.push(vendedor);
}
function agregarVendedorAction() {

    let cedula = document.getElementById("txtCedula").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let ventas = parseInt(document.getElementById("txtVentas").value);

    let posicion = buscarVendedor(cedula);

    if (posicion !== -1) {

        document.getElementById("mensaje").style.display = "block";
        document.getElementById("mensaje").innerHTML = "Ya existe un vendedor con esa cédula";
        return;
    }

    let nuevoVendedor = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        ventas: ventas
    };

    agregarVendedor(nuevoVendedor);

    pintarListaVendedores();

    document.getElementById("mensaje").style.display = "none";

    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtVentas").value = "";
}
function buscarVendedor(cedula) {

    for (let i = 0; i < vendedores.length; i++) {

        if (vendedores[i].cedula === cedula) {
            return i;
        }
    }

    return -1;
}
function buscarVendedorAction() {

    let cedulaBuscar = document.getElementById("txtBuscarCedula").value;

    let posicion = buscarVendedor(cedulaBuscar);

    let resultado = document.getElementById("resultadoBusqueda");
    let botonMover = document.getElementById("btnMover");

    if (posicion === -1) {

        resultado.innerHTML = "El vendedor con dicha cédula no existe";
        botonMover.disabled = true;

    } else {

        let vendedor = vendedores[posicion];

        resultado.innerHTML = vendedor.nombre + " " + vendedor.apellido;
        botonMover.disabled = false;
    }
}
function moverAction() {

    let cedulaBuscar = document.getElementById("txtBuscarCedula").value;

    let posicion = buscarVendedor(cedulaBuscar);

    if (posicion !== -1) {

        let vendedor = vendedores[posicion];

        let nivelCalculado = calcularNivel(vendedor.ventas);

        vendedor.nivel = nivelCalculado;

        vendedoresVIP.push(vendedor);

        vendedores.splice(posicion, 1);
        
        pintarListaVendedores();
        pintarListaVendedoresVIP();

        document.getElementById("btnMover").disabled = true;

        document.getElementById("resultadoBusqueda").innerHTML = "Movido correctamente";
    }
}
function calcularNivel(ventas) {

    if (ventas >= 10 && ventas <= 12) {
        return "bronce";
    }

    if (ventas >= 13 && ventas <= 15) {
        return "plata";
    }

    if (ventas > 15) {
        return "oro";
    }

    return "sin nivel";
}
function calcularTotalVentas() {

    let total = 0;

    for (let i = 0; i < vendedores.length; i++) {
        total += vendedores[i].ventas;
    }

    return total;
}
let posicion = buscarVendedor(cedula);

if (posicion !== -1) {

    document.getElementById("mensaje").style.display = "block";
    document.getElementById("mensaje").innerHTML = "Ya existe un vendedor con esa cédula";
    return;
}
function limpiar() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtEdad").value = "";
    
  
    document.getElementById("txtNombre").focus();
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




