// Create instances of the Box interface with different types.
interface Box<Type> {
    contents: Type;
}

// TODO: what do you need to insert inside the <>-marks to make this right?
const stringBox: Box<> = { contents: "string" };

// TODO: what do you need to insert inside the <>-marks to make this right?
const numberBox: Box<> = { contents: 1 };
