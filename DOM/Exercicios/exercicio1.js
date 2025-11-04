// 1. Dado o seguinte código HTML:
// Utilizando as diferentes propiedades para recorrer o DOM, indica, polo menos, unha
// forma de acceder aos seguintes nodos:
// ● o nodo <div>
const div = document.querySelector('div');

console.log(div);

// ● o nodo <ul>
const ul = document.querySelector('ul');

console.log(ul);
// ● o segundo <li>
const li2 = ul.children[1];

console.log(li2);

// 2. Dado un elemento calquera dunha árbore DOM:
// a. ¿É certo que elemento.lastChild.nextSibling é sempre null?
// Si
console.log(ul.lastChild.nextSibling);

// b. ¿É certo que elemento.children[0].previousSibling é sempre null?
// No
console.log(ul.children[0].previousSibling);
