'use strict';

// function constructor
function User(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
  this.country = 'Indonesia';
}

let user = new User('John', false);

// console.log(user);

let user2 = new User('David', true);
// console.log(user2);

{
  // function BigUser() {
  //   this.name = 'John';
  //   return { name: 'Godzilla' };
  // }
  // console.log(new BigUser().name);
}

{
  function User(name) {
    this.name = name;
    this.sayHi = function () {
      console.log(`My name is: ${this.name}`);
    };
  }

  let john = new User('John');
  // john.sayHi();
}
