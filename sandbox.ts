// variable declaration is the same as in JS 
let character = 'mario';
// 'number' type covers all kinds of numeric figures, including floats/decimals
let age = 30;
// boolean 
let isBlackBelt = false;
// once types are declared - either by inference or explicitly - they cannot be changed; this is the benefit of TS
  // ex - character = 30 // won't work because the type for this variable is string
  // character = 'luigi' // will work because this is another string

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
// here we've explicitly set the type of the parameter - this means a number MUST be passed as the parameter for this function; it won't compile if the wrong type is given
console.log(circ(7.5));