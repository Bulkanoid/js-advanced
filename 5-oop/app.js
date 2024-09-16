'use strict';

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.say = function () {
  console.log(`${this.language} ${this.name}`);
};

const Orc = function (name, language, weapon) {
  Character.call(this, 'Orc', name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log(`hit ${this.weapon}`);
};

const orc1 = new Orc('Azhall', 'rus', 'sword');
orc1.hit();
console.log(orc1.race);

const Elf = function (name, language) {
  Character.call(this, 'Elf', name, language);
  this.spells = {
    lightning: 20,
    fireball: 40,
  };
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
  const spells = Object.keys(this.spells);
  const random = Math.floor(Math.random() * spells.length);
  console.log(this.spells[spells[random]]);
};

const elf1 = new Elf('Lania', 'elfiyskiy');
console.log(elf1.spells);
elf1.castSpell();
