'use strict';

function timerBeforeNewYear() {
  const timerContent = document.querySelector('.timer__content');
  const elements = {
    month: timerContent.querySelector('.timer__content_month'),
    day: timerContent.querySelector('.timer__content_days'),
    hour: timerContent.querySelector('.timer__content_hours'),
    minute: timerContent.querySelector('.timer__content_minutes'),
    second: timerContent.querySelector('.timer__content_seconds'),
  };

  const deadLine = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
  const timeFormat = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });

  function calcTime() {
    const now = new Date().getTime();
    const remainingTime = deadLine - now;

    const totalSeconds = Math.floor(remainingTime / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    return [months, days, hours, minutes, seconds];
  }

  function formatTime(value, unit) {
    return timeFormat.format(value, unit).replace('через ', '');
  }

  function updateDisplay() {
    const [months, days, hours, minutes, seconds] = calcTime();

    elements.month.innerText = formatTime(months, 'month');
    elements.day.innerText = formatTime(days - 1, 'day');
    elements.hour.innerText = formatTime(hours, 'hour');
    elements.minute.innerText = formatTime(minutes, 'minute');
    elements.second.innerText = formatTime(seconds, 'second');

    if (deadLine - new Date().getTime() <= 0) {
      clearInterval(timer);
      timerContent.innerHTML = 'хэппи нью еар!';
    }
  }

  const timer = setInterval(updateDisplay, 1000);
  updateDisplay();
}

timerBeforeNewYear();
