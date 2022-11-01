import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'notiflix/dist/notiflix-3.2.5.min.css';

//* DOM
const refs = {
  form: document.querySelector('form'),
};

//* submit
refs.form.addEventListener('submit', onFormSubmit);

//* function елементів
function onFormSubmit(e) {
  e.preventDefault();
  processTask(getInputValues(refs.form.elements));
}

//* Деструктуризація
function getInputValues({ delay, step, amount }) {
  return { delay: Number(delay.value), step: Number(step.value), amount: Number(amount.value) };
}

let resolvePromise = 0
let rejectPromise = 0

//* Виклик n разів скільки в amount (random + виклик resolve reject)
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}     

//* Формування кількості викликів
function processTask({ delay, step, amount }) {
  for (let i = 0; i < amount; i += 1) {
    // console.log(i + 1, delay + step * i);
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        resolvePromise += 1
        Notify.success(`Повідомлення № ${position} з ${amount}. Виконано обіцянку в кількості ${resolvePromise} шт за ${delay} ms. ✅`)
      })
      .catch(({ position, delay }) => {
        rejectPromise += 1
        Notify.failure(`Повідомлення № ${position} з ${amount}. Скасовано обіцянку в кількості ${rejectPromise} шт за ${delay} ms. ❌`)
      })   
     
  }

}
