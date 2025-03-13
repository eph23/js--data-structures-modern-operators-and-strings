'use strict';

// Working with strings
const airline = 'Bangladesh Biman';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'ePHraIM';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@gmail.com';
const loginEmail = '    Hello@GMAIL.com \n';

const correctEmail = email.toLowerCase().trim();
console.log(correctEmail);

const priceGB = 'GBP288,97';
const priceUS = priceGB.replace('GBP', 'USD').replace(',', '.');

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Neo'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
