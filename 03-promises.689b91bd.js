!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("h6c0i"),a={form:document.querySelector("form")};function i(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}a.form.addEventListener("submit",(function(e){e.preventDefault(),function(e){for(var n=e.delay,o=e.step,t=e.amount,a=0;a<t;a+=1)console.log(a+1,n+o*a),i(a+1,n+o*a).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Виконана обіцянка (".concat(n," з ").concat(t," в ").concat(o," ms)  ✅"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Скасована обіцянка (".concat(n," з ").concat(t," в ").concat(o," ms) ❌"))}))}((n=a.form.elements,o=n.delay,t=n.step,u=n.amount,{delay:Number(o.value),step:Number(t.value),amount:Number(u.value)}));var n,o,t,u}))}();
//# sourceMappingURL=03-promises.689b91bd.js.map
