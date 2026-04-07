// interacting with the DOM

// const anchor = document.querySelector('a')!;

// typescript will be wary about accessing object properties of DOM elements; this can be overriden with a ! as seen above or like so:
   // if(anchor) {
   //  console.log(anchor.href); }

// console.log(anchor.href);
// typescript will be able to pick up that an anchor tag was grabbed with this variable, and provide intellisense suggestions that are relevant

// const form = document.querySelector('form')!; - this will grab the form element
// const form = document.querySelector(".new-item-form")! - this grabs a generic element, as this is a class and not the specific form element
// we can use typecasting to cast a certain type onto this class - this will explicitly make the type HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevent default refresh behavior as per usual

  console.log(
    type.value, 
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});
