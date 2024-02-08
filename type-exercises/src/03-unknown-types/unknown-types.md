# Any, unknown types

Typescript has special these types, which usually should be avoided.

```ts
// Typescript can't help us anymore if we define this to be any
let thisCanBeAnything: any = "Hello";
thisCanBeAnything = 1;

// Typescript can't help us anymore if we define this to be unknown, but still better to admit it than have any
let thisIsUnknown: unknown = "Hello";
thisIsUnknown = 1;
```
