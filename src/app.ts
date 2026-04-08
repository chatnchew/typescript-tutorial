import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value, 'end');
});

// GENERICS - used to make sure that all of the properties of a copied object are carried over

// for example, in the below function, accessing the .name property of the duplicated object results in an error

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// here, we can capture the properties of the object and include them when they're returned in the new object
  // the extends makes it clear that the properties are only extended to objects

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun'); - not allowed, as the type is set up to be an object

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  // here we're using generics to say data will be defined when we create an object using the Resource interface
    // makes it flexible; if the data is a string, an object, or whatever, it can be defined as such
  data: T;
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  // here we passed in the type object
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  // and here we passed in the type array - all with the same interface
  data: ['bread', 'milk']
};

console.log(docThree, docFour);