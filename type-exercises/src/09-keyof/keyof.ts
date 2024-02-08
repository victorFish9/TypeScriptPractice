// Use the keyof operator to extract the keys from the Todo interface.
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type KeysOfTodo = "description" | "completed" // TODO: how to extract all the keys of Todo "automatically"

const title: KeysOfTodo = "title" // this shouldn't give an error
