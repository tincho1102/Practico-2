'use strict'

//JSON con la data
let data = `{
    "paises": [
      {
        "País": 1,
        "Nombre": "Suiza",
        "Salario": "$4480",
        "Play5": "3 días y medio",
        "Iphone": "8 días",
        "Canasta": "$1890",
        "Indice": 4
      },
      {
        "País": 2,
        "Nombre": "Argentina",
        "Salario": "$101",
        "Play5": "5 meses",
        "Iphone": "1 año",
        "Canasta": "$112.5",
        "Indice": 156
      },
      {
        "País": 3,
        "Nombre": "Irlanda",
        "Salario": "$1950",
        "Play5": "7 días y medio",
        "Iphone": "19 días",
        "Canasta": "$709",
        "Indice": 9
      },
      {
        "País": 4,
        "Nombre": "Venezuela",
        "Salario": "$1.84",
        "Play5": "23 años",
        "Iphone": "56 años",
        "Canasta": "$229",
        "Indice": 179
      },
      {
        "País": 5,
        "Nombre": "Australia",
        "Salario": "$2200",
        "Play5": "5 días",
        "Iphone": "14 días",
        "Canasta": "$780",
        "Indice": 5
      },
      {
        "País": 6,
        "Nombre": "Cuba",
        "Salario": "$79",
        "Play5": "6 meses y medio",
        "Iphone": "1 año y 1 mes",
        "Canasta": "$120",
        "Indice": 178
      },
      {
        "País": 7,
        "Nombre": "Canadá",
        "Salario": "$1850",
        "Play5": "8 días y medio",
        "Iphone": "21 días",
        "Canasta": "$690",
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
  btnCancelarElim.onclick = () => {
    overlayElim.classList.add('display-none');
    modalElimEl.classList.add('display-none');

  }
};
//modal editar
let showModalEdit = (elemento, i) => {
  overlayEdit.classList.remove('display-none');
  modalEditEl.classList.remove('display-none');
  let objectValue = document.getElementById(i);
  let tdEdit = objectValue.getElementsByTagName('td')
  inputPais.value = tdEdit[0].innerHTML;
  inputNombre.value = tdEdit[1].innerHTML;
  inputSalario.value = tdEdit[2].innerHTML;
  inputplay5.value = tdEdit[3].innerHTML;
  inputIphone.value = tdEdit[4].innerHTML;
  inputCanasta.value = tdEdit[5].innerHTML;
  inputIndice.value = tdEdit[6].innerHTML;

  btnAceptarEdit.onclick = () => {
    overlayEdit.classList.add('display-none');
    modalEditEl.classList.add('display-none');
    overlayProgress.classList.remove('display-none');
    modalProgress.classList.remove('display-none');
    setTimeout(function(){
      editarFila(i);
      overlayProgress.classList.add('display-none');
      modalProgress.classList.add('display-none');
    }, 2000);
    
  };
  btnCancelarEdit.onclick = () => {
    overlayEdit.classList.add('display-none');
    modalEditEl.classList.add('display-none');
  }
};
//modal agregar
let showModalAgregar = (elemento, i) => {
  overlayAgregar.classList.remove('display-none');
  modalAgregarEl.classList.remove('display-none');
  btnCancelarAgregar.onclick = () => {
    overlayAgregar.classList.add('display-none');
    modalAgregarEl.classList.add('display-none');
  }
  btnAceptarAgregar.onclick = () => {
    overlayAgregar.classList.add('display-none');
    modalAgregarEl.classList.add('display-none');
    overlayProgress.classList.remove('display-none');
    modalProgress.classList.remove('display-none');
    setTimeout(function(){
      agregarFila(dataParseada.paises, i);
      overlayProgress.classList.add('display-none');
      modalProgress.classList.add('display-none');
    }, 2000)
  };
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
  botonEliminar.addEventListener('click', () => {
    showModalElim(i)
  });
  //Boton para editar
  let botonEdit = document.createElement('button');
  botonEdit.innerText = "Editar";
  botonEdit.classList.add('btn', 'btn-primary');
  botonEdit.addEventListener('click', () => {
    showModalEdit(dataParseada.paises, i)
  });
  botonTd.appendChild(botonEliminar);
  botonTd.appendChild(botonEdit);
  trEl.appendChild(botonTd);
  return trEl;
};
//Body
let createBody = (elementos, i) => {
  let tbodyEl = document.createElement("tbody");
  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRow(elementos[i], i));
  }
  tableEl.appendChild(tbodyEl);
};

//FUNCIONES
//Eliminar
let eliminar = (i) => {
  // let row = document.getElementById(i);

  let rowElim = dataParseada.paises.filter(pais =>pais.País != dataParseada.paises[i].País )
  tableEl.innerHTML = '';
  dataParseada.paises = rowElim;
  createHeader(clavesPaises);
  createBody(dataParseada.paises);



  // row.remove(); 
  console.log(dataParseada.paises);
  
  
  overlayElim.classList.add('display-none');
  modalElimEl.classList.add('display-none');
  selectEl.value = 'todos';

};
//Editar
const editarFila = (i) => {
  
  let nuevoPais = inputPais.value;
  let nuevoNombre = inputNombre.value;
  let nuevoSalario = inputSalario.value;
  let nuevoPlay5 = inputplay5.value;
  let nuevoIphone = inputIphone.value;
  let nuevoCanasta = inputCanasta.value;
  let nuevoIndice = inputIndice.value;
  
  let num = dataParseada.paises[i].País

  
  dataParseada.paises = dataParseada.paises.map(e => {
    if(e.País === num) {
      console.log(e.País)
      return  {
          País : nuevoPais,
          Nombre : nuevoNombre,
          Salario : nuevoSalario,
          Play5 : nuevoPlay5,
          Iphone : nuevoIphone,
          Canasta : nuevoCanasta,
          Indice : nuevoIndice
         }
    } else {
      return e
    }
  });
  tableEl.innerHTML = '';
  createHeader(clavesPaises);
  createBody(dataParseada.paises);
};


//Agregar
let agregarFila = (i) => {


//td para botones y boton eliminar
let botonTd = document.createElement('td');
let botonEliminar = document.createElement('button');
botonEliminar.innerText = "Eliminar";
botonEliminar.classList.add('btn', 'btn-primary', 'button-margin');
botonEliminar.addEventListener('click', () => {
  showModalElim(i)
});
//Boton para editar
let botonEdit = document.createElement('button');
botonEdit.innerText = "Editar";
botonEdit.classList.add('btn', 'btn-primary');
botonEdit.addEventListener('click', () => {
  showModalEdit(dataParseada.paises, i)
});
botonTd.appendChild(botonEliminar);
botonTd.appendChild(botonEdit);

  let nuevoPais = dataParseada.paises.length + 1;
  let nuevoNombre = inputNombreAgregar.value;
  let nuevoSalario = inputSalarioAgregar.value;
  let nuevoPlay5 = inputplay5Agregar.value;
  let nuevoIphone = inputIphoneAgregar.value;
  let nuevoCanasta = inputCanastaAgregar.value;
  let nuevoIndice = inputIndiceAgregar.value;

  let newRow = {
          País : nuevoPais,
          Nombre : nuevoNombre,
          Salario : nuevoSalario,
          Play5 : nuevoPlay5,
          Iphone : nuevoIphone,
          Canasta : nuevoCanasta,
          Indice : nuevoIndice,
  }
  dataParseada.paises.push(newRow);
  tableEl.innerHTML = '';
  createHeader(clavesPaises);
  createBody(dataParseada.paises);
};

// FILTROS
const filtrar = () => {
  switch (selectEl.value) {
    case 'todos':
      tableEl.innerHTML = '';
      dataParseada = JSON.parse(data)
      createHeader(clavesPaises);
      createBody(dataParseada.paises);
      break;
    case 'top10Indice':
      filtroTop10(dataParseada.paises);
      break;
  }
};
let filtroTop10 = (elemento) => {
  let filtrado = elemento.filter(pais => pais.Indice <= 10);

  tableEl.innerHTML = '';
  createHeader(clavesPaises);
  createBody(filtrado);
  console.log(dataParseada.paises);
  dataParseada.paises = filtrado
};
