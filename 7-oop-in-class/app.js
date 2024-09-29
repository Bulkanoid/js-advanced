'use strict';

class Character {
  constructor(race, name, language) {
    this.name = name;
    this.race = race;
    this.language = language;
  }

  say() {
    console.log(`${this.language} ${this.name}`);
  }
}

class Orc extends Character {
  constructor(name, language, weapon) {
    super('Orc', name, language);
    this.weapon = weapon;
  }

  hit() {
    console.log(`hit ${this.weapon}`);
  }

  say() {
    console.log('Лок’тар огар!!!');
  }
}

class Elf extends Character {
  constructor(name, language, spell) {
    super('Elf', name, language);
    this.spell = spell;
  }

  createSpell() {
    console.log(`Шорел'аран, лови ${this.spell}`);
  }

  say() {
    console.log('За наши уши!');
  }
}
