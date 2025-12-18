// 1. Implementa unha función escribirNumeros(desde, ata) que xere un número cada
// segundo, comezando en “desde” e rematando en “ata”. Fai dúas variantes da
// función: unha usando setInterval e outra usando setTimeout.
// 5
// Programación asíncrona

// const escribirNumeros = (desde, ata) => {
//   if (desde < ata) {
//     for (let i = desde; i <= ata; i++) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000 + 1000 * i);
//     }
//   }
// };

const escribirNumeros2 = (desde, ata) => {
  if (desde < ata) {
    const myCallback = () => {
      console.log(desde);
      desde++;
      if (desde > ata) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(myCallback, 1000);
  }
};

escribirNumeros2(0, 10);
// escribirNumeros(0, 10);

// 2. Crea unha páxina web con un título <h1> e dous botóns. Un dos botóns debe iniciar
// un intervalo que cambie alternativamente cada segundo a cor do título <h1>
// alternando entre dúas cores, as que escollas. O outro botón debe deter o intervalo e
// parar o cambio de cores.

// variable to store our intervalID
let intervalId;
const colores = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Green',
  'GreenYellow',
  'Honeydew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquamarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];

function changeColor() {
  // check if an interval has already been set up
  intervalId ??= setInterval(flashText, 1000);
}

// function flashText() {
//   const h1 = document.querySelector('h1');
//   if (h1.style.color == colores[1]) {
//     h1.style.color = colores[0];
//   } else {
//     h1.style.color = colores[1];
//   }
// }

function flashText() {
  const h1 = document.querySelector('h1');
  let actual = h1.style.color;
  let color = Math.floor(Math.random() * colores.length);
  while (actual == color) {
    color = Math.floor(Math.random() * colores.length);
  }
  h1.style.color = colores[color];
}

function stopTextColor() {
  clearInterval(intervalId);
  // release our intervalId from the variable
  intervalId = null;
}

document.getElementById('start').addEventListener('click', changeColor);
document.getElementById('stop').addEventListener('click', stopTextColor);

// 3. Busca unha imaxe grande en internet para probar que tarda tempo en descargarse.
// Carga esa imaxe remota dende JavaScript. Cando a imaxe estea cargada, mostra
// unha mensaxe en consola
