'use strict';

{
  let arr = ['I', 'study', 'JavaScript'];

  // console.log(arr.splice(1, 2));
}

{
  let arr = ['t', 'e', 's', 't'];

  // console.log(arr.slice(2, 4));
}

{
  let arr = [1, 2];
  // const newArray = arr.concat([3, 4]);
  const newArray = arr.concat([3, 4], [5, 6, 7]);
  // console.log(arr);
  // console.log(newArray);
}

// const fruits = ['Apple', 'Orange', 'Plum'];

// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[0] = 'Watermelon';
// console.log(fruits);

// console.log(fruits.length);
// console.log(fruits[0].length);

let arr = [
  'Apple',
  { name: 'John' },
  true,
  function () {
    console.log('hello');
  },
];

// console.log(arr[1].name);

// arr[3]();

let fruits = ['Apple', 'Orange', 'Plum'];

// console.log(fruits.at(-1));

{
  let fruits = ['Apple', 'Orange', 'Plum'];
  fruits.pop();
  // console.log(fruits);
}

{
  let fruits = ['Apple', 'Orange', 'Plum'];
  fruits.push('Watermelon', 'Pear');
  console.log(fruits);
}

{
  let fruits = ['Apple', 'Orange', 'Plum'];
  fruits.shift();
  // console.log(fruits);
}

{
  let fruits = ['Apple', 'Orange', 'Plum'];
  fruits.unshift('Watermelon');
  // console.log(fruits);
}

{
  let fruits = ['Apple', 'Orange', 'Pear'];

  for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
  }
}

{
  let fruits = ['Apple', 'Orange', 'Pear'];

  for (let fruit of fruits) {
    // console.log(fruit);
  }
}
