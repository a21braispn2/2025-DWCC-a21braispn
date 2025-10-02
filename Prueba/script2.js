// // Ejercicios Strings

// //  1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:
// const cadea = 'desenvolvemento web';
// let novaCadea = cadea.at(0).toUpperCase() + cadea.slice(1);
// console.log(novaCadea); // 'Desenvolvemento web'

// // 2. Crea unha función denominada reverseString á que se lle pase unha cadea e devolva unha nova cadea cos caracteres da orixinal en sentido inverso.
// function reverseString(texto) {
//   let novoTexto = '';
//   for (let i = texto.length; i >= 0; i--) {
//     novoTexto += texto.slice(i, i + 1);
//   }
//   return novoTexto;
// }
// console.log(reverseString('I am a string')); // gnirts a ma I
// // 3. Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada.
// function enmascarar(texto) {
//   let enmascarado = texto.substring(texto.length - 4);
//   let asteriscos = '';
//   for (let i = 0; i < texto.length - 4; i++) {
//     asteriscos += '*';
//   }
//   return asteriscos + enmascarado;
// }

// console.log(enmascarar('1234123412347777')); // ************7777

// // Ejercicios Numeros

// // 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora?

// let numero = 1232;
// let novo =
//   numero >= 0 ? numero.toString().length : numero.toString().length - 1;
// console.log(novo);

// // Ejercicios Math

// // 1. Números aleatorios:
// // a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
// // b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
// // c. Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos): console.log(numeroAleatorio(5, 10));

// console.log(Math.round(Math.random() * 3));

// console.log(Math.round(Math.random() * 2) + 1);

// function aleatorio(n1, n2) {
//   return Math.round(Math.random() * (n2 - n1)) + n1;
// }
// console.log(aleatorio(5, 10));

// // 2. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.

// function stringHoras(minutos) {
//   let horas = Math.floor(minutos / 60);
//   let sobrante = minutos - horas * 60;
//   return `${minutos} minuto(s) = ${horas} hora(s) y ${sobrante} minuto(s)`;
// }
// console.log(stringHoras(121));

// // 3. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais

// function area(radio) {
//   return (radio * radio * Math.PI).toFixed(2);
// }
// console.log(area(3));

// function perim(radio) {
//   return (2 * radio * Math.PI).toFixed(2);
// }
// console.log(perim(3));

// // 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.
// let dataActual = new Date();
// let data = new Date(dataActual.getFullYear(), 6, 25);
// const dias = [
//   'domingo',
//   'luns',
//   'martes',
//   'mercores',
//   'jueves',
//   'viernes',
//   'sabado',
// ];
// console.log(dias.at(data.getDay()));

// // 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// // días dese mes.
// // function diasMes(mes, ano) {
// //   let dias;
// //   switch (mes) {
// //     case 1:
// //       dias = 31;
// //       break;
// //     case 2:
// //       if (ano % 4 == 0) {
// //         dias = 29;
// //       } else {
// //         dias = 28;
// //       }
// //       break;
// //     case 3:
// //       dias = 31;
// //       break;
// //     case 4:
// //       dias = 30;
// //       break;
// //     case 5:
// //       dias = 31;
// //       break;
// //     case 6:
// //       dias = 31;
// //       break;
// //     case 7:
// //       dias = 30;
// //       break;
// //     case 8:
// //       dias = 31;
// //       break;
// //     case 9:
// //       dias = 30;
// //       break;
// //     case 10:
// //       dias = 31;
// //       break;
// //     case 11:
// //       dias = 30;
// //       break;
// //     case 12:
// //       dias = 31;
// //       break;
// //     default:
// //       break;
// //   }
// //   return dias;
// // }
// function diasMes(mes, ano) {
//   return;
// }
// console.log(diasMes(9, dataActual.getFullYear()));

// // 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
// // semana.

// function weekend(data) {
//   return data.getDay() == 0 || data.getDay() == 6;
// }
// console.log(weekend(dataActual));

// // 4. Crea unha función que reciba unha data como parámetro e devolva o número de
// // días que pasaron dende que comezou o ano.

// function diasPasados(data) {
//   let ano = data.getFullYear();
//   let daraAux = new Date(ano, 1, 1);
//   return Math.floor(
//     (data.valueOf() - daraAux.valueOf()) / (1000 * 60 * 60 * 24)
//   );
// }
// console.log(diasPasados(dataActual));

// Exercicios:
// 1. Crea unha función que reciba como parámetros un elemento e un array. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array.
// Exemplo:
// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
// function indices(elemento, arrayElementos) {
// …
// }
// console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]

function indices(elemento, array) {
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      indices += i;
    }
  }
  return indices;
}
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(indices(1, numeros));

// 2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
// 'mandarinas'];) , fai os seguintes apartados co método splice:
// a. Elimina as mazás.
// b. Engade laranxas e sandía detrás dos plátanos,.
// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
// Despois de realizar cada operación mostra por pantalla a lista de froitas do array
// separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe
// mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

froitas.splice(1, 1);
froitas.splice(3, 0, 'laranxas', 'sandía');
froitas.splice(2, 1, 'cereixas', 'nésperas');
let resultado = froitas.join(', ');
console.log(resultado);

// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
// minúsculas.
