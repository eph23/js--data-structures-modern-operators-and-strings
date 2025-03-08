'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Destructuring arrays
/* NOTE: Array Destructuring is a modern ES6 feature that allows you to unpack values from arrays into distinct variables easily. This makes working with arrays more readable and efficient.
 */
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// Skipping array element
const [firstElement, , thirdElement] = restaurant.categories;
console.log(firstElement, thirdElement);

// Swapping/switching values
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring in Function Returns
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [l, , [n, o]] = nested;
console.log(l, n, o);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
