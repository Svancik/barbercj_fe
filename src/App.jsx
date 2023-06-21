import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import React from "react";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
