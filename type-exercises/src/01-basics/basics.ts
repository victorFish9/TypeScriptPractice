// Define a type and an interface to represent a user profile.
// Include fields name (string), email (string), and age (number).
// (In reality we would only pick either the type or the interface and use that.)


// TODO: Never indicated the values that will never occur, replace it with actual type.
type UserProfileType = {
    name: string,
    email: string,
    age: number,
};

// Change the above type, to that this works
const userType: UserProfileType = {
    name: "John",
    email: "my@mail.com",
    age: 5,
};


// TODO: Never indicated the values that will never occur, replace with actual type.
interface UserProfileInterface {
    name: string,
    email: string,
    age: number,
}

// Change the above interface, to that this works
const userInterface: UserProfileInterface = {
    name: "John",
    email: "my@mail.com",
    age: 5,
};
