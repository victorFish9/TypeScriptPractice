# Extending interfaces to intersection type

See https://javascript.plainenglish.io/using-typescript-intersection-types-like-a-pro-a55da6a6a5f7

```ts
interface Animal {
  weight: number;
}
interface DogInterface extends Animal {
  legs: boolean;
}
const dog: DogInterface = { weight: 4, legs: true };
```

## Extending types

```ts
//OR same can be achieved with type keyword:
type DogType = Animal & {
  legs: boolean;
};
const dog2: DogType = { weight: 4, legs: true };
```
