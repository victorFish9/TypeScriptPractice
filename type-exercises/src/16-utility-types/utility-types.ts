// Use utility types (Pick, Omit, Partial) to modify and extract properties from TodoPick.
type TodoPick = {
    title: string;
    description: string;
    completed: boolean;
};

// TODO: Make all properties of TodoPick optional with the help of Partial:
type TodoWithEverythingGoes = Partial<>;

// TODO: change the never to something else to create a new type out of TodoPick where the "completed"-property is left out. Utilize Pick-utility type.
type TodoWithOnlyTitleAndDesc = Pick<TodoPick, never>;

// TODO: change the never to something else to create a new type out of TodoPick where the "completed"-property is left out. Utilize Omit-utility type.
type TodoWithOnlyTitleAndDescDoneWithOmit = Omit<TodoPick, never>;
