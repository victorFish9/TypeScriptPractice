// Create a Manager interface that extends the Employee interface.
interface Employee {
  name: string;
  department: string;
}

// TODO: manager is also an employee, but in addition a manager, so how to express that in code?
interface Manager extends Employee {
  managerIdNumber: number;
}

// What needs to be changed in Manager type, so that this doesn't give an error
const manager: Manager = {
  name: "Mr. Big",
  department: "Upper management",
  managerIdNumber: 1
}

console.log(manager)
