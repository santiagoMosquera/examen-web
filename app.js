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
        
        // Agregar clase según el nivel para darle estilo
        let claseNivel = "";
        if(vendedor.nivel === "oro") {
            claseNivel = "tag vip";
        } else if(vendedor.nivel === "plata") {
            claseNivel = "tag plata";
        } else if(vendedor.nivel === "bronce") {
            claseNivel = "tag bronce";
        }
        
        tabla += "<tr>" + 
                 "<td>" + " * "+ vendedor.nombre+" "+vendedor.apellido + "</td>" +
                 "<td>"+"nivel" + ">>" + vendedor.nivel + "</td>" +
                 "</tr>";
    }
    
    tabla += "</table>";
    
    mostrarHtmlEnDiv("contenedorDerecha", tabla);
    
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




