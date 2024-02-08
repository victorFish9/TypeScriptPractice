# Conditional types + extends keyword

```ts
// "T extends string", T=string
// In addition need to utilise a conditional deduction logic with the types (with ternary ? : -syntax).
type DerivedType = typeof dog extends DogInterface ? DogInterface : unknown;
```
