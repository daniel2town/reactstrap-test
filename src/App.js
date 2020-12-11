import "./App.css";
import TooltipTest from "./components/Tooltip";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TooltipTest />
      </header>
    </div>
  );
}

export default App;
