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

    //mostrar contador (ejercicio 7)
    mostrarTextoEnDiv("contadorVendedores", vendedores.length);
    
    mostrarHtmlEnDiv("contenedorIzquierda", html);

    let totalVentas = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas", totalVentas);
}

// Función para pintar la lista de vendedores VIP
function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {
        let vendedorVIP = vendedoresVIP[i];
        html += "<li>" + vendedorVIP.nombre + " " + vendedorVIP.apellido + " >> nivel: " + vendedorVIP.nivel + "</li>";
    }
    
    html += "</ul>";
    
    mostrarHtmlEnDiv("contenedorDerecha", html);

      //mostrar contador VIP (ejercicio 7)
      mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
  }

//EJERCICIO 3
function agregarVendedor(vendedor) {
    vendedores.push(vendedor);
    pintarListaVendedores();
}

// EJERCICIO 3 - parte 1 - (ejercicio 8)
function agregarVendedorAction() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");
    
    if (cedula === "") {
        alert("Debe ingresar una cédula");
        return;
    }
    let posicionExistente = buscarVendedor(cedula);
    
    if (posicionExistente !== -1) {
        alert("Ya existe un vendedor con la cédula " + cedula + ", No se puede agregar");
        mostrarTextoEnCaja("txtCedula", "");
    } else {
        let nuevoVendedor = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            ventas: ventas,
            nivel: ""
        };
        
        agregarVendedor(nuevoVendedor);
        
        mostrarTextoEnCaja("txtCedula", "");
        mostrarTextoEnCaja("txtNombre", "");
        mostrarTextoEnCaja("txtApellido", "");
        mostrarTextoEnCaja("txtVentas", "");
    }
}

inicializar = function() {
    pintarListaVendedores();
    pintarListaVendedoresVIP();
}

//EJERCICIO 3 - parte 2
function buscarVendedor(cedula) {
    let posicion = -1;
    
    for (let i = 0; i < vendedores.length; i++) {
        if (vendedores[i].cedula === cedula) {
            posicion = i;
            break;
        }
    } 
    return posicion;
}

function buscarVendedorAction() {
    let cedulaBuscar = recuperarTexto("txtBuscarCedula");
  
    let posicionEncontrada = buscarVendedor(cedulaBuscar);
    
    let resultadoBusqueda = document.getElementById("resultadoBusqueda");
    
    if (posicionEncontrada === -1) {
        resultadoBusqueda.innerHTML = "<span class='muted'>El vendedor con cédula " + cedulaBuscar + " no existe</span>";
        
        deshabilitarComponente("btnMover");
    } else {
        let vendedorEncontrado = vendedores[posicionEncontrada];
        
        resultadoBusqueda.innerHTML = "<span>Vendedor encontrado: " + vendedorEncontrado.nombre + " " + vendedorEncontrado.apellido + "</span>";

        habilitarComponente("btnMover");
        indiceEncontrado = posicionEncontrada;
    }
}

let indiceEncontrado = -1;
function limpiarBusqueda() {
    indiceEncontrado = -1;
    deshabilitarComponente("btnMover");
    document.getElementById("resultadoBusqueda").innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
    mostrarTextoEnCaja("txtBuscarCedula", "");
}

//EJERCICIO 4
function moverAction(){
    let recuperarCedula = recuperarTexto("txtBuscarCedula");
    let posicionEncontrada = buscarVendedor(recuperarCedula);
    
    //parte del ejercicio 5
    let vendedorMover = vendedores[posicionEncontrada];
    let nivelCalculado = calcularNivel(vendedorMover.ventas);
    vendedorMover.nivel = nivelCalculado;
    vendedoresVIP.push(vendedorMover);
    
    vendedores.splice(posicionEncontrada, 1);

      pintarListaVendedores();
      pintarListaVendedoresVIP();
}

//EJERCICIO 5
function calcularNivel(ventas) {
  let nivel = "";

  if(ventas >= 10 && ventas <= 12) {
    nivel = "bronce";
}else if(ventas >= 13 && ventas <= 15) {
    nivel = "plata";
}else if(ventas > 15) {
    nivel = "oro";
}
return nivel;
}

//EJERCICIO 6
function calcularTotalVentas(){
    let totalVentas = 0;

    for (let i = 0; i < vendedores.length; i++) {
        totalVentas += vendedores[i].ventas;
    }
    return totalVentas;
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
