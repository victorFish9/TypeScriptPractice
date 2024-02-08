# typeof operator

TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property (https://www.typescriptlang.org/docs/handbook/2/typeof-types.html).

```ts
const todo: Todo = {
  title: "Title",
  description: "Desc",
  completed: false,
};

type TypeOfTodo = typeof todo; // TypeOfTodo = Todo

if (typeof todo.title === "string") {
  // you can check primitive types as well with typeof, like "string" here
}
```
