//alumno Becker Julian Del Salto Leon
// =========================
// Datos (arreglos)
// =========================
let vendedores = [
  { cedula: "1714616123", nombre: "Santiago", apellido: "Mosquera", ventas: 10, nivel: "" },
  { cedula: "1708934242", nombre: "Paúl", apellido: "Torres", ventas: 12, nivel: "" },
];

let vendedoresVIP = [
  { cedula: "0720304056", nombre: "Josselyn", apellido: "Pillajo", ventas: 17, nivel: "oro" },
  { cedula: "1945504089", nombre: "Alexandra", apellido: "Analuisa", ventas: 10, nivel: "bronce" },

];

//Ejercicio 1
pintarListaVendedores = function () {
  let contenido = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    let vendedor = vendedores[i];
    contenido += "<li>" + vendedor.cedula
      + " | " + vendedor.nombre + " " + vendedor.apellido
      + " | ventas: " + vendedor.ventas + "</li>";
  }
  contenido += "</ul>";

  mostrarHtmlEnDiv("contenedorIzquierda", contenido);

  let total = calcularTotalVentas();
  mostrarTextoEnDiv("totalVentas", total);
}
//ejercicio2
pintarListaVendedoresVIP = function () {
  let contenido = "<ul class='list'>";
  for (let i = 0; i < vendedoresVIP.length; i++) {
    let vendedorV = vendedoresVIP[i];
    contenido += "<li>" + vendedorV.nombre + " "
      + vendedorV.apellido
      + " >> nivel: " + vendedorV.nivel + "</li>";
  }
  contenido += "</ul>";

  mostrarHtmlEnDiv("contenedorDerecha", contenido);
}

//ejercicio 3
agregarVendedor = function (vendedor) {
  vendedores.push(vendedor);
  pintarListaVendedores();
}


agregarVendedorAction = function () {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas");

  let nuevoVendedor = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    ventas: ventas,
    nivel: ""
  };
  agregarVendedor(nuevoVendedor);
}

//a)
buscarVendedor = function (cedulaVendedor) {
  let posicion = -1;
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula == cedulaVendedor) {
      posicion = i;
      break;
    }
  }
  return posicion;
}
//b)
buscarVendedorAction = function () {
  let cedulaABuscar = recuperarTexto("txtBuscarCedula");
  let busqueda = buscarVendedor(cedulaABuscar);

  if (busqueda != -1) {
    let vendedor = vendedores[busqueda];
    mostrarHtmlEnDiv("resultadoBusqueda", vendedor.nombre + " " + vendedor.apellido);
    habilitarComponente("btnMover");
  } else {
    mostrarHtmlEnDiv("resultadoBusqueda", "El vendedor con dicha cédula no existe");
  }
}

//ejercicio 4
function moverAction() {
    let cedulaABuscar = recuperarTexto("txtBuscarCedula");
    let resultadoBusqueda = buscarVendedor(cedulaABuscar);
    // validar si el vendedor existe 
    if (resultadoBusqueda != -1) {
        let vendedorRecuperado = vendedores[resultadoBusqueda];
        let nivelCalculado = calcularNivel(vendedorRecuperado.ventas);
        vendedorRecuperado.nivel = nivelCalculado;
        vendedoresVIP.push(vendedorRecuperado);
        //Borrar el vendedor del arreglo vendedores usando splice 
        vendedores.splice(resultadoBusqueda, 1);
        // 6. Refrescar en pantalla las dos listas para ver los cambios 
        pintarListaVendedores();
        pintarListaVendedoresVIP();
    }
}

//ejercicio 5
function calcularNivel(ventas) {
    let nivel = "";
    if (ventas >= 10 && ventas <= 12) {
        nivel = "bronce";
    } else if (ventas >= 13 && ventas <= 15) {
        nivel = "plata";
    } else if (ventas > 15) {
        nivel = "oro";
    } else {
        nivel = "sin nivel";
    }  
    return nivel;
}

//ejercicio 6
function calcularTotalVentas() {
    let totalVentas = 0;
    //recorrer el arreglo y sumar las ventas
    for (let i = 0; i < vendedores.length; i++) {
        totalVentas = totalVentas + vendedores[i].ventas;
    }
    return totalVentas;
}


inicializar = function () {
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




