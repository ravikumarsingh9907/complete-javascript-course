'use strict';

// TOPIC: Default functions *******
// const store = [];

// const fun = function (name, experience, salary, roll = 'Web developer') {
//   salary = experience === 'none' ? 8000 : experience * 8000;

//   const value = {
//     name,
//     roll,
//     salary,
//     experience,
//   };
//   // console.log(value);
//   store.push(value);
//   // console.log(store);
// };

// fun('Ravi', 5);
// fun('Sony', 'none');
// fun('Singh', 3);

// console.log(store);

// // TOPIC: Passing by Value functioins
// const flighNumber = 'LH234';
// const flighDetials = {
//   name: 'Ravi Kumar',
//   passport: 7685493456,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH432';
//   passenger.name = `Mr. ${passenger.name}`;
//   passenger.passport === 7685493456
//     ? alert('you can check in')
//     : alert('access denied');
// };

// checkIn(flighNumber, flighDetials);
// console.log(flighNumber);
// console.log(flighDetials);

// TOPIC: Higher Order Functions********

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const firstUpperWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const callingFun = function (value, fun) {
//   return fun(value);
// };

// console.log(callingFun('This Is String', oneWord));
// console.log(callingFun('This Is String', firstUpperWord));

//TOPIC: writting higher order functions********

//first way of definig function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//second way of defining function
// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

//thrid way of defining function
const greet = greeting => name => console.log(`${greeting} ${name}`);

//first way of passing value
const greetFun = greet('Hey!');
greetFun('Ravi');

// second way of passing value
greet('Hey!')('Shashi');
