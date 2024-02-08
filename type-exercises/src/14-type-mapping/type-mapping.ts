// Create a mapped type that transforms all properties into boolean types.
type MakeAllPropertiesABoolean<T> = {
    // TODO: What should be here instead of "..?" and the never type
    [K in ...?]: never;
};

type AllString = { isValid: string, isLoggedIn: string }

const todoWithOptionalProps: MakeAllPropertiesABoolean<AllString> = {
    isValid: true,
    isLoggedIn: false,
};


// Allow adding any values to the preferences object using index signatures.
type User = {
    name: string;
    preferences: {
        language: string //TODO: how to change this into more generic expression that not only language can be a preference, but any property with string value is accepted.
    };
};

const currentUser: User = {
    name: "John",
    preferences: {
        language: "en",
        theme: "light", // This shouldn't give an error.
    },
};
