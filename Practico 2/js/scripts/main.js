'use strict'
let createHeader = (claves) => {
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
    for (let i = 0; i < claves.length; i++) {
      let thEl = document.createElement("th");
      thEl.classList.add('bg-info')
      thEl.innerHTML = claves[i];
      trEl.appendChild(thEl);
    }
    let thElim = document.createElement('th');
    thElim.textContent = "Modificar";
    thElim.classList.add('bg-info');
    trEl.appendChild(thElim);
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
  };
//header created
let showModalElim = () => {
  overlayElim.classList.remove('display-none');
  modalElimEl.classList.remove('display-none');
};
let showModalEdit = () => {
  overlayEdit.classList.remove('display-none');
  modalEditEl.classList.remove('display-none');
}
let showModalAgregar = () => {
  overlayAgregar.classList.remove('display-none');
  modalAgregarEl.classList.remove('display-none');
}

let createRow = (elemento) => {
    let trEl = document.createElement("tr");
    for (const key in elemento) {
      let tdEl = document.createElement("td");
      tdEl.innerHTML = elemento[key];
      trEl.appendChild(tdEl);
    }
    let buttonElim = document.createElement('td');
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add('btn-primary');
    botonEliminar.classList.add('btn');
    botonEliminar.classList.add('button-margin'),
    buttonElim.appendChild(botonEliminar);
    trEl.appendChild(buttonElim);
    botonEliminar.addEventListener('click', showModalElim);
    //otro boton
    let botonModif = document.createElement('button');
    botonModif.textContent = "Editar";
    botonModif.classList.add('btn-primary');
    botonModif.classList.add('btn');
    botonModif.addEventListener('click', showModalEdit)
    buttonElim.appendChild(botonModif);

    return trEl;
  };
  btnAgregarEl.addEventListener('click', showModalAgregar);

  let createBody = (elementos) => {
    let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
      tbodyEl.appendChild(createRow(elementos[i]));
    }
    tableEl.appendChild(tbodyEl);
  };
  
  window.addEventListener("load", () => {
    createHeader(clavesPaises);
    createBody(dataParseada.paises);
  });

 


