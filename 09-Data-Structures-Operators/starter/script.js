// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [days[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [days[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [days[2]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [days[3]]: {
//     day: 'Closed on Thursday',
//   },
//   [days[4]]: {
//     day: 'Closed on Friday',
//   },
//   [days[5]]: {
//     day: 'Closed on Saturday',
//   },
//   [days[6]]: {
//     day: 'Closed on Sunday',
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,
// };
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const [item1, item2] of menu.entries()) {
//   console.log(`${item1 + 1}:- ${item2}`);
// }

// console.log([...menu.entries()]);

// console.log(restaurant.openingHours);
// console.log(openingHours);

// console.log(
//   restaurant.openingHours?.fri?.open || restaurant.openingHours?.fri?.day
// );

// const keyValue = Object.keys(openingHours);
// console.log(keyValue);

// const valueValue = Object.values(openingHours);
// console.log(valueValue);

// const entriesValue = Object.entries(openingHours);
// console.log(entriesValue);

// console.log(`On ${keyValue.openingHours} we are open at ${valueValue.open}`);

// // TODO: Coding challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const item = game.scored;
// console.log(item);

// for (const [goal, name] of item.entries()) {
//   console.log(`Goal ${goal + 1}: ${name}`);
// }

// const average = Object.entries(game.odds);
// console.log(average);

// let sum = 0;
// for (const [index, [teamName, oddsValue]] of average.entries()) {
//   sum = sum + Number(oddsValue);
// }

// const avg = sum / average.length;
// console.log(avg);

// for (const [index, indexValues] of Object.entries(game.odds)) {
//   const teamStr = index === 'x' ? 'Draw' : `victory ${game[index]}`;
//   console.log(`Odd of ${teamStr}: ${indexValues}`);
// }

// // TODO: WORKING with STRINGS

// const log = console.log;

// const stringValue = 'This is String';
// console.log(stringValue);

// //Slice method
// console.log(stringValue.slice(5)); // begining value from start
// log(stringValue.slice(5, 7)); // with begining & end value

// //negative Slice value
// log(stringValue.slice(-1)); // negative value starts from end of the string

// log(stringValue.lastIndexOf(' '));

// const value = function (str) {
//   const s = str.slice(-1);
//   const ans =
//     s === 'r' || s === 's'
//       ? 'Your name ends with R or S'
//       : 'Your name not ends with R or S';
//   console.log(ans);
// };

// value('Rajeshwar');
// value('Ravi');
// value('Sonys');

// const CapitalizeName = name => {
//   const names = name.split(' ');
//   console.log(names);

//   const namesUpper = [];

//   for (const n of names) {
//     console.log(namesUpper.push(n[0].toUpperCase() + n.slice(1)));
//   }
//   console.log(namesUpper.join(' '));
// };

// console.log(CapitalizeName('ravi kumar singh'));
// CapitalizeName('sony yadav');
// CapitalizeName('my name is khan');

// // TODO: Challenge #4 Working with strings

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');
// const textArea = document.querySelector('textarea');

// btn.addEventListener('click', () => {
//   const text = textArea.value.split('\n');
//   console.log(text);

//   let store;
//   for (let j = 0; j < text.length; j++) {
//     const lineText = text[j].trim().split('_');
//     const [first, second] = lineText;
//     store =
//       `${first[0].toLowerCase() + first.slice(1)}${
//         second[0].toUpperCase() + second.slice(1).toLowerCase()
//       }`.padEnd(20, ' ') + `${'✅'.repeat(j + 1)}`;

//     console.log(store);
//   }
// });

// console.log(3 || 'hello');
// console.log(true || false);
// console.log(undefined || null);
// console.log('name' && 0 && undefined && 'text');

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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const callingFun = function (value, fun) {
  return fun(value);
};

console.log(callingFun('This Is String', oneWord));
console.log(callingFun('This Is String', firstUpperWord));
