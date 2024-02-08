# Some useful keywords

## Optional

You can mark a property in a type to be optional with "?"

```ts
type TodoWithOptionalDescription = {
  title: string;
  description?: string; // same as string | undefined
  completed: boolean;
};
```

## Readonly

You can mark a property in a type to be read only with "readonly".

```ts
type TodoWithReadonlylDescription = {
  title: string;
  readonly description: string;
  completed: boolean;
};
```
