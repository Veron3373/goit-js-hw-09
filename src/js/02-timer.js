// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Otherwise, selectors are also supported
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputEl: document.querySelector('#datetime-picker'),

  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]')
};

let startTime = new Date(refs.inputEl.value).getTime();
let currentTime = new Date().getTime();

refs.inputEl.addEventListener('input', checkDate)

function checkDate() {
  startTime = new Date(refs.inputEl.value).getTime();

  if (startTime >= currentTime) {
    refs.startBtn.removeAttribute("disabled", "disabled");
    Notify.success('Натисність Start для відліку часу');
    timer.stop()
  } else {
    refs.startBtn.setAttribute("disabled", "disabled");
    Notify.failure('Обрана минула дата! Відлік неможливий');
  }
}

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = new Date(refs.inputEl.value).getTime();

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const deltaTime = startTime - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
    console.log('message')
  }

  /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */
  getTimeComponents(time) {

    const days = this.pad(Math.floor((time / (1000 * 60 * 60 * 24))),);
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({

  onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ days, hours, mins, secs }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.innerText = hours;
  refs.minutesl.textContent = mins;
  refs.secondsEl.innerText = secs;
}
