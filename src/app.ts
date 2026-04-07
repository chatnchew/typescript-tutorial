// classes
  // reminder - a class is basically a blueprint for an object

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    // the constructor will assign the values passed in for c, d, and a to the client properties; 'this' here is the object created by the class
    this.client = c;
    this.details = d;
    this.amount = a;
  };

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}.`;
  };
};

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
// the utility for this - in the future we could for instance create an array that ONLY allows invoice types

let invoices: Invoice[] = [];
// invoices.push('hello') would return an error
invoices.push(invOne); // allowed, because this is an Invoice object type
invoices.push(invTwo); // allowed, because this is an Invoice object type
console.log(invoices)

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
