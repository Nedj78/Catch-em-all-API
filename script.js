let startIndex = 1;
let pokemonsNumber = 15;

function createPokemonCard(pokemon) {
    const type = pokemon.types[0].type.name;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon', type);

    pokemonCard.innerHTML = `
        <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    document.querySelector('#pokemonContainer').appendChild(pokemonCard);
}

function fetchPokemons() {
    for (let i = startIndex; i < startIndex + pokemonsNumber; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => {
                createPokemonCard(data);
            });
    }
    startIndex += pokemonsNumber;
}

// Initial fetch
fetchPokemons();

// Ajouter un écouteur d'événements pour le bouton "Next"
document.querySelector('#next').addEventListener('click', fetchPokemons);
