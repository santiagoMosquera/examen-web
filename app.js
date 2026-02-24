// Nombre y Apellido: Luis Aristeguieta

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


pintarListaVendedores = function(){

  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    let vendedor = vendedores[i];
    html += "<li>" 
          + vendedor.cedula + " | "
          + vendedor.nombre + " " + vendedor.apellido 
          + " | ventas: " + vendedor.ventas 
          + "</li>";
  }

  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
  mostrarTextoEnDiv("contadorVendedores", vendedores.length);

  // Total pra ventas:
  let totalVentas = 0;

for (let i = 0; i < vendedores.length; i++) {
  let vendedorActual = vendedores[i];
  let ventasActuales = vendedorActual.ventas;
  totalVentas = totalVentas + ventasActuales;
}
  mostrarTextoEnDiv("totalVentas", totalVentas)

}

// Ejercicio # 2: Funcion VendedoresVip

pintarListaVendedoresVIP = function(){

  let html = "<ul class='list'>";
  for (let i = 0; i < vendedoresVIP.length; i++) {
    let vendedorVip = vendedoresVIP[i];
    html += "<li>"
          + vendedorVip.nombre + " " + vendedorVip.apellido
          + " >>  nivel: " + vendedorVip.nivel
          + "</li>";
  }

    html += "</ul>";
  mostrarHtmlEnDiv("contenedorDerecha", html);
  mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);

}


// ejercicio 3: 

agregarVendedor = function(vendedor){
  vendedores.push(vendedor);
}

agregarVendedorAction = function(){
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas")

  // objeto con vendendor, vacio y agrego con atributos:  { cedula:"1708934242",nombre: "Paúl", apellido: "Torres", ventas:12, nivel:""},
  let vendedor = {};
  vendedor.cedula = cedula;
  vendedor.nombre = nombre;
  vendedor.apellido = apellido;
  vendedor.ventas = ventas;
  vendedor.nivel = "";

  agregarVendedor(vendedor); 
  pintarListaVendedores();

  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtVentas", "");

}

// Ejercicio 3a:

buscarVendedor = function(cedula){
   let posicionEncontrada = -1;

   for (let i = 0; i < vendedores.length; i++) {
    let vendedorActual = vendedores[i];
      if (vendedorActual.cedula == cedula) {
        posicionEncontrada = i;
        break;
    }
  }

  return posicionEncontrada;

}

// 3b:

buscarVendedorAction = function(){

  let cedulaBuscada = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedulaBuscada);

  if (posicion == -1) {
    mostrarTextoEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe ");
    deshabilitarComponente("btnMover");
  } else {
    let vendedor = vendedores[posicion];
    mostrarTextoEnDiv("resultadoBusqueda", vendedor.nombre + " " + vendedor.apellido);
    habilitarComponente("btnMover");
  }


}


// 4: 

moverAction = function(){

  let cedula = recuperarTexto("txtBuscarCedula");
  let posicion = buscarVendedor(cedula);

  if (posicion == -1) {
    return;
  }

  
  let vendedorMovido = vendedores[posicion];

  let nivelCalculado = calcularNivel(vendedorMovido.ventas);
  vendedorMovido.nivel = nivelCalculado;

  vendedoresVIP.push(vendedorMovido);

  vendedores.splice(posicion, 1);

  pintarListaVendedores();
  pintarListaVendedoresVIP();
  deshabilitarComponente("btnMover");
  mostrarTextoEnDiv("resultadoBusqueda", "Vendedor movido correctamente");

}


//5: 

calcularNivel = function(numeroVentas){

  let nivel = "";

  if (numeroVentas >= 10 && numeroVentas <= 12) {
    nivel = "bronce";
  } else if (numeroVentas >= 13 && numeroVentas <= 15) {
    nivel = "plata";
  } else if (numeroVentas > 15) {
    nivel = "oro";
  }

  return nivel;
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




