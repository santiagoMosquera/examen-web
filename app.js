// =========================
//ANGEL MORALALES MALES
// =========================
// =========================
// Datos (arreglos)
//Estudiante:Kevin Macas
// =========================

let vendedores = [
  {
    cedula: "1714616123",
    nombre: "Santiago",
    apellido: "Mosquera",
    ventas: 10,
    nivel: "",
  },
  {
    cedula: "1708934242",
    nombre: "Paúl",
    apellido: "Torres",
    ventas: 12,
    nivel: "",
  },
];
let vendedoresVIP = [
  {
    cedula: "0720304056",
    nombre: "Josselyn",
    apellido: "Pillajo",
    ventas: 17,
    nivel: "oro",
  },
  {
    cedula: "1945504089",
    nombre: "Alexandra",
    apellido: "Analuisa",
    ventas: 10,
    nivel: "bronce",
  },
];

// Función para pintar la lista de vendedores

function pintarListaVendedores() {
  let html = "<ul class='list'>";
  for (let i = 0; i < vendedores.length; i++) {
    let vendedor = vendedores[i];
    html +=
      "<li>" +
      vendedor.cedula +
      " | " +
      vendedor.nombre +
      " " +
      vendedor.apellido +
      " | ventas: " +
      vendedor.ventas +
      "</li>";
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorIzquierda", html);
  mostrarTextoEnDiv("contadorVendedores", vendedores.length);
  let totalVentas = calcularTotalVentas();
  mostrarTextoEnDiv("totalVentas", "Total de ventas: " + totalVentas);
}

inicializar = function () {
  pintarListaVendedores();
  pintarListaVendedoresVIP();
};

function pintarListaVendedoresVIP() {
  let html = "<ul class='list'>";

  for (let i = 0; i < vendedoresVIP.length; i++) {
    let vendedor = vendedoresVIP[i];
    html +=
      "<li>" +
      vendedor.nombre +
      " " +
      vendedor.apellido +
      " >>  nivel: " +
      vendedor.nivel +
      "</li>";
  }
  html += "</ul>";
  mostrarHtmlEnDiv("contenedorDerecha", html);
  mostrarTextoEnDiv("contadorVendedoresVIP", vendedoresVIP.length);
}
function limpiar() {
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtVentas", "");
}

function agregarVendedor(vendedor) {
  vendedores.push(vendedor);
}
function agregarVendedorAction() {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let ventas = recuperarEntero("txtVentas");

  if (buscarVendedor(cedula) !== -1) {
    alert("Ya existe el vendedor, no se puede agregar");
  } else {
    let nuevoVendedor = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      ventas: ventas,
      nivel: "",
    };
    agregarVendedor(nuevoVendedor);
    pintarListaVendedores();
    limpiar();
  }
}

function buscarVendedor(cedula) {
  let indiceEncontrado = -1;
  for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].cedula === cedula) {
      indiceEncontrado = i;
      break;
    }
  }
  return indiceEncontrado;
}

function buscarVendedorAction() {
  let cedula = recuperarTexto("txtBuscarCedula");
  let indiceEncontrado = buscarVendedor(cedula);
  if (indiceEncontrado === -1) {
    mostrarHtmlEnDiv(



      "resultadoBusqueda",
      "<span class='error'>El vendedor con dicha cédula no existe</span>",
    );
    deshabilitarComponente("btnMover");
  } else {
    let vendedorEncontrado = vendedores[indiceEncontrado];
    mostrarHtmlEnDiv(
      "resultadoBusqueda",
      "<span class='success'>Vendedor encontrado: " +
        vendedorEncontrado.nombre +
        " " +
        vendedorEncontrado.apellido +
        "</span>",
    );
    habilitarComponente("btnMover");
  }
}

function moverAction() {
  let cedula = recuperarTexto("txtBuscarCedula");
  let indiceEncontrado = buscarVendedor(cedula);
  if (indiceEncontrado !== -1) {
    let vendedorEncontrado = vendedores[indiceEncontrado];
    vendedoresVIP.push(vendedorEncontrado);
    vendedores.splice(indiceEncontrado, 1);
    let nivelVendedor = calcularNivel(vendedorEncontrado.ventas);
    vendedorEncontrado.nivel = nivelVendedor;
    pintarListaVendedores();
    pintarListaVendedoresVIP();
    deshabilitarComponente("btnMover");
    mostrarTextoEnCaja("txtBuscarCedula", "");
    mostrarHtmlEnDiv("resultadoBusqueda", "");
  } else {



    mostrarHtmlEnDiv(
      "resultadoBusqueda",
      "<span class='error'>El vendedor con dicha cédula no existe</span>",
    );
  }
}
function calcularNivel(ventas) {
  if (ventas <= 12 && ventas > 10) {
    return "bronce";
  } else if (ventas >= 13 && ventas <= 15) {
    return "plata";
  } else if (ventas > 15) {
    {
      return "oro";
    }
  }
}

function calcularTotalVentas() {


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
