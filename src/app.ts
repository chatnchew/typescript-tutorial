import { Invoice } from './classes/Invoice.js';

// interfaces - differs from a class in that it's not used to create new objects, but enforce a specific structure
export interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
  spend(a: number): number;
}

// in a way it puts type parameters around an object; for instance, the object below HAS to have a name and the two methods, and can include an age

const me: IsPerson = {
  name: 'shaun',
  //age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
// running the speak method on the following string
me.speak('hello, world');

// using IsPerson to define the type of the parameter
const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
};
greetPerson(me);
//greetPerson({name: 'shaun'});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});