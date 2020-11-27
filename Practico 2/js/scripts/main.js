'use strict'
let createHeader = (claves) => {
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
    for (let i = 0; i < claves.length; i++) {
      let thEl = document.createElement("th");
      thEl.innerHTML = claves[i];
      trEl.appendChild(thEl);
    }
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
  };
//header created

let createRow = (elemento) => {
    let trEl = document.createElement("tr");
    for (const key in elemento) {
      let tdEl = document.createElement("td");
      tdEl.innerHTML = elemento[key];
      trEl.appendChild(tdEl);
    }
    return trEl;
  };

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
