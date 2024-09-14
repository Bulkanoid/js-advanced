'use strict';

const age1 = '2010-09-07';
const age2 = '2010-09-04';

function validateAge(age) {
  const userAge = new Date(age).getTime();
  const now = new Date();
  const result = (now - userAge) / (1000 * 60 * 60 * 24 * 365.25);

  return result > 14;
}

console.log(validateAge(age1));
