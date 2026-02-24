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


inicializar = function () {
  pintarListaVendedores();
  pintarListaVendedoresVIP();
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
buscarVendedor = function(cedulaVendedor){
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

//c)

//d)

// =========================
// Búsqueda / movimiento
// =========================
function limpiarBusqueda() {
  indiceEncontrado = -1;
  btnMover.disabled = true;
  resultadoBusquedaEl.innerHTML = "<span class='muted'>Sin búsqueda aún</span>";
  telefonoBuscarEl.value = "";
}




