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

// The Nullish Coalescing Operator
/* NOTE: The Nullish Coalescing Operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined. It is useful for providing default values without incorrectly overriding valid falsy values like 0 or "".
 */

const value = null ?? 'Default Value';
console.log(value); //

const username = undefined ?? 'Guest';
console.log(username);

const age = 0 ?? 18;
console.log(age);

/* 
If the left operand is null or undefined, it returns the right operand. Otherwise, it returns the left operand. Unlike || (OR), it does not consider 0, "", or false as nullish values.
*/
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

const guestNull = restaurant.numGuests ?? 10;
console.log(guestNull);
