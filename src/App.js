import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Shopping from "./components/Shopping";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>404 Not Found</div>} />{" "}
        {/* Default Route */}
      </Routes>
    </div>
  );
}

export default App;
