!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();var n=+r.elements.delay.value,t=+r.elements.step.value,o=+r.elements.amount.value;!function(e,n,t){for(var o=1;o<=t;o+=1)a(o,e).then((function(e){var n=e.position,t=e.delay;i.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"),{timeout:1e4})})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"),{timeout:1e4})})),e+=n}(n,t,o)}))}();
//# sourceMappingURL=03-promises.f12251ff.js.map
