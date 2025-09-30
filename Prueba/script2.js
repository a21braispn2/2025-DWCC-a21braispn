// Ejercicios Strings

//  1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:
const cadea = 'desenvolvemento web';
let novaCadea = cadea.at(0).toUpperCase() + cadea.slice(1);
console.log(novaCadea); // 'Desenvolvemento web'

// 2. Crea unha función denominada reverseString á que se lle pase unha cadea e devolva unha nova cadea cos caracteres da orixinal en sentido inverso.
function reverseString(texto) {
  let novoTexto = '';
  for (let i = texto.length; i >= 0; i--) {
    novoTexto += texto.slice(i, i + 1);
  }
  return novoTexto;
}
console.log(reverseString('I am a string')); // gnirts a ma I
// 3. Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada.
function enmascarar(texto) {
  let enmascarado = texto.substring(texto.length - 4);
  let asteriscos = '';
  for (let i = 0; i < texto.length - 4; i++) {
    asteriscos += '*';
  }
  return asteriscos + enmascarado;
}

console.log(enmascarar('1234123412347777')); // ************7777

// Ejercicios Numeros

// 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora?

let numero = 1232;
let novo = numero.toString();
console.log(novo.length);

// Ejercicios Math

// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
// c. Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos): console.log(numeroAleatorio(5, 10));

console.log(Math.round(Math.random() * 3));

console.log(Math.round(Math.random() * 2) + 1);

function aleatorio(n1, n2) {
  return Math.round(Math.random() * (n2 - n1)) + n1;
}
console.log(aleatorio(5, 10));

// 2. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.

function stringHoras(minutos) {
  let horas = Math.floor(minutos / 60);
  let sobrante = minutos - horas * 60;
  return `${minutos} minuto(s) = ${horas} hora(s) y ${sobrante} minuto(s)`;
}
console.log(stringHoras(121));

// 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais

function area(radio) {
  return (radio * radio * Math.PI).toFixed(2);
}
console.log(area(3));

function perim(radio) {
  return (2 * radio * Math.PI).toFixed(2);
}
console.log(perim(3));

// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.
let dataActual = new Date();
let data = new Date(dataActual.getFullYear(), 6, 25);
const dias = [
  'domingo',
  'luns',
  'martes',
  'mercores',
  'jueves',
  'viernes',
  'sabado',
];
console.log(dias.at(data.getDay()));

// 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.
function diasMes(mes, ano) {
  let dias;
  switch (mes) {
    case 1:
      dias = 31;
      break;
    case 2:
      if (ano % 4 == 0) {
        dias = 29;
      } else {
        dias = 28;
      }
      break;
    case 3:
      dias = 31;
      break;
    case 4:
      dias = 30;
      break;
    case 5:
      dias = 31;
      break;
    case 6:
      dias = 31;
      break;
    case 7:
      dias = 30;
      break;
    case 8:
      dias = 31;
      break;
    case 9:
      dias = 30;
      break;
    case 10:
      dias = 31;
      break;
    case 11:
      dias = 30;
      break;
    case 12:
      dias = 31;
      break;
    default:
      break;
  }
  return dias;
}

console.log(diasMes(9, dataActual.getFullYear()));

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
// semana.

function weekend(data) {
  return data.getDay() == 0 || data.getDay() == 6;
}
console.log(weekend(dataActual));

// 4. Crea unha función que reciba unha data como parámetro e devolva o número de
// días que pasaron dende que comezou o ano.
