import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Weather city="Sydney" />
      </header>
    </div>
  );
}

export default App;
