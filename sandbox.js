"use strict";
// arrays
let names = ['luigi', 'mario', 'yoshi'];
// names is ALSO fixed to being an array; cannot redeclare as a single string variable, for instance
names.push('toad');
// names.push(3); - this will return an error, because the type for the array was set to string when it was created 
// names[0] = 3; - this will result in an error for the same reason
let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); - this will error 
// numbers[1] = 'shaun'; - and so will this
let mixed = ['ken', 4, 'chun-li', 8, 9]; // this is now an array with mixed types, and can now accept both strings and numbers
mixed.push('ryu'); // this is acceptable
mixed.push(10); // as is this
mixed[0] = 3; // can change the index to data of a different type, as long as its one of the types from when the array was created
// mixed.push(true); - this will error, because booleans were not included in the original array definition
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// the properties have been declared as specific types and they cannot be changed; the object also cannot be redeclared as, say, an array
ninja.age = 40; // acceptable
ninja.name = 'ryu'; // acceptable
// ninja.age = '30'; - not acceptable
// CAN update the object to be something entirely different like so:
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// have to include the same number of properties, and each property must be the same data type; cannot omit properties or add another, or change the type of the properties
