import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Click Me!
      </Button>
    </div>
  );
}

export default App;

// MESSAGE.TSX Example:
// import Message from "./Message"

// function App() {
// return <div><Message /></div>
// That is the shorter version of this: return <div><Message></Message></div>
// }

// export default App;
