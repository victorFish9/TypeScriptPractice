// Predict the type of the variable 'x' at different points in the code.
const cfa = (x: string | number | boolean) => {
  if (typeof x !== "string") {
    x //  number | boolean
    if (typeof x === "number") {
      x // number
    } else {
      x // TODO: write the type of `x` here
    }
  } else {
    x // TODO: write the type of `x` here
  }
}
