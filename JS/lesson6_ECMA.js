"use strict";
/* 
Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
 */

/* 
Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...params) {
//   return params.filter((item, index) => params.indexOf(item) === index);
// }
function removeDuplicates(...params) {
  return [...new Set(params).values()];
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
 */
/* 
// Задание 2 (тайминг 25 минут)
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getEvenNumbers([2, 3, 5, 6, 4, 3, 4, 5, 2, 1, 6]));

function getIvenNumber(arr) {
  return arr.filter((item) => item % 2 === 0);
}
console.log(getIvenNumber([2, 3, 5, 6, 4, 3, 4, 5, 2, 1, 6]));
 */
/* 
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(arr) {
  return arr.reduce((acc, a) => acc + a, 0) / arr.length;
}
console.log(calculateAverage([2, 3, 5, 6, 4, 3, 4, 5, 2, 1, 6]));
 */
/* 
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(str) {
//   const words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
//var2
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(
  capitalizeFirstLetter(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  )
);
 */
/* 
// Задание 3 (тайминг 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(num) {
    let result = num;
    return {
        res() { 
            return result
        },
        add(num) {
            result += num;
        },
        subtract(num) {
            result -= num;
        },
    };
}
const calc = createCalculator(5);
calc.add(10)
calc.subtract(2)

console.log(calc.res());
 */
/* 
// Задание 4 (тайминг 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.
 
// // Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); // "Hello, John!"

function createGreeting(name) {
    return function () {
        return (`Hello, ${name}!`)
    };
}
// const greeting = createGreeting('John');
console.log(createGreeting('John')());
 */
/* 
// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // true
// console.log(isPasswordValid('secret')); // false

// function createPasswordChecker(minLength) {
//   return function (password) {
//     if (password.length >= minLength) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid("password")); // true
// console.log(isPasswordValid("secret")); // false
// console.log(createPasswordChecker(6)("secret"));
//var2
function createPasswordChecker(minLength) {
  return function (password) {
    return password.length >= minLength;
  };
}
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password")); // true
console.log(isPasswordValid("secret")); // false
 */
/* 
счётчик

function counter() {
  let result = 0;
  return function () {
    return ++result;
  };
}
const count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(counter()());
console.log(counter()());
console.log(count());
 */

// Задание 6 (тайминг 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.

// // Пример использования:
// console.log(sumDigits(123)); // 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumDigits(Math.trunc((number = number / 10)));
}
console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)
