/* const daysOfWeek = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

console.log(daysOfWeek[2]); */

/* 
// const username = 'Vlad';
// const surname = 'Lee';
// const age = 33;

// function User () {
//     this.name = username;
//     this.surname = surname;
//     this.age = age;
// }

// const userCard = new User(username, surname, age);
// console.log(userCard);

const user = {
  name: "Vlad",
  surname: "Lee",
  age: 33,
};

const { name, surname, age } = user;
delete user.name;
console.log(user.name);
console.log(name);

user.middleName = "Yourich";
console.log(user);

// console.log(`${user.name} ${user.surname} ${user.age}`);
 */

/* 
// из массивов собрали объект

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1,2,3,4,5,6,7];
// const obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }
// console.log(obj);

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1,2,3,4,5,6,7];
const obj = arr1.reduce((acc, el, i) => {
    acc[el] = arr2[i];
    return acc;
}, {});
console.log(obj);
 */

/* 
конвертнули в массив и возвели в квадрат значения объекта
const obj = {x: 1, y: 2, z: 3};
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
Object.keys(obj).forEach((el) => {
    obj[el] = obj[el]**2
})
console.log(obj);
 */

/* 
// получить сумму значений
const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
const arrValues = Object.values(obj);
// console.log(...arrValues);
const arr = [].concat(...arrValues.map((el) => Object.values(el)))
console.log(arr);

// // console.log(Object.values(obj));
// // [
// //     { key1: 1, key2: 2, key3: 3 },
// //     { key1: 4, key2: 5, key3: 6 },
// //     { key1: 7, key2: 8, key3: 9 }
// // ]

// // const arr = []
// // const arr1 = Object.values(obj.key1)
// // const arr2 = Object.values(obj.key2)
// // const arr3 = Object.values(obj.key3)

// // console.log(arr.concat(arr1, arr2, arr3));


// const values = Object.values(obj)
// const arr = values.reduce((acc, el) => acc.concat(Object.values(el)), [])
// const sum = arr.reduce((acc, el) => acc + el, 0)
// console.log(sum);


// let sum = 0;
// for (let key in obj) {
//     for (let innerKey in obj[key]) {
//         sum += obj[key][innerKey]
//     }
// }
// console.log(sum);
 */

/* 
// const question = "Зимой и летом одним цветом?";
// const hints = ["Подсказка 1: Постоянно зелёная", "Подсказка 2: Живёт в лесу"];
// const answer = "Ель";
// const riddles = {
//   question,
//   hints,
//   answer,
//   askQuestion: function () {
//     let userAnswer = prompt(this.question);
//     userAnswer = userAnswer.toLowerCase();
//     if (userAnswer === this.answer.toLowerCase()) {
//       console.log("Ответ верный");
//     } else {
//       for (const hint of this.hints) {
//         alert(hint);
//         userAnswer = prompt(this.question);
//         userAnswer = userAnswer.toLowerCase();
//         if (userAnswer === this.answer.toLowerCase()) {
//           console.log("Ответ верный");
//           return;
//         }
//       }
//     }
//     console.log("Вы проиграли");
//   },
// };
// riddles.askQuestion();

const question = "Зимой и летом одним цветом?";
const hints = ["Подсказка 1: Постоянно зелёная", "Подсказка 2: Живёт в лесу"];
const answer = "Ель";
class Riddle {
  constructor(question, hints, answer) {
    this.question = question;
    this.hints = hints;
    this.answer = answer;
  }
  askQuestion() {
    let userAnswer = prompt(this.question);
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer === this.answer.toLowerCase()) {
      console.log("Ответ верный");
    } else {
      for (const hint of this.hints) {
        alert(hint);
        userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLowerCase();
        if (userAnswer === this.answer.toLowerCase()) {
          console.log("Ответ верный");
          return;
        }
      }
    }
    console.log("Вы проиграли");
  }
}
const riddles = new Riddle(question, hints, answer);
riddles.askQuestion();
 */
