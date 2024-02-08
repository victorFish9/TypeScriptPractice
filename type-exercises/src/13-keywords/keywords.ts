// Write a function that calculates the area of a shape (Circle or Rectangle)
// and handles each case appropriately.
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Rectangle | Circle; //discriminated union type

function calculateArea(shape: Shape): number {
    switch (/*shape.???*/) { // TODO: How to switch by the shape's discriminant property to make this function work
        case "rectangle":
            return shape.width * shape.height; // this shouldn't give errors
        case "circle":
            return Math.PI * shape.radius * shape.radius; // this shouldn't give errors
        default:
            throw new Error("Invalid shape");
    }
}
