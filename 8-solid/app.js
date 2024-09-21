'use strict';

class Billing {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  CalculateTotal() {
    return this;
  }
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  CalculateTotal() {
    return this.hours * this.amount;
  }
}

class ItemBilling {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  CalculateTotal() {
    return this.amount * this.items;
  }
}
