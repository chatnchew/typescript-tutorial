// explicit types
let character: string;
// intializing the variable with the string type without a value. same can be done for other types
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; not allowed, since we've set the type to number
age = 30; // allowed

// isLoggedIn = 25 - not allowed
isLoggedIn = true; // allowed

// arrays
// let ninjas: string[];
// set this to be an array of strings ONLY - but this doesn't initialize the array with a value of any kind
  // ex ninjas.push('shuan'); would return an error

let ninjas: string[] = []; // this is the more proper way of initializing an array with a type in TS
ninjas = ['yoshi', 'mario'];

// union types
let mixed: (string | number)[] = [];
// initializing an empty array with mixed types using union types

mixed.push('hello'); // allowed
mixed.push(20); // allowed
// mixed.push(false); - not allowed, unless we specify the boolean type too


let uid: string | number; // if giving a union type to a regular variable, parenthesis not required
uid = '123';
uid = 123; // both types are allowed, since we specified the union typing

// objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30}; // allowed
ninjaOne = []; // allowed - remember, arrays are objects!
// ninjaOne = '' ; - not allowed, as this is a string

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};
// not only are we saying ninjaTwo must be an object, but that its properties must also have specific types
  // ex ninjaTwo = {} - not allowed, as it must have the set properties with the set types

ninjaTwo = {name: 'mario', age: 20, beltColor: 'black'}; // also cannot add additional properties, like skillLevel: 'high' since they weren't defined in the original typing
