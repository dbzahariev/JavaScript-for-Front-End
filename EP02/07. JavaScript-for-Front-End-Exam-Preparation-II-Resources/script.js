//#region PROBLEM 1
function renderAllContinents(continents) {
    for (let index in continents) {
        let continent = continents[index];
        console.log(continent['name']);
    }
}

function renderSingleContinent(continent) {
    console.log(continent['name']);
    let countries = continent['countries'];
    console.log('Countries:');
    for (let index in countries) {
        // console.log(index['name']);
        let countrieName = countries[index];
        console.log('$$$' + countrieName['name']);
    }
}

function renderSingleCountry(country) {
    console.log(country['name']);
    console.log('Capital: ' + country['capital']);
    console.log('Official Language: ' + country['officialLanguage']);
    console.log('Population: ' + country['population']);
    console.log('Area: ' + country['area'] + ' km2');
    console.log('Political Status: ' + country['politicalStatus']);

    if (country['politicalStatus'] === 'Republic') {
        console.log('President: ' + country['president']);
    }
    else if (country['politicalStatus'] === 'Monarchy') {
        console.log('Monarch: ' + country['monarch']);
    }

    console.log('Official Currency: ' + country['officialCurrency']);
}

//endregion

//region PROBLEM 2
function renderContinentsInHtml(continents) {
    for (let key in continents) {
        let continent = continents[key];

        let continentDiv = $('<div class="continent">')
            .append('<h5 class="continent-title">' + continent['name'] + '</h5>');

        $('.continents').append(continentDiv);

        renderSingleContinentInHtml(continent);
    }
}

function renderSingleCountyInHtml(country) {
    let CountryTitle = $('<div class="country-title">')
        .append('<h2>' + country['name'] + '</h2>');

    let countryData = $('<div class="country-data">')
        .append('<div class="country-capital"><strong>Capital:</strong> <div>' + country['capital'] + '</div></div>')
        .append('<div class="country-official-language"><strong>Official Language:</strong><div>' + country['officialLanguage'] + ' </div></div>')
        .append('<div class="country-population"><strong>Population:</strong> <div>' + country['population'] + '</div></div>')
        .append('<div class="country-area"><strong>Area:</strong> <div>' + country['area'] + ' km<sup>2</sup></div></div>')
        .append('<div class="country-political-status"><strong>Political Status:</strong><div>' + country['politicalStatus'] + '</div></div>');

    if (country['politicalStatus'] === 'Republic') {
        countryData.append('<div class="country-president"><strong>President:</strong><div>' + country['president'] + '</div></div>');
    }
    else {
        countryData.append('<div class="country-monarch"><strong>Monarch:</strong><div>' + country['monarch'] + '</div></div>')
    }

    countryData.append('<div class="country-official-currency"><strong>Official Currency:</strong><div>' + country['officialCurrency'] + '</div></div>');


    $('.continent-country')
        .append(CountryTitle)
        .append(countryData);
}

function renderSingleContinentInHtml(continent) {
    let dropDownSelect = $('<select class="dropdown-select">');
    dropDownSelect.append('<option disabled selected value> -- select an option -- </option>');

    let countries = continent['countries'];
    for (let index in countries) {
        let county = countries[index];

        dropDownSelect.append('<option value="' + county['name'] + '">' + county['name'] + '</option>');

        renderSingleCountyInHtml(county);
    }

    // APPENDS
    $('.continent-data')
        .append('<h2 class="continent-title">' + continent['name'].toLowerCase() + '</h2>')
        .append('<h3 class="countries-title">Countries</h3>')
        .append($('<div class="countries">').append(dropDownSelect))
        .append($('<div class="continent-image">').append('<img src="images/' + continent['name'] + '.png">'));
}

function renderDataInHTML(continents) {
    renderContinentsInHtml(continents);
}

renderDataInHTML(continents);
//endregion


// renderAllContinents(continents);
// renderSingleContinent(continents['Europe']);
// renderSingleCountry(continents['Europe']['countries']['Bulgaria']);