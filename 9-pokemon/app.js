'use strict';

const URL = 'https://pokeapi.co/api/';
const endPoint = 'v2/pokemon/ditto';

function getPokemonInfo(url, endPoint) {
  const data = new XMLHttpRequest();
  data.open('GET', `${url}${endPoint || ''}`);
  data.send();

  if (endPoint) {
    data.addEventListener('load', function () {
      const { abilities } = JSON.parse(this.responseText);
      const abilityList = abilities.map((ab) => ab.ability.url);
      abilityList.map((ability) => {
        getPokemon(ability);
      });
    });
  } else {
    data.addEventListener('load', function () {
      const { effect_entries } = JSON.parse(this.responseText);
      console.log(effect_entries);
      effect_entries.map((e) => e.language.name == 'en' && console.log(e.effect));
    });
  }
}

getPokemonInfo(URL, endPoint);
