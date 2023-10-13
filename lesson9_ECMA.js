"use strict";

// --- Задание 1 ---
/* 
1. Создайте функцию delayedMessage(message, delay),
которая принимает аргументы message (строка) и delay
(число). Функция должна выводить заданное сообщение в
консоль через указанную задержку.
2. Вызовите функцию delayedMessage() три раза с разными
сообщениями и задержками.
3. После вызова всех функций delayedMessage(), добавьте
сообщение вида "Конец программы" с помощью
console.log().
 
delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
 
Ожидаемый результат:
"Сообщение 2"
"Сообщение 1"
"Сообщение 3"
"Конец программы"
*/
// let count = 0;
// function delayedMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//         count--;
//         if (count === 0) {
//             console.log("Конец программы.");
//         }
//     }, delay);
//     count++;
// }

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);

// --- Задание 2 ---
/* 
У вас есть список задач, которые необходимо выполнить в определенном 
порядке. Каждая задача должна быть выполнена через определенный 
промежуток времени, заданный в миллисекундах. Вам необходимо написать
функцию, которая принимает список задач и интервал времени, а затем
выполняет каждую задачу через определенный промежуток времени.
 
const tasks = [
  {name: 'task1', time: 1000},
  {name: 'task2', time: 2000},
  {name: 'task3', time: 3000},
  {name: 'task4', time: 4000},
  {name: 'task5', time: 5000},
];
*/
// const tasks = [
//     { name: "task1", time: 1000 },
//     { name: "task2", time: 2000 },
//     { name: "task3", time: 3000 },
//     { name: "task4", time: 4000 },
//     { name: "task5", time: 5000 },
// ];

// let i = 0;
// function arrTask(array) {
//     // for (let i = 0; i < array.length; i++) {
//     //     // let name = array[i].name;
//     //     // let time = array[i].time;
//     //     const { name, time } = array[i];
//     //     setTimeout(() => {
//     //         console.log(name);
//     //     }, time);
//     // }
//     const { name, time } = array[i];
//     setTimeout(() => {
//         console.log(name);
//         i++;
//         if (i < array.length) {
//             arrTask(array);
//         }
//     }, time);
// }
// arrTask(tasks);

// --- Задание 3 ---
/* 
Напишите программу, которая загружает данные с сервера с
использованием объекта XMLHttpRequest и отображает полученную
информацию в консоли.
1. Создайте функцию loadData(url), которая принимает аргумент url
(строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с
помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который
будет вызываться при изменении состояния запроса. Проверьте,
если readyState равен 4 (успешно выполнен запрос) и status равен
200 (успешный статус ответа сервера), то выведите полученные
данные в консоль с помощью console.log(xhr.responseText).
Задание 2 продолжение
4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
запроса, url - адрес сервера, true - асинхронный режим запроса.
5. Отправьте запрос на сервер с помощью xhr.send().
6. Выведите в консоль слово "привет", после вызова функции.
Дополнительно:
а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип
запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, 
что изменится, объясните почему. Какой вариант чаще используется/лучше?
б) Переписать на fetch с обработкой ошибок.
 
API: https://jsonplaceholder.typicode.com/users
*/
// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.send();
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//     //         console.log(xhr.responseText);
//     //     }
//     // };
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
// }
// function loadData(url) {
//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 return response.text();
//             }
//         })
//         .then((response) => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// async function loadData(url) {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             console.log(await response.json());
//         } else {
//             console.log(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// loadData("https://jsonplaceholder.typicode.com/users");

// ---- Задание 4 -----
/*
Необходимо получить список пользователей с сервера, отсортировать их
в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
на странице данный список пользователей.
API: https://jsonplaceholder.typicode.com/users
*/

async function loadData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      // console.log(await response.json());
      const arr = await response.json();
      arr.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      console.log(arr);
    }
  } catch (error) {
    console.log(error);
  }
}
loadData("https://jsonplaceholder.typicode.com/users");
