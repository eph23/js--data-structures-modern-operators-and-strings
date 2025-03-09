'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
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
};

// Destructuring objects
/* NOTE: Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise and readable way. It helps you easily access specific values without having to reference the object repeatedly.
 */

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming Variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu);
console.log(starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Destructuring
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

// Default Values
const product = {
  model: 'Asus Z600',
  price: 1200,
};

const { model, price, stock = 10 } = product;
console.log(model, price, stock); // Laptop 1200 10

// Destructuring function parameter
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
