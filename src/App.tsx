import Card from "./components/Card"
import Navbar from "./components/Navbar";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";

function App() {
  return (
    <div>
      <div className="items">
        <h1>React Components</h1>
        <Navbar/>
        <Button1/>
        <Button2/>
        <Card/>
      </div>
    </div>
  );
}

export default App;