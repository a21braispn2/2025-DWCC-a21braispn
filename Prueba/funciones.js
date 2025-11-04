// 1. Suma os valores da propiedade price do seguinte array de obxectos:
// const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const initialValue = 0;
const resultado = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
);
console.log(resultado);

// 2. Utilizando a función reduce, obtén o valor mínimo dun array de números.

const array = [2, 1, 3, 4, 5];

const minimo = array.reduce((accumulator, value) =>
  value < accumulator ? value : accumulator
);

console.log(minimo);

// 1. Dado o seguinte array:
// a. Crea un novo array que conteña só as persoas maiores de idade.
// b. Crea un novo array que conteña os nomes (só os nomes) de todas as
// persoas.
// c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas
// maiores de idade.
// d. Crea un novo array que conteña obxectos só co id e o nome das persoas.

const persoas = [
  { nome: 'aaron', idade: 65, id: 1 },
  { nome: 'beth', idade: 2, id: 2 },
  { nome: 'ánxeles', idade: 13, id: 3 },
  { nome: 'daniel', idade: 3, id: 4 },
  { nome: 'ada', idade: 25, id: 5 },
  { nome: 'erea', idade: 1, id: 6 },
  { nome: 'navia', idade: 43, id: 7 },
];

const array1 = persoas.filter((persoa) => persoa.idade >= 18);

console.log(array1);

const array2 = persoas.map((persoa) => persoa.nome);

console.log(array2);

const array3 = persoas
  .filter((persoa) => persoa.idade >= 18)
  .map((persoa) => persoa.nome.toUpperCase());

console.log(array3);

const array4 = persoas.map((persoa) => ({
  id: persoa.id,
  nome: persoa.nome,
}));

console.log(array4);

// 2. Dado un array cos días da semana en minúsculas:
// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
// d. Mostra por consola o primeiro día que empece por “m”.
// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
// f. Crea un novo array cos días da semana en maiúsculas

const semana = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo',
];

const array2a = semana.filter((dia) => dia.charAt(0) === 'm');

console.log(array2a);

const array2b = semana.some((dia) => dia.slice(0) === 's');

console.log(array2b);

const array2c = semana.every((dia) => dia.slice(-1) === 's');

console.log(array2c);

const array2d = semana.find((dia) => dia.charAt(0) === 'm');

console.log(array2d);

const array2e = semana.findIndex((dia) => dia.charAt(0) === 'm');

console.log(array2e);

const array2f = semana.map((dia) => dia.toUpperCase());

console.log(array2f);

// 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por
// exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
// función sort e pasarlle como parámetro unha función que ti definas e que sirva para
// realizar a comparación de elementos

const notas = [4, 8, 3, 10, 5];

const ordenar = (a, b) => {
  if (a == b) return 0;
  return a > b ? 1 : -1;
};

console.log(notas.sort(ordenar));

// 4. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
// traballar con arrays).

console.log(notas.sort()[0]);

// 5. Dada a seguinte información:
// a. Filtra o array de inventores e crea un array só cos inventores que naceron no
// século XVI.
// b. Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
// Newton", ...]
// c. Unha vez obtido o array co nome completo dos inventores do exercicio
// anterior, ordénao alfabeticamente polo apelido.
// d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
// e. Ordena o array de inventores pola data de nacemento.
// f. Calcula a suma dos anos que viviron todos os inventores.
// g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

console.log(
  inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600)
);

console.log(inventors.map((inventor) => `${inventor.first} ${inventor.last}`));

console.log(
  inventors
    .map((inventor) => `${inventor.first} ${inventor.last}`)
    .sort(inventors.last)
);

console.log(inventors.sort(inventors.last));
