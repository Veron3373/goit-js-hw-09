Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Veron3373 
DianaLauzhyna
/
goit-js-hw-09
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
goit-js-hw-09/src/js/03-promises.js /
@DianaLauzhyna
DianaLauzhyna #js
Latest commit df399d9 on 17 Aug
 History
 1 contributor
47 lines (38 sloc)  1.14 KB

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const delay = +formEl.elements.delay.value;
  const step = +formEl.elements.step.value;
  const amount = +formEl.elements.amount.value;

  generatePromises(delay, step, amount);
}

function generatePromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 10000,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          timeout: 10000,
        });
      });

    delay += step;
  }
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
goit-js-hw-09/03-promises.js at main · DianaLauzhyna/goit-js-hw-09