import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#0ff");
  const colorChangeHandler = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    setBgColor(color);
  };
  return (
    <div
      className="app"
      style={{ backgroundColor: bgColor }}
      onClick={colorChangeHandler}
    >
      <h1>Click me to change color</h1>
    </div>
  );
}

export default App;
