'use strict';

function dice(quantity) {
  const parseNum = Number.parseInt(quantity.split('')[1]);

  if (Number.isNaN(parseNum) || parseNum < 2 || parseNum % 2 !== 0) {
    return;
  }

  return Math.round(Math.random() * (parseNum - 1) + 1);
}

console.log(dice('d5'));
