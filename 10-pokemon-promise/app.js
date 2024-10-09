'use strict';

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return response.json();
  });
}

getData(URL, 'error')
  .then(({ abilities }) => {
    return Promise.all(
      abilities.map((ab) => getData(ab.ability.url, 'Fatal error, immediately leave your place')),
    );
  })
  .then((data) => {
    data.map((arr) => {
      const { effect_entries } = arr;
      effect_entries.map((i) => i.language.name == 'en' && console.log(i.effect));
    });
  })
  .catch((error) => console.log(error.message));
