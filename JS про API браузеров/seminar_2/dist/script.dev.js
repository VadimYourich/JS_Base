"use strict";
/* Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным. */
// document.querySelector("ul").addEventListener("mouseover", function (e) {
//   if (e.target.tagName === "A") {
//     e.target.style.backgroundColor = "#f0f0f0";
//   }
// });
// document.querySelector("ul").addEventListener("mouseout", function (e) {
//   if (e.target.tagName === "A") {
//     e.target.style.backgroundColor = "#ffffff";
//   }
// });
// document.querySelector("ul").addEventListener("click", function (e) {
//   e.preventDefault();
//   const activeEl = document.querySelector(".active");
//   if (activeEl) {
//     activeEl.classList.remove("active");
//   }
//   if (e.target.tagName === "A") {
//     e.target.classList.add("active");
//   }
// });

/* Task_2   Модальное окно */
// const modalWin = document.querySelector(".modalWin");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   modalWin.classList.add("is-open");
// });
// modalWin.addEventListener("click", () => {
//   modalWin.classList.remove("is-open");
// });

/* Task_3 */

var button = document.querySelector(".button");

if (button) {
  document.querySelector(".button").addEventListener("click", function (e) {
    if (e.isTrusted) {
      var text = e.target.textContent;
      e.target.textContent = "Товар добавлен в корзину";
      setTimeout(function () {
        e.target.textContent = text;
      }, 2000);
    }
  });
}

window.addEventListener("load", function (e) {
  if (getLastPartOfUrl(window.location.href) === "product.html") {
    setTimeout(function () {
      history.back();
    }, 2000);
  }
});

function getLastPartOfUrl(url) {
  var parts = url.split("/");
  return parts.at(-1);
}