let data = `{
    "paises": [
      {
        "País": "Suiza",
        "Salario minimo": "$4480",
        "Play Station 5": "3 días y medio",
        "Ultimo Iphone": "8 días",
        "Transporte público": "1244 viajes",
        "Canasta basica": "$1890",
        "Indice Libertad": "#4"
      },
      {
        "País": "Argentina",
        "Salario minimo": "$101",
        "Play Station 5": "5 meses",
        "Ultimo Iphone": "1 año",
        "Transporte público": "937 viajes",
        "Canasta basica": "$112.5",
        "Indice Libertad": "#156"
      },
      {
        "País": "Irlanda",
        "Salario minimo": "$1950",
        "Play Station 5": "7 días y medio",
        "Ultimo Iphone": "19 días",
        "Transporte público": "1142 viajes",
        "Canasta basica": "$709",
        "Indice Libertad": "#9"
      },
      {
        "País": "Venezuela",
        "Salario minimo": "$1.84",
        "Play Station 5": "23 años",
        "Ultimo Iphone": "56 años",
        "Transporte público": "27 viajes",
        "Canasta basica": "$229",
        "Indice Libertad": "#179"
      },
      {
        "País": "Australia",
        "Salario minimo": "$2200",
        "Play Station 5": "5 días",
        "Ultimo Iphone": "14 días",
        "Transporte público": "1100 viajes",
        "Canasta basica": "$780",
        "Indice Libertad": "#5"
      },
      {
        "País": "Chile",
        "Salario minimo": "$425",
        "Play Station 5": "1 mes y medio",
        "Ultimo Iphone": "2 meses y medio",
        "Transporte público": "420 viajes",
        "Canasta basica": "$92",
        "Indice Libertad": "#10"
      },
      {
        "País": "Canadá",
        "Salario minimo": "$1850",
        "Play Station 5": "8 días y medio",
        "Ultimo Iphone": "21 días",
        "Transporte público": "1100 viajes",
        "Canasta basica": "$690",
        "Indice Libertad": "#7"
      }
    ]
  }
  `

let dataParseada = JSON.parse(data);
let clavesPaises = Object.keys(dataParseada.paises[0]);