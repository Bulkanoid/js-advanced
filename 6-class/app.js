'use strict';

class Car {
  #make;
  #model;
  #_mileage = 0;

  constructor(make, model, mileage) {
    this.#make = make;
    this.#model = model;
    this.mileage = mileage;
  }

  get mileage() {
    return this.#_mileage;
  }

  set mileage(km) {
    if (km < 0) {
      return;
    }
    this.#_mileage += km;
  }

  get info() {
    console.log(`Марка авто - ${this.#make}, модель - ${this.#model}, пробег - ${this.mileage}`);
  }
}

const car1 = new Car('Belaz', '75180', 2000);
car1.mileage = 200;
car1.mileage = -200;
car1.info;
