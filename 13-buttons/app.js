'use strict';

const elements = {
  wrapper: document.querySelector('.wrapper'),
};

const buttonState = {
  press: 'Нажми меня!',
  pressed: 'Нажата!',
};

let countNumber = 0;

function createElements(tag, className = '', parent, innerText) {
  const elem = document.createElement(tag);
  elem.classList.add(className), innerText && (elem.innerText = innerText);
  parent.append(elem);
  return elem;
}

function showInterface() {
  const count = createElements('div', 'count', elements.wrapper, '0');
  const buttonsWrapper = createElements('div', 'buttons_wrapper', elements.wrapper);

  for (let i = 0; i < 5; i++) {
    createElements('button', 'button', buttonsWrapper, buttonState.press);
  }

  buttonsWrapper.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('button') && !target.classList.contains('active')) {
      [...buttonsWrapper.children].forEach((button) => {
        button.classList.remove('active');
        button.innerText = buttonState.press;
      });

      target.classList.add('active');
      count.innerText = ++countNumber;
      target.innerText = buttonState.pressed;
    }
  });
}

(() => {
  showInterface();
})();
