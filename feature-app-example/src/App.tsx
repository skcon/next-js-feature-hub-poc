import "./App.css";
import SimpleComponent from "./SimpleComponent";
// import VboData from "./VboData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>This is a featured app!</div>
        {/* Commented out because it requires more configuration in feature app to import dependencies for react properly */}
        {/* <VboData /> */}
        <SimpleComponent />
      </header>
    </div>
  );
}

export default App;
