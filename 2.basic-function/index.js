'use strict';

{
  function showMessage() {
    console.log('Hello everyone!')
  }
}

{
  function showMessage() {
    const message = 'Hello'
    console.log('Hello everyone!')
  }

  // console.log(message);
}

{
  let userName = 'John';

  function showMessage() {
    const message = 'Hello' + ' ' + userName;
    // console.log(message)
  }

  // showMessage();
}

{
  let userName = 'John';

  function showMessage() {
    userName = 'Bob';
    let message = 'Hello, ' + userName;
    // console.log(message);
  }

  // showMessage();

  // console.log(userName);
}

{
  function showMessage(from, text) {
    console.log(from + ': ' + text)
  }

  // showMessage('Ann', 'Hello');
  // showMessage('Bob', `What's up`);
}

{
  function showMessage(from, text = 'Hello everyone') {
    console.log(from + ': ' + text)
  }

  // showMessage('Bob');
  // showMessage('Ann', 'Hello');
}

{
  function sum(a, b) {
    return a + b;
  }

  let result = sum(1,2)
  // console.log(result);

  let result2 = sum(4,5,6);
  // console.log(result2)
}

{
  function greeting() {
    console.log('Hello');
  }

  // console.log(greeting());
}

{
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  const age = 18;

  // if (checkAge(age)) {
  //   console.log('Access granted');
  // } else {
  //   console.log('Access denied');
  // }
}

function doSomething(execute, text) {
  if (!execute) return;
  
  console.log(text);
}

// doSomething(false, 'Hello everyone');

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

// showPrimes(10);
