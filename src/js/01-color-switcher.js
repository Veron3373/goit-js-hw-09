//!=============        Виконав як придумав ===============================
let stopRandomColor = null
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  bodyEl: document.querySelector('body'),
  buttonElStart: document.querySelector("[data-start]"),
  buttonElStop: document.querySelector("[data-stop]"),
  buttonElReset: document.querySelector("[data-reset]")
}
start()

function start() {
  if (!localStorage.getItem("background")) {
    return hideButtonStop()
  } else {
    insertColor()
    if (confirm("Продовжити перегляд рондомних кольорів?")) {
      hideButtonStop()
      // randomColorStart()
      Notify.info('Сторінка перезавантаження для відновлення рондомності кольорів натисність Start');
      insertColor()
    } else {
      rondomStop() 
      return hideButtonStop()
    }
  }
}

refs.buttonElStart.addEventListener("click", randomColorStartClick)

function randomColorStartClick() {
  Notify.success('Запуск рондомних кольорів');
  randomColorStart()
}

function randomColorStart() {

  refs.buttonElStart.setAttribute("disabled", "disabled");
  refs.buttonElStop.removeAttribute("disabled", "disabled");

  stopRandomColor = setInterval(() => {
    refs.bodyEl.style.background = `#${Math.floor(Math.random() * 16797215).toString(16)}`
    saveColor()
  }, 1000)
}

function hideButtonStart() {
  refs.buttonElStart.removeAttribute("disabled", "disabled");
}

refs.buttonElStop.addEventListener("click", () => {
  hideButtonStop()
  hideButtonStart()
  clearRandomColor()
  Notify.warning('Призупинено');
})

function clearRandomColor() {
  clearInterval(stopRandomColor)
}

function hideButtonStop() {
  refs.buttonElStop.setAttribute("disabled", "disabled");
}

function saveColor() {
  localStorage.setItem("background", refs.bodyEl.style.background)
}

function insertColor() {
  refs.bodyEl.style.background = localStorage.getItem("background")
}
//!Reset
refs.buttonElReset.addEventListener('click',rondomStop)

function rondomStop() {
  hideButtonStop()
  hideButtonStart()
  clearRandomColor()
  localStorage.removeItem('background')
  refs.bodyEl.style.background = ''
  Notify.failure('Зупинено показ кольорів');
}


//!=============        Виконано по   ДЗ    GoIT ===============================

//let stopRandomColor = null

//const refs = {
//  bodyEl: document.querySelector('body'),
//  buttonElStart: document.querySelector("[data-start]"),
//  buttonElStop: document.querySelector("[data-stop]")
//}
//hideButtonStop()

//refs.buttonElStart.addEventListener("click", () => {
//  refs.buttonElStart.setAttribute("disabled", "disabled");
//  refs.buttonElStop.removeAttribute("disabled", "disabled");

//  stopRandomColor = setInterval(() => {
//    refs.bodyEl.style.background = `#${Math.floor(Math.random() * 16797215).toString(16)}`
//  }, 1000)
//})

//refs.buttonElStop.addEventListener("click", () => {
//  hideButtonStop()
//  refs.buttonElStart.removeAttribute("disabled", "disabled");
//  clearInterval(stopRandomColor)
//})

//function hideButtonStop() {
//  refs.buttonElStop.setAttribute("disabled", "disabled");
//}




