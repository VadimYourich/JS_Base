"use strict"; // Цель: Разработать веб-приложение, которое каждый день будет отображать
// новое случайное изображение из коллекции Unsplash, давая пользователю
// возможность узнать больше о фотографе и сделать "лайк" изображению.
// Регистрация на Unsplash:
// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было
//   регистрации до этого, новый аккаунт создавать не нужно).
// Создание приложения:
// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать
//   http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.
// Разработка веб-приложения:
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк",
//   при нажатии на которую подсвечивается "лайкнутый" элемент.

var ACCESS_KEY = "";
var nameEl = document.querySelector(".box__name");
var imgEl = document.querySelector(".box__img");
var likeEl = document.querySelector(".box__like");
var btnEl = document.querySelector(".box__button");

function fetchPhotos() {
  var response, photos;
  return regeneratorRuntime.async(function fetchPhotos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.unsplash.com/photos/random?count=1", {
            method: "GET",
            headers: {
              Authorization: "Client-ID ".concat(ACCESS_KEY)
            }
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          photos = _context.sent;
          return _context.abrupt("return", photos);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Ошибка при загрузке фотографий:", _context.t0);
          return _context.abrupt("return", []);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function loadPhotos() {
  var responseObj;
  return regeneratorRuntime.async(function loadPhotos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchPhotos());

        case 2:
          responseObj = _context2.sent;
          imgEl.src = responseObj[0].urls.small;
          nameEl.textContent = responseObj[0].user.name;
          likeEl.setAttribute("fill", "#777777");

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

btnEl.addEventListener("click", loadPhotos);
setInterval(loadPhotos, 86400000); // Изменение изображения раз в сутки

likeEl.addEventListener("click", function () {
  var currentColor = likeEl.getAttribute("fill");

  if (currentColor !== "red") {
    likeEl.setAttribute("fill", "red");
    likeEl.setAttribute("fill-opacity", "1");
  } else {
    likeEl.setAttribute("fill", "#777777");
    likeEl.setAttribute("fill-opacity", "0.6");
  }
});