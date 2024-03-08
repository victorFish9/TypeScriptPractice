/*
 * Business Requirement: You are developing an application that manages the structure of web pages
 * generated by a content management system. Your goal is to create TypeScript types to represent key
 * entities in this system. You will define types for elements, components, and pages.
 * An element can be a button, image, or text.
 * A component is a reusable part of a page, composed of one or more elements.
 * A page, the top-level structure, consists of a title, an ID, a description, and an array of components.
 */
namespace advanced_exercice {
    //Just to avoid namespace collisions with other files

    // Phase 1: Define Page and Component Types basics
    // Exercise: Define Page, ComponentGroup, Component, Element types
    type PageTypes = "MainPage" | "SubPage" | "InfoPage";
    type ComponentTypes = "Header" | "Content" | "Footer";
    type CommonElementTypes = "Button" | "Img" | "Text";

    // Define a Component type representing a single component.
    type Component = {
        name: string;
        type: ComponentTypes;
        elements: CommonElementTypes[];
    };

    // Define a Page type representing a page that can contain Components.
    type Page = {
        id: string;
        title: string;
        type: PageTypes;
        description: string;
        components: Component[];
        // TODO: Something is missing here, so that the `mainPage` later on this page will pass type checks
        // Now this doesn't "contain Components" as required.
        // See the error messages and the other components for hints.
    };

    // Define Header, mainSection, Footer components with specific elements.
    // A Header includes a Button and an Img for navigation and branding.
    const headerComponent: Component = {
        name: "Header",
        type: "Header",
        elements: ["Button", "Img"],
    };

    // Define A main section component, where the main content of a page resides, it can include Text, Img and Button elements.
    const mainSection: Component = {
        name: "Main section",
        type: "Content",
        elements: ["Text", "Img", "Button"]
        // TODO: this object is missing a required field in the Component type.
        // See the error messages and the other components for hints.
    };

    // Define a Footer component, which contains only Text elements for copyright information or other footer content.
    const footerComponent: Component = {
        name: "Footer",
        type: "Footer",
        elements: ["Text"],
    };

    // Define a main page, which contains a Header, a main section, and a Footer.
    const mainPage: Page = {
        id: "main-1",
        title: "Main Page",
        description: "Welcome to our website!",
        type: "MainPage",
        components: [headerComponent, mainSection, footerComponent],
    };

    // Phase 2: Basics done. Now with utilizing the Page type create a new type for a SubPage.

    // A Subpage is like a page, but a Subpage doesn't have a description and it has a string type parentId referring to the main page it is a subpage of.

    // TODO: add the `parentId` field in the SubPage type:
    type SubPage = Omit<Page, "description"> & {
        parentId: string;
    }

    // Define a subpage, which contains a main section.
    const subPage: SubPage = {
        id: "sub-1",
        type: "SubPage",
        title: "Sub Page",
        components: [mainSection],
        parentId: mainPage.id,
    };

    // Phase 3: Define Advanced Page and Component Types

    /* Business Requirement: As your application evolves, you need to introduce more advanced types to capture
     * additional details. You decide to create a BaseComponent-type that can be used to create more specific components.
     * You use this generalizable BaseComponent to create specialized types for Header, Content, and Footer components.
     * Similarly, for pages, you define a BasePage type and extend it for MainPages and SubPages to define which component types are allowed for
     * different page types.
     *
     * You also create a more specific SubPageAdvanced type, allowing only certain components in it.
     */

    // Create a Base Component type which can be used to create more specific component types. It takes the Type as a generic argument.
    // We also need to validate that the generic argument is still a valid ComponentType.
    // Also take the allowed element types as a second generic argument.
    type BaseComponent<T extends ComponentTypes, U extends CommonElementTypes> = {
        name: string;
        type: T;
        elements: U[];
    };

    // Recreate the earlier Header, Content and Footer Component as own types with the help of BaseComponent
    type HeaderComponent = BaseComponent<"Header", "Button" | "Img">;
    type ContentComponent = BaseComponent<"Content", CommonElementTypes>;

    // TODO: Define the following type with name "Footer" and accepted element types "Text" and "Img"
    type FooterComponent = BaseComponent<"Footer", "Text" | "Img">;

    // Here we create a special type with the help of BaseComponent which can be either a Header or a Footer component.
    // We extract the correct Element types from the Header and Footer types.
    type HeaderOrFooterComponent = BaseComponent<
        "Header" | "Footer",
        FooterComponent["elements"][number] | HeaderComponent["elements"][number]
    >;

    // Create a Base Page type, where individual page types can extend from. It takes the PageType and list of BaseComponents as generic arguments.
    // We also need to validate that the generic argument is still a valid PageType.
    type BasePage<
        T extends PageTypes,
        U extends BaseComponent<ComponentTypes, CommonElementTypes>[]
    > = {
        id: string;
        title: string;
        type: T;
        description?: string;
        components: U;
    };

    // Phase 4: advanced pages and sub pages
    // Create a MainPage type which extends the BasePage and allows all component types as components (so Header, Content and Footer allowed).
    // Also make the description a required field for MainPage
    type MainPageAdvanced = BasePage<
        "MainPage",
        [HeaderComponent, ContentComponent, FooterComponent] // One of all component types allowed
    > & {
        description: string;
    };

    // Define the SubPage as a new SubPageAdvanced type with the help of BasePage.
    // A subpage can only contain a Content-component and a header or a footer, but not both.
    // Remember that a subpage also needs the parentId field.
    // Only ContentComponent and either a header or footer is allowed for subpages
    type SubPageAdvanced = BasePage<
        "SubPage",
        [
            BaseComponent<"Header", "Button" | "Img">,
            BaseComponent<"Content", CommonElementTypes>,
            BaseComponent<"Footer", "Text" | "Img">
        ] // Only ContentComponent and either a header or footer is allowed for subpages
    > & {
        parentId: string;
    };

    // Here is an example instance of a MainPageAdvanced
    const mainPageAdvanced: MainPageAdvanced = {
        id: "main-1",
        title: "Main Page",
        type: "MainPage",
        description: "Welcome to our website!", //if you remove the description here, should give an error
        components: [
            { name: "Header", type: "Header", elements: ["Button", "Img"] }, // Try adding a text element here, should give an error.
            { name: "Content", type: "Content", elements: ["Text", "Img"] },
            { name: "Footer", type: "Footer", elements: ["Text"] },
            //Try adding something more, shouldn't be allowed unless you add it to the type definition of MainPageAdvanced above.
        ],
    };

    // Here is an example instance of SubPageAdvanced
    const subPageAdvanced: SubPageAdvanced = {
        id: "sub-1",
        type: "SubPage",
        title: "Sub Page",
        parentId: mainPage.id,
        // TODO: Can you figure out what is the issue with the following
        // array of components? As the final task, see the definitions and
        // comments on the SubPageAdvanced type and figure out why the
        // following components are not allowed. Then, try to fix the
        // object by removing the unsupported component:
        components: [
            { name: "Header", type: "Header", elements: ["Button", "Img"] },
            { name: "Content", type: "Content", elements: ["Text", "Img"] },
            { name: "Footer", type: "Footer", elements: ["Text", "Img"] },
            // Also, try adding new components here. It should give an error.
        ],
    };

    // Phase 5: Define a generic configuration wrapper type.

    // Create a generic configuration wrapper type that can be used on any type to extract the properties
    // of the type and add a configuration section to it. So you can see below what e.g. the pageWithGenericConfiguration object should be when
    // completed with a configuration.
    type WithGenericConfigurationWrapper<T> = {
        content: {
            [K in keyof T]: T[K];
        };
        configuration: {
            configIsDone: true
        };
    };

    type PageWithGenericConfiguration = WithGenericConfigurationWrapper<Page>;
    type ComponentWithGenericConfiguration =
        WithGenericConfigurationWrapper<Component>; //Components could also be wrapped like pages

    const pageWithGenericConfiguration: PageWithGenericConfiguration = {
        content: {
            id: "id",
            title: "Title",
            type: "MainPage",
            description: "Description of the page",
            components: [
                {
                    name: "Header",
                    type: "Header",
                    elements: ["Button", "Img"],
                },
                {
                    name: "Content",
                    type: "Content",
                    elements: ["Text", "Img", "Button"],
                },
                {
                    name: "Footer",
                    type: "Footer",
                    elements: ["Text", "Img"],
                },
            ],
        },
        configuration: {
            configIsDone: true,
        },
        //TODO: What needs to be added here so that this follows the PageWithGenericConfiguration-Type 
    };
}