'use strict';

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!position) {
        reject('Ошибка получения позиции');
      }

      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });
}

getGeolocation()
  .then((data) => console.log(data))
  .catch((e) => console.error(e));
