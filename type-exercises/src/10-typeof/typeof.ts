// Use the typeof operator to generate a type that matches the structure of the object.
const sampleTodo = {
    title: "Title",
    description: "Desc",
    completed: false,
};

// TODO: how to get the type of sampleTodo automatically, so we don't need to repeat all the fields here?
type TypeOfTodo = typeof sampleTodo;

console.log("title", sampleTodo.title)