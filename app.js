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
//ejercicio 1 
function pintarListaVendedores() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedores.length; i++) {
        html += `<li>${vendedores[i].cedula} | ${vendedores[i].nombre} ${vendedores[i].apellido} | ventas: ${vendedores[i].ventas}</li>`;
    }

    html += "</ul>";

    mostrarHtmlEnDiv("contenedorIzquierda", html);
    let total = calcularTotalVentas();
    mostrarHtmlEnDiv("totalVentas", `<span>Total de Ventas: ${total}</span>`);

    mostrarHtmlEnDiv("contadorVendedores", `<span>Cantidad de Vendedores: ${vendedores.length}</span>`);


}

//ejercicio 2

function pintarListaVendedoresVIP() {
    let html = "<ul class='list'>";

    for (let i = 0; i < vendedoresVIP.length; i++) {
        html += `<li> ${vendedoresVIP[i].nombre} ${vendedoresVIP[i].apellido} | nivel: ${vendedoresVIP[i].nivel}</li>`;
    }

    html += "</ul>";

   
    mostrarHtmlEnDiv("contenedorDerecha", html);
      mostrarHtmlEnDiv("contadorVendedoresVIP", `<span>Cantidad de Vendedores VIP: ${vendedoresVIP.length}</span>`);
}

//ejercicio 3

function agregarVendedor(vendedor) {
  vendedores.push(vendedor);
 pintarListaVendedores();
}

//ejercicio 4 

function agregarVendedorAction(){
let cedula = recuperarTexto("txtCedula");
let nombre = recuperarTexto("txtNombre");
let apellido = recuperarTexto("txtApellido");
let ventas = recuperarEntero("txtVentas");

  
  let vendedor={
    cedula:cedula,
    nombre:nombre,
    apellido:apellido,
    ventas:ventas,
    nivel:""
  }
  agregarVendedor(vendedor);
  let existente = buscarVendedor(cedula);
    if (existente !== -1) {
        alert("Ya existe el vendedor,prueba con otro");
        limpiar();
    } else {
        agregarVendedor(vendedor);
        limpiar();
    }
    

}

// ejercicio 5

function buscarVendedor(cedula) {
  let possition =-1;
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula === cedula) {
       possition = i;
      break;
    }
  }
  return possition;

}



//ejercicio 6

function buscarVendedorAction(){
  let cedula = recuperarTexto("txtBuscarCedula");
  let encontrado = buscarVendedor(cedula);

  if (encontrado !== -1) {
    // Mostrar el resultado en el div resultadoBusqueda
mostrarHtmlEnDiv(
    "resultadoBusqueda",
    `<span >
        Vendedor encontrado: ${vendedores[encontrado].nombre} ${vendedores[encontrado].apellido}
    </span>` 
);
habilitarComponente("btnMover");

  } else {
    mostrarHtmlEnDiv(
      "resultadoBusqueda",
       `<span >
       Vendedor no encontrado
       </span>`
      );
  }
}

//ejercicio 7

function moverAction(){
  let cedula = recuperarTexto("txtBuscarCedula");
  let encontrado = buscarVendedor(cedula);  

  if (encontrado !== -1) {
    let vendedor = vendedores[encontrado];
    vendedor.nivel = "plata";
    vendedoresVIP.push(vendedor);
    vendedores.splice(encontrado, 1);
    let nivel = calcularNivel(vendedor.ventas);
    vendedor.nivel = nivel;
    pintarListaVendedores();
    pintarListaVendedoresVIP();
   limpiarBusqueda();

     btnMover.disabled = true;


  }
}
//ejercicio 8

function calcularNivel(ventas) {
  if (ventas >= 10 && ventas <= 12) {
        return "bronce";
    } else if (ventas >= 13 && ventas <= 15) {
        return "plata";
    } else if (ventas > 15) {
        return "oro";
}
}

function calcularTotalVentas(){
 let total =0;
 for (let i = 0; i < vendedores.length; i++) {
    total += vendedores[i].ventas;
 }
 return total;


}; 

//ejercicio 8

function limpiar() {
recuperarTexto("txtCedula","");
recuperarTexto("txtNombre","");
recuperarTexto("txtApellido","");
 recuperarEntero("txtVentas",0);
}



inicializar=function(){
  pintarListaVendedores();
  pintarListaVendedoresVIP();
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




