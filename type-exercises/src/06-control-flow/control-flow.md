# Control flow analysis (CFA)

Typescript uses control flow analysis (CFA) to narrow down the type by following JavaScript logic.

```ts
const squared = (x: number | undefined) => {
  // NOTE: x can be a number or undefined, this is a union, more on this later
  if (!x) {
    throw "Undefined";
  }
  //x can only be a number at this point based on CFA
  return x * x;
};
```
