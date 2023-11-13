"use strict";
/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

var inputEl = document.querySelector(".number-input");
var btnEl = document.querySelector(".check-button");
var divEl = document.querySelector(".message");
btnEl.addEventListener("click", function () {
  try {
    var number = +inputEl.value;

    if (!Number.isFinite(number)) {
      throw new Error("User input uncorrect number");
    }

    divEl.textContent = "User input number = ".concat(number);
  } catch (error) {
    divEl.textContent = error.message;
  }
}); // function onClick() {
//     console.log("Hi");
// }