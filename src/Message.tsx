// Name extension .tsx is for react components
// extension .ts is for plain typescript


// PascalCasing expected for react function components
function Message() {
    // JSX: JavaScript XML
    const name = "";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

// See how the JSX is converted to JavaScript https://babeljs.io/repl

// This is a basic component, to use it we have to Export it as a default object from this module
export default Message;

// then move to the App Component and use this new Component