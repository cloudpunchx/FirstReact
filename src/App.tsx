import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
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
