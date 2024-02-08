# Some basics to get going

## Very basic syntax

```ts
const stringVariable: string = "string";
const numberVariable: number = 2;
const booleanVariable: boolean = false;
const numberArray: number[] = [1, 2, 3];
```

## Type keyword vs Interface:

```ts
// These two ways are more or less equal and interchangable
type HelloWorldType = { value: string };
interface HelloWorldInterface {
  value: string;
}

const helloWithType: HelloWorldType = { value: "Hello" };
const helloWithInterface: HelloWorldInterface = { value: "Hello" };
```

## Type inference (https://www.typescriptlang.org/docs/handbook/type-inference.html)

```ts
//Typescript will automatically try to infere the type when possible, so often you don't need to specify the type.
const number = 1; //number type will be inferred
const string = "string"; //string type will be inferred
const number2: number = 2; //You can specify the type implicitly, but no actual need in this case
```
