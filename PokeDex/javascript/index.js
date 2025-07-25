const pokemon = document.getElementById("pokemon");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.sprites.front_default))
    .catch(error => pokemon.textContent = error)