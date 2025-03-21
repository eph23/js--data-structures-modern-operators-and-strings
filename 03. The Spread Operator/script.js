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
};

// The Spread Operator
/* NOTE:The spread operator (...) in JavaScript is used to expand iterable elements (like arrays, objects, or strings) into individual elements. It allows for copying, merging, and passing elements efficiently in functions and data structures.
 */

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

// Copying an Array
const mainMenuCopy = [...restaurant.mainMenu];

// Merging Arrays
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spreading Strings into Characters
const str = 'Ephraim';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);
/* 
// Spread operator as function argument
const ingredients = [
  prompt(`Lets make pasta! Ingredient 1?`),
  prompt(`Lets make pasta! Ingredient 2?`),
  prompt(`Lets make pasta! Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); */

// Copying and Merging Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
