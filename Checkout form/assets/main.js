"use strict";

const states = ['Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'];

const megyek = ['Baranya', 'Bács-Kiskun', 'Békés', 'Borsod-Abaúj-Zemplén', 'Budapest', 'Csongrád-Csanád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala']
let selected = '';

const selectState = document.querySelector('.states');                  // a két query selector a két select menüre
const getSelecedCountry = document.querySelector('.country');
getSelecedCountry.addEventListener('click', (event) => selectedCountryOperation(event));        // esemény kattintásra

const selectedCountryOperation = (event) => {

    if ("Magyarország" == getSelecedCountry.options[getSelecedCountry.selectedIndex].text) {        // ez vizsgálja meg azt, ha a select menüből kiválasztunk egy elemet

        if (selectState.options.length > 0) {                                                           // ha nem üres a State selectmenü

            while (selectState.options.length > 0) {
                selectState.removeChild(selectState.lastElementChild);                                  // amíg van benne, kitörli az elemeket. Ez azért van, hogy a régi megyék vagy államok ne maradjanak benne
            }
        }
        selected = 'megyek';                                                                     // ha eldölt melyiket választottuk azzal a tömbbel fogjuk feltölteni a selectmenüt
    }
    if ("USA" == getSelecedCountry.options[getSelecedCountry.selectedIndex].text) {
        if (selectState.options.length > 0) {

            while (selectState.options.length > 0) {
                selectState.removeChild(selectState.lastElementChild);
            }
        }
        selected = 'states';
    }
    selectFiller(selected);
}


function selectFiller(selected) {                                           // feltöltés

    if (selected === "megyek") {
        for (let i = 0; i < megyek.length; i += 1) {
            let newOption = document.createElement('option');               // új option a html kódban
            selectState.appendChild(newOption);
            newOption.textContent = megyek[i];
            //console.log(megyek[i]);
        }
    }
    if (selected === "states") {
        for (let i = 0; i < states.length; i += 1) {
            let newOption = document.createElement('option');
            selectState.appendChild(newOption);
            newOption.textContent = states[i];
            //console.log(states[i]);

        }
    }

}