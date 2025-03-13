'use strict';

// Working with strings
console.log('a+very+nice+string'.split('+'));
console.log('Ephraim S'.split(' '));

const [firstName, lastName] = 'Ephraim S'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ephraim s');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('ephraim'.padStart(25, '+'));

console.log(message.padEnd(35, '+'));
console.log('Ephraim'.padEnd(50, '+'));

console.log(message.padStart(35, '+').padEnd(50, '+'));

const maskCreditCard = function (number) {
  const str = number + '';

  const slicedNum = str.slice(-4);
  return slicedNum.padStart(str.length, '*');
};

console.log(maskCreditCard(2254654858775));
console.log(maskCreditCard(555456668887788899));

const messagesNotification = 'Bad weather.... All Departures Delayed...';
console.log(messagesNotification.repeat(5));

const planesInLine = function (n) {
  console.log(`There are are ${n} planes in line ${'🛫'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
