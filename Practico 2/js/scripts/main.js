'use strict'

//CREAR TABLA
window.addEventListener("load", () => {
  createHeader(clavesPaises);
  createBody(dataParseada.paises);
});
//Boton para filtrar
btnFiltrar.addEventListener('click', filtrar);
//


  //Llamada boton agregar
  btnAgregarEl.addEventListener('click', showModalAgregar);
