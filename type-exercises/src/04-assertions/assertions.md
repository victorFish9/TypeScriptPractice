# Type assertions with "as" keyword, usually as casting should be avoided.

```ts
const forceBarToFoo = bar as Foo;
const cantForceToNumber = bar as number; // Error
const canStillForceToNumber = bar as unknown as number; // casting to unkown allows casting to number, but this is wrong!
```
