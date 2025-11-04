// 1. Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
// unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
// seguintes comandos farán exactamente o mesmo?:
// a. elemento.append(document.createTextNode(text));
// b. elemento.innerHTML = text; ---
// c. elemento.textContent = text;

// 2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
// eliminar todos os <li> da lista.
document.querySelector('ol').innerHTML = '';

// 3. Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a
// táboa?
// <table id="taboa">
// Texto
// <tr>
// <td>Test</td>
// </tr>
// </table>
// let taboa = document.getElementById("taboa");
// taboa.remove();

// O texto "Texto" non está dentro de ningunha etiqueta <td> nin é parte do contido da táboa, é un nodo de texto separado dentro do elemento <table>, pero fora do corpo da táboa.

// 4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
// elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
// navegador.
let lista = document.getElementById('minhaLista');

for (let i = 1; i <= 4; i++) {
  let li = document.createElement('li');
  li.textContent = 'Elemento ' + i;
  lista.appendChild(li);
}
// 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li>
// seguintes:
// <ul id="listaULExercicio5">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>

let li2 = document.createElement('li');
li2.textContent = '2';

let li3 = document.createElement('li');
li3.textContent = '3';

let lista2 = document.getElementById('listaULExercicio5');
let li4 = document.getElementById('two');

lista2.insertBefore(li2, li4);
lista2.insertBefore(li3, li4);

// 6. Descarga os ficheiros fonte 05-modificandoDOM.html e 05-modificandoDOM.js e
// realiza as tarefas propostas no propio ficheiro JavaScript.

// 7. Dado un obxecto como o seguinte:
// Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da
// dereita, para os datos proporcionados.

let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      'apple tree': {},
      magnolia: {},
    },
  },
};

function createTree(data) {
  let ul = document.createElement('ul');
  for (let i = 0; i < data.length; i++) {
    ul.append((document.createElement('li').textContent = data[i]));
  }
  return ul;
}
console.log(createTree(arbore));

// 8. Escribe unha función crearCalendario(elemento, ano, mes) que engada ao
// elemento pasado como parámetro un calendario
// do ano e mes indicados.
// O calendario debe ser unha táboa, onde cada
// semana é un <tr> e cada día un <td>. A
// cabeceira da táboa está creada con <th>.
// Por exemplo, o calendario resultado de chamar á
// función cos seguintes parámetros vese na imaxe
// seguinte. Observar que se aplicaron estilos CSS
// para mellorar o aspecto.
// crearCalendario(calendario, 2022, 11);
// 25
// DOM
// 9. Ordena a seguinte táboa pola columna “Nome”. Escribe un código que funcione
// independentemente do número de filas da táboa.
// <table id="taboaOrdenar">
// <thead>
// <tr>
// <th>Nome</th>
// <th>Apelido</th>
// <th>Idade</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td>John</td>
// <td>Smith</td>
// <td>10</td>
// </tr>
// <tr>
// <td>Pete</td>
// <td>Brown</td>
// <td>15</td>
// </tr>
// <tr>
// <td>Ann</td>
// <td>Lee</td>
// <td>5</td>
// </tr>
// </tbody>
// </table>
