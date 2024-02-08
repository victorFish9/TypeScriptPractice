// Create a function that takes a union type of strings and numbers
// and demonstrates how to narrow down the type using type guards.

// TODO: what needs the type of this typeguard be instead of never, so that this typeguard can be used to validate a number type.
const isNumber = (value: any): never => {
    return typeof value === "number";
};

const printNumberFormatted = (value: any | number) => {
    if (isNumber(value)) {
        console.log("Not a number"); // it's not a number
    } else {
        console.log(value.toFixed(2)); // we can access the properties of number after asserting with the isNumber guard
    }
};
