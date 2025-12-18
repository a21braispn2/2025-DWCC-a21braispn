// 1. Repite os exercicios onde se mostraba información das gatas e o do heroes usando
// a API fetch.

fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let resultado = '';
    let lista = [];

    for (const gata of data) {
      lista.push(gata.name);
    }
    resultado = lista.join(', ');
    console.log(`Os nomes das gatas son ${resultado}`);

    let gatiños = 0;
    let femias = 0;
    let machos = 0;

    for (const gata of data) {
      for (const kitten of gata.kittens) {
        gatiños++;
        if (kitten.gender == 'f') {
          femias++;
        } else {
          machos++;
        }
      }
    }
    console.log(`Hai ${gatiños} gatiños: ${femias} femias e ${machos} machos`);
  });

// 2. Crea unha páxina web que mostre información de persoas recibida da API RANDOM
// USER GENERATOR.
// A API RANDOM USER GENERATOR permite xerar información aleatoria de
// persoas. Debes facer unha petición á URL https://randomuser.me/api/ para obter
// información en formato JSON. Crea unha páxina web onde se amose o nome e
// apelidos, correo electrónico, teléfono, cidade, país, idade e foto da información
// recibida.
// 33
// Programación asíncrona
// Cando se cargue a páxina por primira vez debe mostrar información dunha persoa
// aleatoria.
// Engade un botón á páxina que permita cargar os datos doutra persoa.

const ul = document.querySelector('.lista');
const img = document.querySelector('img');
const boton = document.querySelector('.boton');

let nome = document.createElement('li');

const persona = () => {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      img.setAttribute('src', data.results[0].picture.large);
      nome.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
      ul.append(nome);
    });
};

persona();

boton.addEventListener('click', persona);
