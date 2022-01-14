'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const days = ['mon','tue','wed','thu','fri','sat','sun'];

  const openingHours =  {
    [days[0]]: {
      open: 12,
      close: 22,
    },
    [days[1]]: {
      open: 11,
      close: 23,
    },
    [days[2]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
    [days[3]]: {
      day:'Closed on Thursday'
    },
    [days[4]]: {
      day:'Closed on Friday'
    },
    [days[5]]: {
      day:'Closed on Saturday'
    },
    [days[6]]: {
      day:'Closed on Sunday'
    },
  };
  
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
};
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for(const [item1, item2] of menu.entries()) {
//   console.log(`${item1 +1}:- ${item2}`);
// }

// console.log([...menu.entries()]);

// console.log(restaurant.openingHours);
// console.log(openingHours);

// console.log(restaurant.openingHours?.fri?.open || restaurant.openingHours?.fri?.day);

// const keyValue = Object.keys(openingHours);
// console.log(keyValue);

// const valueValue = Object.values(openingHours);
// console.log(valueValue);

// const entriesValue = Object.entries(openingHours);
// console.log(entriesValue);

// console.log(`On ${keyValue.openingHours} we are open at ${valueValue.open}`);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


const item = game.scored;
console.log(item);

for(const [goal, name] of item.entries()) {
  console.log(`Goal ${goal +1}: ${name}`);
}

const average = Object.entries(game.odds);
console.log(average);

let sum = 0;
for(const [index, [teamName, oddsValue]] of average.entries()) {
  sum = sum+Number(oddsValue);
}

const avg = sum / average.length;
console.log(avg);

for(const [index, indexValues] of Object.entries(game.odds)) {
  const teamStr = index === 'x' ? 'Draw' : `victory ${game[index]}`;
    console.log(`Odd of ${teamStr}: ${indexValues}`);
}