import { HasFormatter } from "../interfaces/HasFormatter";

/* 
1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' to the container 
    -- accepts arguments: invoice or payment, a heading, a position
    -- create the html template (li, h4, p)
    -- ad the 'li' template to the start/end of the list
*/

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    // both invoice and payment classes implement the HasFormatter interface, so the item param is inclusive of both
    // position is a union type, taking two of the given strings to specify placement

    const li = document.createElement('li'); // creating an li and saving it to this variable
  
    const h4 = document.createElement('h4');
    h4.innerText = heading; // making the inner text of this h4 variable to the heading passed in by the user
    li.append(h4); // adding this title to the created li, at the top

    const p = document.createElement('p');
    p.innerText = item.format(); // making the text equal to the text formatted by the object's format method
    li.append(p);

    if(pos === 'start'){
      // determining if the newly created li is going to be at the start or end of the list
      this.container.prepend(li); // remember - the container here is the ul, created when a new ListTemplate class is created
    } else {
      this.container.append(li);
    };
  };
};