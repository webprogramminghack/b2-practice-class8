'use strict';

let message = 'Hello';
let phrase = message;

phrase = 'World';

// console.log(message);

let user = { name: 'John' };
let admin = user;

admin.name = 'Pete';

// console.log(user.name);

// {
//   let a = {};
//   let b = a;

//   console.log(a == b);
//   console.log(a === b);
// }

{
  let user = {
    name: 'John',
    age: 30,
  };

  let clone = {};

  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = 'Pete';

  // console.log(user.name);
}

{
  let someObject = { name: 'Wick' };
  let user = { name: 'John', someObject };

  let clone = Object.assign({}, user);
  // console.log('clone :>> ', clone);

  // console.log(user === clone);
  // console.log(user.someObject === clone.someObject);
}

{
  let user = {
    name: 'John',
    sizes: {
      height: 182,
      width: 50,
    },
  };

  let clone = structuredClone(user);

  console.log(user.sizes === clone.sizes);
}

const person = {
  name: 'John',
};
