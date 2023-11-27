"use strict";

// Цель: Разработать веб-приложение, которое каждый день будет отображать
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

const ACCESS_KEY = "";

const nameEl = document.querySelector(".box__name");
const imgEl = document.querySelector(".box__img");
const likeEl = document.querySelector(".box__like");
const btnEl = document.querySelector(".box__button");

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadPhotos() {
  const responseObj = await fetchPhotos();
  imgEl.src = responseObj[0].urls.small;
  nameEl.textContent = responseObj[0].user.name;
  likeEl.setAttribute("fill", "#777777");
}
btnEl.addEventListener("click", loadPhotos);
setInterval(loadPhotos, 86400000); // Изменение изображения раз в сутки
likeEl.addEventListener("click", () => {
  let currentColor = likeEl.getAttribute("fill");
  if (currentColor !== "red") {
    likeEl.setAttribute("fill", "red");
    likeEl.setAttribute("fill-opacity", "1");
  } else {
    likeEl.setAttribute("fill", "#777777");
    likeEl.setAttribute("fill-opacity", "0.6");
  }
});
