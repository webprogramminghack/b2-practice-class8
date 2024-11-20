'use strict';

let user = null;

// console.log(user.address);
// console.log(user.address.street);

console.log(user?.address?.street);

let user1 = {
  firstName: 'John',
};

let user2 = null;

let key = 'firstName';

console.log(user1[key]);
console.log(user2?.[key]);

delete user2?.name?.asdasd;
