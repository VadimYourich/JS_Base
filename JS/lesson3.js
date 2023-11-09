/* function greet (firstName, lastName, age) {
    return `Привет ${firstName} ${lastName} с возрастом ${+age}`
}
console.log(greet('Vladimir', 'Lee', 33)); */

/* function getCount() {
    let count = 0;
    return function () {
        count++;
        console.log(count);     
    }
}
const incr = getCount()
incr()
incr() */

/* function sumThreeNumbers(num1, num2, num3) {
  if (num3 === undefined) {
    return num1 + num2;
  } else {
    return sumThreeNumbers(num1 + num2, num3);
  }
}
console.log(sumThreeNumbers(2, 4, 6)); */

/* function squareRoot (num) {
    return Math.sqrt(num)
}
const a = squareRoot(4)
const b = squareRoot(9)
const c = a+b;
console.log(c); */

console.log(new Date());
function createGreetFunction() {
  const now = new Date();
  const hours = now.getHours();
  return function (name) {
    if (hours >= 6 && hours < 12) {
      return `Доброе утро ${name}`;
    } else if (hours >= 12 && hours < 18) {
      return `Добрый день ${name}`;
    } else if (hours >= 18 && hours < 22) {
      return `Добрый вечер ${name}`;
    } else {
      return `Доброй ночи ${name}`;
    }
  };
}
const greet = createGreetFunction();
console.log(greet("Вадим"));
