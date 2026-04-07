import { HasFormatter } from '../interfaces/HasFormatter.js'; // importing the module that contains the interface

export class Invoice implements HasFormatter {
  // stating that this class MUST follow the structure of the interface - meaning it must include a format method that returns a string
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
};