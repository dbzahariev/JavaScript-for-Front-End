let Dianabad = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};

renderDataInHTML(Dianabad);

function renderDataInHTML(location) {
    let containerDiv = $('<div class="container">');
    let resultDiv = $('<div class="result">');

    let locationDiv = $('<div class="location">');
    let pokemonsDiv = $('<div class="pokemons">');


    renderLocation(locationDiv, location);
    renderPokemons(pokemonsDiv, location['pokemons']);


    resultDiv.append(locationDiv);
    resultDiv.append(pokemonsDiv);

    containerDiv.append(resultDiv);
    $('body').append(containerDiv);
}

function renderLocation(locationDiv, location) {
    let locationName = $('<h1 class="location-name">Location: ' + location['name'] + '</h1>');

    let locationCordinateDiv =
        $('<div class="location-coordinates">')
            .append($('<h2 class="location-longitude">Longitude: ' + location['longitude'] + '</h2>'))
            .append($('<h2 class="location-longitude">Longitude: ' + location['latitude'] + '</h2>'));

    locationDiv.append(locationName);
    locationDiv.append(locationCordinateDiv);
}


function renderPokemons(pokemonsDiv, pokemons) {
    if (!pokemons) {
        return;
    }

    for (let index in pokemons) {
        let pokemon = pokemons[index];

        let pokemonDiv = $('<div class="pokemon">');

        let pokemonTitleDiv = $('<div class="pokemon-title">' + pokemon['name'] + '</div>');

        let pokemnStats = $('<div class="pokemon-stats">')
            .append('<div class="pokemon-name">Name: ' + pokemon['name'] + '</div>')
            .append('<div class="pokemon-power">Power: ' + pokemon['power'] + 'pp</div>')
            .append('<div class="pokemon-evolved-from">Evolved From: ' + pokemon['evolvedFrom'] + '</div>')
            .append('<div class="pokemon-evolves-to">Evolves To: ' + pokemon['evolvesTo'] + '</div>');

        pokemonDiv.append(pokemonTitleDiv);
        pokemonDiv.append(pokemnStats);

        pokemonsDiv.append(pokemonDiv);
    }
}