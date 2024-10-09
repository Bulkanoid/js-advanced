'use strict';

function myRace(promises) {
  try {
    if (!Array.isArray(promises)) {
      throw new Error('В качестве аргумента должен быть передан массив');
    }

    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  } catch (e) {
    console.error(e.message);
  }
}

function myPromise(duration, message) {
  return new Promise((resolve) => setTimeout(resolve, duration, message));
}

myRace([myPromise(100, 1), myPromise(100, 2), myPromise(100, 3)]).then((data) => console.log(data));
