import LinkedListVisualizer from "./components/LinkedListVisualizer";
import BinaryTreeVisualizer from "./components/BinaryTreeVisualizer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Data Structure Visualizer</h1>

      <div className="section">
        <LinkedListVisualizer />
      </div>

      <div className="section">
        <BinaryTreeVisualizer />
      </div>
    </div>
  );
}

export default App;