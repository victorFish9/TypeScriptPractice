# Unions & intersections

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

```ts
type StringNumberBool = string | number | boolean;
const printId = (id: number | string) => {
  console.log(id.toUpperCase()); //Error, we can only access properties that both members of the union (number and string) share
};
```

## Discriminated unions

https://www.typescriptlang.org/docs/handbook/2/objects.html

```ts
interface Rectangle {
  kind: "rectangle"; //discriminant property
  width: number;
  height: number;
}

interface Circle {
  kind: "circle"; //discriminant property
  radius: number;
}

type Shape = Rectangle | Circle; //discriminated union https://basarat.gitbook.io/typescript/type-system/discriminated-unions

// will be circle:
const shape: Shape = { kind: "circle", radius: 5 };
shape; // circle

// Error, not a valid type found from Shape union:
const shape2: Shape = { kind: "rectangle", radius: 5 };

// never union because of kind-property, can never happen:
type RectangleCircleNever = Rectangle & Circle;
```
