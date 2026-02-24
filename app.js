//Ismael Hernandez
pintarListaVendedores=function(){

    let html = "<ul class='list'>";
    let total = 0;

  
    for (let i = 0; i < vendedores.length; i++) {

        let v = vendedores[i];

        html += "<li>" 
            + v.cedula + " | "
            + v.nombre + " " + v.apellido 
            + " | ventas: " + v.ventas 
            + "</li>";

        total += v.ventas;
    }
    }
     html += "</ul>";

    mostrarHtmlEnDiv("contenedorIzquierda", html);

    document.getElementById("totalVentas").innerText = total;
    
    document.getElementById("contadorVendedores").innerText = vendedores.length;

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



// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




