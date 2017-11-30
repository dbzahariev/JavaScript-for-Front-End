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

//endregion

//region PROBLEM 3
let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

function renderContinentsInHtmlProblem3(continents) {
    for (let key in continents) {
        let continent = continents[key];

        let continentDiv = $('<div class="continent">')
            .append('<h5 class="continent-title">' + continent['name'] + '</h5>');

        $('.continents').append(continentDiv);

        renderSingleContinentInHtml(continent);
    }
}

function renderSingleCountyInHtmlProblem3(country) {
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

function showData() {
    $('.continent-data').show();
    $('.continent-country').show();
}

function hideData() {
    $('.continent-data').hide();
    $('.continent-country').hide();
}

function clearData() {
    $('.continent-data').empty();
    $('.continent-country').empty();
}

function attachEvents(continents) {
    attachContinentEvents(continents);
}

function attachDropDownEvents(continent) {
    $('.dropdown-select').change(function (e) {
        e.preventDefault();

        let countryName = $(this).val();


        $('.continent-country').empty();
        renderSingleCountyInHtmlProblem3(continent['countries'][countryName]);

        // console.log('bum');
    })
}

function attachContinentEvents(continents) {
    $('.continent').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('shown')) {
            $(this).removeClass('shown');
            hideData();
            clearData();
        }
        else {
            clearData();

            $(this).parent().find('.shown').removeClass('shown');
            $(this).addClass('shown');

            let continentName = $(this).find('.continent-title').text();
            renderSingleContinentInHtml(continents[continentName]);

            attachDropDownEvents(continents[continentName]);
            showData();
            $('.continent-country').empty();
        }
    })
}

renderContinentsInHtmlProblem3(continents);
attachEvents(continents); //pass the continents object

//endregion

//region PROBLEM 4

function getAllContinents() {
    let reguestURL = 'https://continental-drift.firebaseio.com/continents.json';

    $.get(reguestURL)
        .then(renderContinentsInHtmlProblem3)
        .catch((err) => console.log(err));
}

//endregion


// renderAllContinents(continents);
// renderSingleContinent(continents['Europe']);
// renderSingleCountry(continents['Europe']['countries']['Bulgaria']);

// renderDataInHTML(continents);