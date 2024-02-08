# Generics

You can use generics in interfaces to make them more flexible. It turns them into a kind of function, which can return different types depending on what you pass in. https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types

```ts
interface Box<Type> {
  contents: Type;
}
const stringBox: Box<String> = { contents: "string" };
const numberBox: Box<number> = { contents: 1 };

type StringBox = Box<String>; // creating an implicit StringBox type
```
