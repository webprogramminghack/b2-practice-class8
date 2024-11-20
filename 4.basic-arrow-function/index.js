'use strict';

// function sum(a, b) {
//   return a + b;
// }

// expression + arrow
const sum = (a, b) => a + b;

// console.log(sum(1, 2));

let age = 18;

let welcome =
  age < 18 ? () => console.log('Hello') : () => console.log('Greetings');

// welcome();

{
  let sum = (a, b) => {
    let result = a + b;
    console.log('The result is', result);
    return result;
  };

  sum(1, 2);
}

// function ask(question, yes, no) {
//   const answer = prompt(question);

//   if (answer.toLowerCase() === 'yes') yes(`It's cool`);
//   else no();
// }

// ask(
//   'Do you agree',
//   (reason) => alert(`You agreed, ${reason}`),
//   () => alert('You canceled the execution')
// );

// const createPersonObject = (name, age) => {
//   return {
//     name: name,
//     age: age,
//   };
// };

// const createPersonObject = (name, age) => ({
//   name: name,
//   age: age,
// });

const createPersonObject = (name, age) => ({
  name,
  age,
});

const person = createPersonObject('John', 30);

console.log(person);
