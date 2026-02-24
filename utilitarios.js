//Muestra el mensaje en el div 
mostrarTextoEnDiv = function (idComponenteDiv, mensaje) {
    let componente;
    componente = document.getElementById(idComponenteDiv);
    componente.textContent = mensaje;
}

//Muestra el html en el div
mostrarHtmlEnDiv = function (idComponenteDiv, html) {
    let componente;
    componente = document.getElementById(idComponenteDiv);
    componente.innerHTML = html;
}
//Muestra el mensaje en la caja de texto
mostrarTextoEnCaja = function (idComponenteCaja, mensaje) {
    let componente;
    componente = document.getElementById(idComponenteCaja);
    componente.value = mensaje;
}
//recupera el texto del componente
recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}
//recupera el texto del componente como entero
recuperarEntero = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
//habilita el componente
habilitarComponente = function (idComponente){
    let componente;
    componente = document.getElementById(idComponente);
    componente.disabled=false;
}
//deshabilita el componente
desabilitarComponente = function (idComponente){
    let componente;
    componente = document.getElementById(idComponente);
    componente.disabled=true;
}

