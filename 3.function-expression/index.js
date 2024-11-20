'use strict';

function sayHi() {
  console.log('Hello');
}

// const sayHi = function () {
//   console.log('Hello')
// }

// let func = sayHi;
// let func2 = func;
// func2();

// function ask(question, yes, no) {
//   const answer = prompt(question);

//   if (answer.toLowerCase() === 'yes') {
//     yes();
//   } else {
//     no();
//   }
// }

// ask(
//   'Do you agree',
//   function () {
//     alert('You agreed');
//   },
//   function () {
//     alert('You canceled the execution');
//   }
// );

// {
//   sayHi('Edwin');

//   function sayHi(name) {
//     console.log(`Hello, ${name}`);
//   }
// }

{
  const sayHi = function (name) {
    console.log(`Hello, ${name}`);
  };

  sayHi('Edwin');
}
