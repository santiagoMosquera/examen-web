// Alumno: Salcedo Mena Lenin Marcelo


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

// EJERCICIO 1

pintarListaVendedores = function() {
    let vendedor = {};
    let tabla = "<table >" 
    
    for(let i = 0; i < vendedores.length; i++) {
        vendedor = vendedores[i];
        tabla += "<tr>" + 
                 "<td>" + vendedor.cedula+"|" + "</td>" +
                 "<td>" + vendedor.nombre+" "+vendedor.apellido + "</td>" +
                 "<td>" +"|"+ "Ventas: "+vendedor.ventas +"|" +"</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    
    // del ejercioci 6
    let total = calcularTotalVentas();
    mostrarTextoEnDiv("totalVentas", total);
    
    mostrarHtmlEnDiv("contenedorIzquierda", tabla);

    // EJERCICIO 7
    mostrarTextoEnDiv("contadorVendedores", vendedores.length);
  }

// EJERCICIO 2
pintarListaVendedoresVIP = function() {
    let vendedor = {};
    let tabla = "<table ";
    
    for(let i = 0; i < vendedoresVIP.length; i++) {
        vendedor = vendedoresVIP[i];
        
        tabla += "<tr>" + 
                 "<td>" + " * "+ vendedor.nombre+" "+vendedor.apellido + "</td>" +
                 "<td>"+"nivel" + ">>" + vendedor.nivel + "</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    
    mostrarHtmlEnDiv("contenedorDerecha", tabla);
     // EJERCICIO 7
    mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
  }

  //EJERCICIO 3


agregarVendedor = function(vendedor) {
    vendedores.push(vendedor);
}


agregarVendedorAction = function() {
    // a) Tomar valores de las cajas de texto
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let ventas = recuperarEntero("txtVentas");
    
    
    if(cedula == "" || nombre == "" || apellido =="" || isNaN(ventas)) {
        mostrarTextoEnDiv("mensaje", "Por favor complete todos los campos");
                document.getElementById("mensaje").style.display = "block";
        return;
    }

    if(isNaN(cedula)){
        mostrarTextoEnDiv("mensaje", "ingrese numeros");
        document.getElementById("mensaje").style.display = "block";
        return;}
   
        if(!isNaN(nombre) && !isNaN(apellido))
        {
        mostrarTextoEnDiv("mensaje", "ingrese solo letras");
        document.getElementById("mensaje").style.display = "block";
        return;}
    
    // b) Crear objeto vendedor
    let nuevoVendedor = {};
    
    // c) Agregar los valores
    nuevoVendedor.cedula = cedula;
    nuevoVendedor.nombre = nombre;
    nuevoVendedor.apellido = apellido;
    nuevoVendedor.ventas = ventas;
    nuevoVendedor.nivel = ""; 
    
    // d) Invocar a agregarVendedor
    agregarVendedor(nuevoVendedor);
    
    // e) Refrescar pantalla
    pintarListaVendedores();
    
}

// Ejercicio 3--parte 2

// a) Función que busca vendedor por cédula
buscarVendedor = function(cedula) {
    for(let i = 0; i < vendedores.length; i++) {
        if(vendedores[i].cedula == cedula) {
            return i; 
        }
    }
    return -1; 
}

// b) Función que se invoca desde el botón Buscar
buscarVendedorAction = function() {
    let cedulaBuscar = recuperarTexto("txtBuscarCedula");
    
    if(cedulaBuscar === "") {
        mostrarTextoEnDiv("resultadoBusqueda", "Ingrese una cédula para buscar");
        desHabilitarComponente("btnMover");
        indiceEncontrado = -1;
        return;
    }
    
    let posicion = buscarVendedor(cedulaBuscar);
    indiceEncontrado = posicion; 
    
    if(posicion === -1) {
        mostrarTextoEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
        desHabilitarComponente("btnMover");
    } else {
        let vendedor = vendedores[posicion];
        mostrarTextoEnDiv("resultadoBusqueda", vendedor.nombre + vendedor.apellido+ " - " + "Ventas:"+ vendedor.ventas);
        // d) Habilitar botón Mover
        habilitarComponente("btnMover");
    }
}

// Ejercicio 4

moverAction = function() {
    // 1. Recuperar texto de búsqueda
    let cedulaBuscar = recuperarTexto("txtBuscarCedula");
    
    // 2. Invocar a buscarVendedor
    let posicion = buscarVendedor(cedulaBuscar);
    
    if(posicion === -1) {
        mostrarTextoEnDiv("resultadoBusqueda", "El vendedor ya no existe");
        desHabilitarComponente("btnMover");
        return;
    }
    
    // 3. Recuperar el vendedor del arreglo
    let vendedorEncontrado = vendedores[posicion];
    
    // 4. Agregar al arreglo vendedoresVIP
    vendedoresVIP.push(vendedorEncontrado);
    
    // 5. Borrar del arreglo vendedores usando splice
    vendedores.splice(posicion, 1);
    
    // 6. Refrescar pantalla
    pintarListaVendedores();
    pintarListaVendedoresVIP();
    
    // Limpiar búsqueda y deshabilitar botón
    mostrarTextoEnDiv("resultadoBusqueda", "Vendedor movido exitosamente");
    desHabilitarComponente("btnMover");
    mostrarTextoEnCaja("txtBuscarCedula", "");

    //parte del ejercioco 5
    let nivel = calcularNivel(vendedorEncontrado.ventas);
    vendedorEncontrado.nivel = nivel;
    
}

// Ejercicio 5
calcularNivel = function(ventas) {
    if(ventas >= 10 && ventas <= 12) {
        return "bronce";
    } else if(ventas >= 13 && ventas <= 15) {
        return "plata";
    } else if(ventas > 15) {
        return "oro";
    } else {
        return "sin nivel"; 
    }
}

//Ejercicio 6:

calcularTotalVentas = function() {
    let total = 0;
    for(let i = 0; i < vendedores.length; i++) {
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




