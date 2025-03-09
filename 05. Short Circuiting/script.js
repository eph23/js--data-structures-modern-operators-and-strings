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

// Short circuiting
/* NOTE: Short-circuiting in JavaScript occurs when logical operators (&& and ||) stop evaluating as soon as the result is determined, without checking the remaining conditions.
 */

console.log('---OR---');
// Using || OR
/* NOTE: 
|| (OR) checks from left to right and returns the first truthy value. If all values are falsy, it returns the last value.
*/
console.log('Eph' || 'Hello');
console.log(0 || 'Hello');
console.log('' || false || 'JS');

console.log(undefined || 0 || '' || 'Hello' || 23);

// Ternary
const guestsTernary = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guestsTernary);

const guestsOr = restaurant.numGuests || 10;
console.log(guestsOr);

console.log('---AND---');

// Using && AND
/* NOTE: 
&& (AND) checks from left to right and returns the first falsy value. If all values are truthy, it returns the last value.
*/

console.log('Eph' && 'Hello');
console.log(0 && 'Hello');
console.log(true && false && 'JS');

console.log('Hello' && 23 && null && 'Ephraim');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Olive');
