/* const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (const i of myArray) {
  console.log(i);
}

myArray.forEach((element, i, arr) => {
    console.log(element, i, arr);
}); */

// const arr = Array(50);
// console.log(arr);

/* const obj = {
  people: 47,
};
const a = "plane";
const arr = Array.from({ length: obj.people }, (_, i) => `${a} plase ${i + 1}`);
arr[10] = { name: "Vova" };
console.log(arr);
// const arr = Array.from({ length: obj.people }).fill(0);
// console.log(arr); */

/* const arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
// }
for (let iterator of arr) {
    iterator++
}

console.log(arr);

arr.forEach(el => {
    el++
})
console.log(arr); */

/* const arr = [1,2,3,4,5];
console.log(arr.pop());
console.log(arr); */

/* let num = 1;
let count = 0;

while (num <= 1000) {
    num *= 3;
    count++
}console.log(`Результат произведений равен ${num}, а итераций в цикле ${count}`); */

/* const arr = [2,5,9,15,1,4];
const newArray = arr.filter((el) => el > 3 && el < 10)
console.log(newArray); */

/* const arr = [1,2,3,4,5];
const res = arr.reduce((F, el, i) => F * el + i)
console.log(res); */

/* // const sum = Array.from({length: 50}, (_,i) => 2 + i * 2)
// .reduce((acc, el) => acc + el, 0)
// console.log(sum);
const arr = Array(50).fill(0);
const sum = arr.map((_, i) => 2 + i * 2).reduce((acc, el) => acc + el, 0);
console.log(sum);
 */
