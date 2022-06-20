const Dog = require('./js/Dog.js')


// OOP - object oriented programming

/*
Parametrai - ka zinau, koks as (informacija)
metodai - ka galiu (funkciolumas)
*/
console.clear();

const rex = new Dog('Rex');
const brisius = new Dog('Brisius');

console.log(rex);
console.log(brisius);

console.log(rex.name);
console.log(brisius.name);



console.log(rex.voice());
console.log(brisius.voice());


console.log(rex.getBone());
console.log(brisius.getBone());