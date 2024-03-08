interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type KeysOfTodo = keyof Todo; // "title" | "description" | "completed"

const titleKey: KeysOfTodo = "title"; // This is valid

