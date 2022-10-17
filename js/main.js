const pokeContainer = document.querySelector(".pokedex-container");
const pokemons = [];


// Promise All Method
for (let index = 1; index <= 150; index++) {
  pokemons.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
}

// Function to transform index #1 to #001 and #10 to #010
Number.prototype.setPokemonID = function (n,str){
    return Array(n-String(this).length+1).join(str||'0')+this;
}

let request = pokemons.map((url) => {
  return fetch(url).then((res) => res.json());
});

Promise.all(request).then((res) =>
  res.map((pokemon) => {
    pokeContainer.innerHTML += `<div class="card ${pokemon.types[0].type.name}">
    <img src=${pokemon.sprites.front_default} alt="" />
    <span>#${(pokemon.id).setPokemonID(3)}</span>
    <h2 class="${pokemon.types[0].type.name}">${pokemon.name}</h2>
    <p class="${pokemon.types[0].type.name}">Type: ${pokemon.types[0].type.name}</p>
  </div>`;
  })
);