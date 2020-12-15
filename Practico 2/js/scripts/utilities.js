'use strict'

//JSON con la data
let data = `{
    "paises": [
      {
        "País": 1,
        "Nombre": "Suiza",
        "Salario minimo": "$4480",
        "Play Station 5": "3 días y medio",
        "Ultimo Iphone": "8 días",
        "Canasta basica": "$1890",
        "Indice": 4
      },
      {
        "País": 2,
        "Nombre": "Argentina",
        "Salario minimo": "$101",
        "Play Station 5": "5 meses",
        "Ultimo Iphone": "1 año",
        "Canasta basica": "$112.5",
        "Indice": 156
      },
      {
        "País": 3,
        "Nombre": "Irlanda",
        "Salario minimo": "$1950",
        "Play Station 5": "7 días y medio",
        "Ultimo Iphone": "19 días",
        "Canasta basica": "$709",
        "Indice": 9
      },
      {
        "País": 4,
        "Nombre": "Venezuela",
        "Salario minimo": "$1.84",
        "Play Station 5": "23 años",
        "Ultimo Iphone": "56 años",
        "Canasta basica": "$229",
        "Indice": 179
      },
      {
        "País": 5,
        "Nombre": "Australia",
        "Salario minimo": "$2200",
        "Play Station 5": "5 días",
        "Ultimo Iphone": "14 días",
        "Canasta basica": "$780",
        "Indice": 5
      },
      {
        "País": 6,
        "Nombre": "Cuba",
        "Salario minimo": "$79",
        "Play Station 5": "6 meses y medio",
        "Ultimo Iphone": "1 año y 1 mes",
        "Canasta basica": "$120",
        "Indice": 178
      },
      {
        "País": 7,
        "Nombre": "Canadá",
        "Salario minimo": "$1850",
        "Play Station 5": "8 días y medio",
        "Ultimo Iphone": "21 días",
        "Canasta basica": "$690",
        "Indice": 7
      }
    ]
  }
  `
//Data parseada y KEYS 
let dataParseada = JSON.parse(data);
let clavesPaises = Object.keys(dataParseada.paises[0]);

  // MODALS
    //modal eliminar
    let showModalElim = (i) => {
      overlayElim.classList.remove('display-none');
      modalElimEl.classList.remove('display-none');
      btnAceptarElim.onclick = () => {
        eliminar(i)
      };
      btnCancelarElim.onclick = () =>{
        overlayElim.classList.add('display-none');
        modalElimEl.classList.add('display-none');

      }
    };
    //modal editar
    let showModalEdit = (elemento, i) => {
      overlayEdit.classList.remove('display-none');
      modalEditEl.classList.remove('display-none');
      let arregloValues = Object.values(elemento[i])
      inputPais.value = arregloValues[0];
      inputNombre.value = arregloValues[1];
      inputSalario.value = arregloValues[2];
      inputplay5.value = arregloValues[3];
      inputIphone.value = arregloValues[4];
      inputCanasta.value = arregloValues[5];
      inputIndice.value = arregloValues[6];
      btnAceptarEdit.onclick = () => {
        editarFila(elemento, i)
      };
    };
    //modal agregar
    let showModalAgregar = () => {
      overlayAgregar.classList.remove('display-none');
      modalAgregarEl.classList.remove('display-none');
    };

//Head, Rows y Body de la tabla dinamica
    //Header
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
  thElim.innerText = "Modificar";
  thElim.classList.add('bg-info');
  trEl.appendChild(thElim);
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
};
    //Rows
  let createRow = (elemento, i) => {
    let trEl = document.createElement("tr");
    trEl.setAttribute("id", i);
    for (const key in elemento) {
      let tdEl = document.createElement("td");
      tdEl.innerHTML = elemento[key];
      trEl.appendChild(tdEl);
    };
    //td para botones y boton eliminar
    let botonTd = document.createElement('td');
    let botonEliminar = document.createElement('button');
    botonEliminar.innerText = "Eliminar";
    botonEliminar.classList.add('btn', 'btn-primary', 'button-margin');
    botonEliminar.addEventListener('click', () =>{
      showModalElim(i)
    });
    botonTd.appendChild(botonEliminar);
    trEl.appendChild(botonTd);
    //Boton para editar
    let botonModif = document.createElement('button');
    botonModif.innerText = "Editar";
    botonModif.classList.add('btn', 'btn-primary');
    botonModif.addEventListener('click', () =>{
      showModalEdit(dataParseada.paises, i)
    })
    botonTd.appendChild(botonModif);
    return trEl;
  };
    //Body
    let createBody = (elementos) => {
      let tbodyEl = document.createElement("tbody");
      for (let i = 0; i < elementos.length; i++) {
        tbodyEl.appendChild(createRow(elementos[i], i));
      }
      tableEl.appendChild(tbodyEl);
    };

    //FUNCIONES
    //Eliminar
    let eliminar = (i) => {
      let rowElim = dataParseada.paises.filter(pais =>pais.País != dataParseada.paises[i].País);
      dataParseada.paises = rowElim
      tableEl.innerHTML ='';
      createHeader(clavesPaises);
      createBody(rowElim);
      // tableEl = '';
      // createHeader(clavesPaises);
      // createBody(rowElim);
      // if(rowElim.parentNode){
      //   rowElim.parentNode.removeChild(rowElim);
      // }
      overlayElim.classList.add('display-none');
      modalElimEl.classList.add('display-none');
    };
    //Editar
    let editarFila = (elemento, i) =>{
      let arregloValues = Object.values(elemento[i])
      arregloValues[0] = inputPais.value;
      arregloValues[1] = inputNombre.value;
      arregloValues[2] = inputSalario.value;
      arregloValues[3] = inputplay5.value;
      arregloValues[4] = inputIphone.value;
      arregloValues[5] = inputCanasta.value;
      arregloValues[6] = inputIndice.value;
      overlayEdit.classList.add('display-none');
      modalEditEl.classList.add('display-none');
    };

    // FILTRO
    const filtrar = () => {
      switch (selectEl.value) {
        case 'todos':
          tableEl.innerHTML = '';
          createHeader(clavesPaises);
          createBody(dataParseada.paises);
          break;
        case 'top10Indice':
          filtroTop10();
          break;
        case 'Notop10Indice':
          filtroNoTop10();
          break;  
      }
    };
    let filtroTop10 = () => {
      let filtrado = dataParseada.paises.filter(pais => pais.Indice <= 10);
      tableEl.innerHTML = '';
      createHeader(clavesPaises);
      createBody(filtrado);
    };
    let filtroNoTop10 = () => {
      let filtrado = dataParseada.paises.filter(pais => pais.Indice > 10);
      tableEl.innerHTML = '';
      createHeader(clavesPaises);
      createBody(filtrado);
    };