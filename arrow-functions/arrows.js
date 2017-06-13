const names = ['Bex', 'Max', 'Chloe'];

// ES5 syntax
const fullNames = names.map(function(name) {
  return `${name} Pricefield.`;
});

// Fat arrow
const fullNames2 = names.map((name) => {
  return `${name} Pricefield`;
});

// If there's only one argument, I can omit the () around the parameter
const fullNames3 = names.map(name => {
  return `${name} Pricefield`;
});

// Fat arrow functions have implicit returns.
const fullNames4 = names.map(name => `${name} Pricefield`);

// No arguments need empty ()
const fullNames5 = names.map(() => `❤️  Pricefield`);

// console.log(fullNames5);

// ============================
/* Fat arrow functions are always anonymous,
but can be assigned to a variable. */

const sayMyName = (name) => { alert(`Hello ${name}!`)}

// sayMyName('Bex');

// ============================

const race = '100m dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda boss'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

const ages = [23, 62, 45, 234, 1, 33, 78, 21];

const old = ages.filter(age => age >= 60);

// console.log(old);

/* When not to use an arrow function =============================================================

It's not the case that arrow functions replaced ES5 syntax functions. Here's when not to use them:

1. When you need 'this':            */

var btn = document.querySelector('#pushy');

btn.addEventListener('click', () => {
  console.log(this);        // Window
  this.classList.toggle('on');
});

// In the above example, 'this' is bound to the window because arrow functions do not bind 'this' within the block, but rather inherit the context of the surrounding scope.

btn.addEventListener('click', function() {
  console.log(this);        // button
  this.classList.toggle('on');
});

// 2. When you need a method to bind to an object:

const person = {
  points: 23,
  score() {
    this.points++;
  }
}

// 3. When you need to add a prototype method:

class Car {
  constructor(make, colour) {
    this.make = make;
    this.colour = colour;
  }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = () => {
  return `This car is a ${this.make} in the colour ${this.colour}`; // "This car is undefined in the colour undefined."
};

// 4. When you need argument object:

const orderChildren = () => {   // ReferenceError: 'arguments' is not defined
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was child #${i + 1}`;
  })
  console.log(arguments);
}


