'use strict';
// Создать интерактивную веб-страницу, которая позволяет пользователям 
// регистрироваться и входить в систему, используя данные, сохраненные данные 
// в LocalStorage.
 
// Приложение будет состоять из трёх основных страниц:
 
// 1.Страница регистрации: 
//   a. Предлагает пользователю ввести логин и пароль.
//   b. После ввода данных, они сохраняются в LocalStorage.
//   c. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
//   a. Предлагает пользователю ввести логин и пароль.
//   b. Если введенные данные совпадают с данными из LocalStorage, пользователь 
//     перенаправляется на страницу приветствия.
//   c.Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
//   a. Простое приветственное сообщение для авторизованного пользователя.
//   b. Кнопка "Выйти", при нажатии на которую пользователь возвращается на 
//     страницу входа.

const btnEl = document.querySelector('.btn');
const inputLoginEl = document.querySelector('.login');
const inputPasswordEl = document.querySelector('.password');

btnEl.addEventListener('click', () => {
    addUsers(inputLoginEl.value, inputPasswordEl.value); 
    window.location.href = 'login.html';
});





