// 1. ¿Cal é o resultado do seguinte código? ¿Por que?
// let promise = new Promise(function(resolve, reject) {
// resolve(1);
// setTimeout(() => resolve(2), 1000);
// });
// promise.then(console.log);

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);

// Devolve 1

// 2. Crea unha función á que se lle pase un parámetro e que devolva unha promesa. A
// promesa debe resolverse despois de tres segundos dende que se chamou á función
// e debe devolver o parámetro pasado á función.
// Para probala, fai unha chamada á túa función e mostra por consola o valor devolto
// pola promesa.
// 20
// Programación asíncrona

function esperar3(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 3000);
  });
}

let num = 2;

esperar3(num).then((result) => console.log(result));

// 3. Crea unha función que reciba un parámetro e devolva unha promesa.
// a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
// devolver un Erro indicando “Erro. O parámetro non é un número”.
// b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
// segundo e devolver “Impar”.
// c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
// segundos e devolver un erro co texto “Par”.

function tipo(valor) {
  return new Promise((resolve, reject) => {
    if (typeof valor != 'number') {
      reject(new Error('Erro. O parámetro non é un número'));
    } else if (valor % 2) {
      resolve('Impar');
    } else {
      reject(new Error('Par'));
    }
  });
}

tipo(1)
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error.message));

//   1. ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro
// en f1?

// 1 - promise.then(f1).catch(f2);

// 2 - promise.then(f1, f2);

// No, o 1 resolve solo f1 e o 2 resolve os 2 valores
// Se da erro no 1 lanza o erro pero no 2 non captura ningún error

// 2. ¿Cal é a saída do seguinte código? ¿Por que?

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise2 = job();
promise2
  .then(() => console.log('Success 1'))
  .then(() => console.log('Success 2'))
  .then(() => console.log('Success 3'))
  .catch(() => console.log('Error 1'))
  .then(() => console.log('Success 4'));

// Error 1
// Success 4
// pq una vez devuelve el reject se completa

// 3. ¿Cal é a saída do seguinte código? ¿Por que?

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}
let promise3 = job(true);
promise3
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return 'Error caught';
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch((error) => console.log(error));
