'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Cla1ssico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Rest Pattern
/* NOTE:TThe rest pattern (...) collects multiple elements and puts them into an array or object.
The rest parameters (...) allow functions to accept an indefinite number of arguments as an array.
 */

const [first, second, ...restNumbers] = [1, 2, 3, 4, 5, 6];
console.log(first); // 1
console.log(second); // 2
console.log(restNumbers); // [3, 4, 5, 6]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest Pattern with Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat);
console.log(weekDays);

// Rest parameter
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');
