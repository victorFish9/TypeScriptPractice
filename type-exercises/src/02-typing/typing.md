# Structural typing (compare to e.g. Java with Nominal-typing)

```ts
type Foo = {
  x: number;
};

type Bar = {
  x: number;
};

let foo: Foo = { x: 1 };
let bar: Bar = { x: 1 };

// as the structure of the objects is the same, the types can be used interchangeably:
let example: Bar = foo; // `foo` object is also compatible with the type `Bar`
```
