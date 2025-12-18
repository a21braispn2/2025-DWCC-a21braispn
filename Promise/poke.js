let img = document.querySelector('img');
let h3Name = document.querySelector('h3');
let ul = h3Name.nextElementSibling.nextElementSibling;
let button = ul.nextElementSibling;

const poke = () => {
  let id = Math.floor(Math.random() * 900) + 1;
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      ul.innerHTML = '';
      img.setAttribute('src', data.sprites.other.home.front_default);
      const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      img.setAttribute('alt', nome);
      h3Name.textContent = `Name: ${nome}`;
      data.abilities.forEach((ability) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.append(a);
        a.textContent =
          ability.ability.name.charAt(0).toUpperCase() +
          ability.ability.name.slice(1);
        a.setAttribute('href', ability.ability.url);
        ul.append(li);
      });
    });
};

button.addEventListener('click', poke);

poke();
