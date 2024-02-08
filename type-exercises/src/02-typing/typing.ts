// Define two interfaces, Car and Bike, each with properties wheels (number) and color (string).
// Create objects of both types and set the correct value for willThisBeExecuted.
interface Car {
  // TODO: add wheels (number) and color (string)
  wheels: number,
  color: string
}

interface Bike {
  // TODO: add wheels (number) and color (string)
  wheels: number,
  color: string
}

let car: Car = { wheels: 4, color: "red" }; // TODO: What needs to be here?
let bike: Bike = { wheels: 2, color: "white" }; // TODO: What needs to be here?

if (typeof car === typeof bike) {
  // will this block if be executed?
  // write your answer here: (no)
  console.log("Will this block be executed?")
}
