'use strict';

const arrayUsers = [
  { id: 1, name: 'Vasya' },
  { id: 2, name: 'Petya' },
  { id: 1, name: 'Vasya' },
];

// function uniqUsers(array) {
//   if (!Array.isArray(array)) {
//     return;
//   }

//   const idArray = array.map((el) => el.id);

//   const arraySet = new Set(idArray);

//   const res = [];

//   for (let i of arraySet) {
//     const find = array.find((el) => el.id === i);
//     res.push(find);
//   }

//   return res;
// }

function uniqUsers(array) {
  if (!Array.isArray(array)) {
    return;
  }
  const arraySet = new Set();

  const filteredArray = array.filter((el) => {
    if (!arraySet.has(el.id)) {
      arraySet.add(el.id);
      return true;
    }
    return false;
  });
  
  return filteredArray;
}

console.log(uniqUsers(arrayUsers));
