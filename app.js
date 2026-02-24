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
    
    
    mostrarHtmlEnDiv("contenedorIzquierda", tabla);}

// EJERCICIO 2
pintarListaVendedoresVIP = function() {
    let vendedor = {};
    let tabla = "<table class='table'>";
    
    for(let i = 0; i < vendedoresVIP.length; i++) {
        vendedor = vendedoresVIP[i];
        
        tabla += "<tr>" + 
                 "<td>" + " * "+ vendedor.nombre+" "+vendedor.apellido + "</td>" +
                 "<td>"+"nivel" + ">>" + vendedor.nivel + "</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    
    mostrarHtmlEnDiv("contenedorDerecha", tabla);
    
  }

  //EJERCICIO 3

  // Función que recibe un vendedor y lo agrega al arreglo
agregarVendedor = function(vendedor) {
    vendedores.push(vendedor);
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




