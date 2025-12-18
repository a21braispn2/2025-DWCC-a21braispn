// 1. Dado o seguinte código HTML, observa que o span ten unha clase css “oculto”. En
// primeiro lugar, engade a configuración de estilos CSS para a clase “oculto”, de tal
// forma que inicialmente o span non se mostre na páxina. Ademais, crea o JavaScript
// 4
// Eventos
// necesario para que ao pulsar a ligazón se faga visible o contido do span e se oculte
// a ligazón.

let span = document.getElementById('adicional');
let a = document.getElementById('ligazon');

function ampliar(event) {
  event.preventDefault();
  span.classList.remove('oculto');
  a.style.display = 'none';
}

a.addEventListener('click', ampliar);

// 2. Crea unha páxina web que teña unha caixa de texto, un botón e unha lista. Fai que
// ao pulsar o botón se engada o texto da caixa de texto como novo elemento da lista.
// Inicialmente, a páxina debería mostrar algo similar á seguinte imaxe:

let button = document.getElementById('boton');
let input = document.getElementById('caixaTexto');
let ul = document.getElementById('lista');

function añadir(event) {
  event.preventDefault();
  let li = document.createElement('li');
  let texto = document.createTextNode(input.value);
  li.append(texto);
  ul.append(li);
}

button.addEventListener('click', añadir);

// 3. Nunha páxina HTML hai un botón ao que fai referencia a variable button do
// seguinte código. Observa o seguinte código e indica que manexadores de eventos
// se executan:

button.addEventListener('click', () => console.log('1'));
// button.removeEventListener('click', () => console.log('1'));
button.onclick = () => console.log(2);

// 4. Crea un menú que se abra/colapse ao facer clic sobre el. Inicialmente o menú debe
// estar colapsado e ao pulsar no texto “Sweeties (click me)!” deben mostrarse as
// opcións do menú.
// Debes asegurarte que a funcionalidade só se habilita cando se pulsa sobre o texto
// “Sweeties (click me)!” e non sobre calquera outra zona da páxina/liña.
// Nestes casos é útil modificar o cursor cando pase por riba do texto para que teña
// estilo “pointer” e informar á persoa usuaria que esa é unha zona na que se pode
// pulsar.

let span2 = document.getElementById('clickme');
let lista2 = document.getElementById('lista2');

function desplegar(event) {
  event.preventDefault();
  lista2.classList.remove('oculto');
}

span2.addEventListener('click', desplegar);

// 5. Insire unha imaxe nunha páxina web e engádelle un listener para cada un dos
// seguintes eventos: click, dblclick, contextmenu, mousedown, mouseup, wheel,
// mouseover, mouseout, dragstart, drag, dragend. Cada vez que suceda un destes
// eventos mostra por consola unha mensaxe informando do evento que sucedeu.
// Proba os diferentes eventos e observa a orde na que suceden.

let rana = document.getElementById('rana');

rana.addEventListener('click', () => console.log('click'));
rana.addEventListener('dblclick', () => console.log('dblclick'));
rana.addEventListener('contextmenu', () => console.log('contextmenu'));
rana.addEventListener('mousedown', () => console.log('mousedown'));
rana.addEventListener('mouseup', () => console.log('mouseup'));
rana.addEventListener('wheel', () => console.log('wheel'));
rana.addEventListener('mouseover', () => console.log('mouseover'));
rana.addEventListener('mouseout', () => console.log('mouseout'));
rana.addEventListener('dragstart', () => console.log('dragstart'));
rana.addEventListener('drag', () => console.log('drag'));
rana.addEventListener('dragend', () => console.log('dragend'));
