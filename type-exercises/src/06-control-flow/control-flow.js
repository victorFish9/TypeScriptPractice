// Predict the type of the variable 'x' at different points in the code.
var cfa = function (x) {
    if (typeof x !== "string") {
        x; //  number | boolean
        if (typeof x === "number") {
            x; // number
        }
        else {
            console.log(typeof x); // type: boolean
        }
    }
    else {
        console.log(typeof x); // type: string
    }
};
