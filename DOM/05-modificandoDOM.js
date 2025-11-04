'use strict';

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal"

document.getElementById('tituloPrincipal').classList.add('color-title');

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada

let lista = document.getElementById('lista');

let li = document.createElement('li');
li.textContent = 'Item 5';
li.classList.add('item-lista');
lista.append(li);

// Modifica o ancho do div con id "contedor" a 800px usando JavaScript

let div = document.getElementById('contedor');
div.style.width = '800px';

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..."

let input = document.getElementById('entradaTexto');
input.setAttribute('placeholder', 'Escribe aquí...');

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px

lista.style.fontSize = '18px';

// Elimina o segundo elemento da lista (Item 2)

lista.firstElementChild.nextElementSibling.remove();

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe"

let mensaxe = document.getElementById('mensaxe');

let p = document.createElement('p');
p.textContent = 'Texto dinámico';
mensaxe.after(p);
