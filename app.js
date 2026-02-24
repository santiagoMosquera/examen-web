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
}

// EJERCICIO 1

pintarListaVendedores = function() {
    let vendedor = {};
    let tabla = "<table class='table'>" +
                "<tr>" +
                "<th>CÉDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>VENTAS</th>" +
                "</tr>";
    
    for(let i = 0; i < vendedores.length; i++) {
        vendedor = vendedores[i];
        tabla += "<tr>" + 
                 "<td>" + vendedor.cedula + "</td>" +
                 "<td>" + vendedor.nombre + "</td>" +
                 "<td>" + vendedor.apellido + "</td>" +
                 "<td>" + vendedor.ventas + "</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    
    
    mostrarHtmlEnDiv("contenedorIzquierda", tabla);}

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




