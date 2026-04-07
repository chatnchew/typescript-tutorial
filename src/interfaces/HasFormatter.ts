export interface HasFormatter {
  // this format method must return a string; all that this is specifying
  // we can then say a class must include it
  format(): string;
}