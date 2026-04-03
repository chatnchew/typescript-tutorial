// function basics
let greet: Function;
greet = () => {
  console.log("hello world");
};
// typescript will automatically infer a function's type as function; trying to set it as another data type will result in an error
// here we've set the type explicitly before defining the function

const add = (a: number, b: number, c: number | string = 20) => {
  console.log(a + b);
  console.log(c);
};
// the return type of this function is void, since nothing is actually being returned; it's rendered to undefined when compiled to JS

add(5, 10);
// placing a question mark before type definition will make it an optional parameter; it's value will be undefined
// can set default values for parameters like normal; it's recommended to place these and optional parameters last

const minus = (a: number, b: number): number => {
  // you can set a type for the returned value explicitly, but it's not always necessary
  return a + b;
}

let result = minus(10, 7); // result has the type of the returned value of the function (a number); we cannot change the type later since it's already been inferred

