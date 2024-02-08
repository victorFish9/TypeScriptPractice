// This NumberOrString conditional type can be used to check whether a given Type is a number or a string.
type NumberOrString<T> = T extends number ? number : string;

const someText = "Hello"
type typeForSomeText = string // TODO: Utilize NumberOrString and the type of someText to dynamically create a type based on someText's type.

const someNumber = 1
type typeForSomeNumber = number // TODO: Utilize NumberOrString and the type of someNumber to dynamically create a type based on someNumber's type.
