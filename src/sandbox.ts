// type aliases can make it easier to deal with union types
  // instead of 'uid: string | number' we can say 'uid: StringOrNum'
type StringOrNum = string | number;
// we can get even more complex, with the types for object entries being defined, and those types being other aliases
type objWtihName = {name: string, uid: StringOrNum};
// can simply use this type instead of 'user: { name: string; uid: StringOrNum }'

const logDeatails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWtihName) => {
  console.log(`${user.name} says hello`);
};