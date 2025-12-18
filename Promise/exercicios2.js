// 1. Neste exercicio vaise usar a API https://jsonplaceholder.typicode.com/ que contén,
// entre outras cousas, información falsa de posts e comentarios.
// Debes elaborar unha páxina web que conteña un formulario con un campo input,
// para introducir o id dun usuario (un número entre 1 e 10), e un botón. Ao pulsar o
// botón, farase unha petición ao servidor para que devolva todos os posts do id de
// usuario indicado no formulario. Así, por exemplo, para o usuario con id = 1, a url de
// consulta será https://jsonplaceholder.typicode.com/posts?userId=1. Tamén é válida a
// URL https://jsonplaceholder.typicode.com/users/1/posts.
// Coa información recibida debe crearse unha táboa e mostrar na páxina web toda a
// información dos posts do usuario co id indicado no formulario. Isto debe suceder sen
// necesidade de recargar a páxina web.

const form = document.querySelector('form');

const posts = () => {
  const input = document.getElementById('userId').value;

  fetch(`https://jsonplaceholder.typicode.com/users/${input}/posts`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user);
      });
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  posts();
});
