// function signatures - defines what arguments it takes in and what type it returns

// ex 1
let greet: (a: string, b: string) => void;
// this means that this function will take two strings and return a value with type void
  // the parameters can be called whatever in the signature; they're moreso there to define the type
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
};

// ex 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    // have to write the function so that whatever the return value is is a number, as specified
    return numOne - numTwo
  };
};

// ex 3
let logDetails: (obj: {name: string, age: number}) => void;

// using a type alias to fit the function signature
type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};