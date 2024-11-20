'use strict';

{
  let user = {
    name: 'John',
    age: 30,
  };

  user.sayHi = function () {
    console.log('Hello');
  };

  // user.sayHi();
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      console.log('Hello');
    },
  };
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi: function () {
      console.log('Hello');
    },
  };

  // user.sayHi();
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi: () => {
      console.log('Hello');
    },
  };

  // user.sayHi();
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      console.log(this.name);
    },
  };

  // user.sayHi();
}

{
  let user = { name: 'John' };
  let admin = { name: 'Admin' };

  function sayHi() {
    console.log(this.name);
  }

  user.sayHi = sayHi;
  admin.sayHi = sayHi;

  // user.sayHi();
  // admin.sayHi();
}

{
  function sayHi() {
    console.log(this);
  }

  // sayHi();
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi: function () {
      console.log(this);
    },
  };

  // user.sayHi();
}

{
  let user = {
    firstName: 'Ilya',
    sayHi() {
      let arrow = () => {
        console.log(this);
      };

      arrow();
    },
  };

  // user.sayHi();
}

const user2 = {
  firstName: 'John',
};

// {
//   let user = {
//     firstName: 'Ilya',
//     sayHi() {
//       let arrow = function () {
//         console.log(this);
//       }.bind(user);

//       arrow();
//     },
//   };

//   user.sayHi();
// }
