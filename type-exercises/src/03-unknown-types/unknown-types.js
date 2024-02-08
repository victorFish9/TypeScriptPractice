// Refactor the code to use specific types wherever possible.
var myNumber = 1; // TODO: change this any type so that three lines below give errors.
/*
myNumber = "Hello"; // this should give a type error
myNumber.length // this should give an error
myNumber.toUpperCase() // this should give a type error*/
var myString = "Hello"; // TODO: What to use instead of unknown?
// What could you change the unknown type to be so that this if wouldn't be needed?
var length = myString.length;
console.log(length);
