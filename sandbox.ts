// any type
let age: any = 25;
// means that it can take literally any type - number, string, boolean, etc - and be reassigned to any type later. all of the below is allowed

age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "luigi" };
console.log(age);

// long story short - makes TS operate more like JS. has limited real usage b/c it can be dangerous!

let mixed: any[] = [];
// this array can now take any kind of value
mixed.push(5);
mixed.push("mario");
mixed.push(false);

console.log(mixed);

// same with object literals
let ninja: { name: any; age: any };

ninja = { name: "yoshi", age: 25 };
console.log(ninja);

ninja = { name: 25, age: "yoshi" };
console.log(ninja);