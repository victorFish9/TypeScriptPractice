# String literals and narrowing down to narrowest type:

```ts
let limitToOnlyHello = "Hello" as const; // Type is "Hello" string literal
limitToOnlyHello = "World"; // Error, only Hello allowed
```
