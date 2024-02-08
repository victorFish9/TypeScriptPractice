// TODO: Value is now of type any, how could you force it be a Person.
var value = JSON.parse('{"name": "John"}');
console.log(value.name);
/**
 * NOTE: usually if reading unknown data from a file, an API or database we might use a schmema validation library
 * like Zod (https://github.com/colinhacks/zod) to validate the input, so using "as" is not a good practice
 * */
