import "./App.css";
import RandomGifs from "./components/RandomGifs";
import SpecificGifs from "./components/SpecificGifs";
// import TogglerButton from './components/TogglerButton'

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Random GIFs Generator</h1>

      <div className="component-container">
        <RandomGifs className="random-gif"></RandomGifs>
        <SpecificGifs className="specific-gif"></SpecificGifs>
      </div>

      {/* <TogglerButton></TogglerButton> */}
      <h2 className="footer"></h2>
    </div>
  );
}

export default App;
