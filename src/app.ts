import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

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

  // using tuples to remove redundancy in the code - compare to previous example
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    // using the spread operator with the tuple to duplicate it; feeding it as the values for the invoice class
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});

// TUPLES - able to hold multiple types, but the type for each index is set after it's been initialized

// regular array behavior
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false; - can't do this! the type for the 0 index is set to string
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li']; - not acceptable for reason above
student = ['chun-li', 23564];