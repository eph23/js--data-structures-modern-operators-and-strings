'use strict';

// Working with strings
const airline = 'Bangladesh Biman';
const plane = 'A320';

// Accessing value using []
console.log(airline[0]);
console.log(airline[1]);

// String property
console.log(airline.length);
console.log('B737'.length);

// Array Methods
console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Bangladesh'));
console.log(airline.indexOf('Biman'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Ephraim'));
console.log(typeof new String('Ephraim'));
