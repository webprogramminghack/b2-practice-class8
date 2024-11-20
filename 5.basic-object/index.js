'use strict';

let user = {
  name: 'John',
  age: 30,
};

// console.log(user.name);
// console.log(user.age);

user.isAdmin = true;

delete user.age;

// console.log(user);

{
  let user = {
    name: 'John',
    age: 30,
    'likes birds': true,
  };

  // console.log(user['likes birds']);

  let key = 'hobby';
  user[key] = 'playing games';

  // console.log(user);
}

{
  const fruit = 'apple';

  const bag = {
    [fruit]: 5,
  };

  // console.log(bag);
}

{
  let obj = {
    0: 'test',
  };

  // console.log(obj['0']);
}

{
  let user = { name: 'John', age: 30 };
  // console.log('age' in user);
  // console.log('hobby' in user);
}

{
  let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    // console.log(key);
    // console.log(user[key]);
  }
}

{
  let codes = {
    49: 'Germany',
    41: 'Switzerland',
    44: 'Great Britain',
    1: 'USA',
  };

  for (let code in codes) {
    console.log(code);
  }
}
