import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Shopping from "./components/Shopping";
import OrderHistory from "./components/OrderHistory";
import ShoppingCartDrawer from "./components/ShoppingCartDrawer";
import Navbar from "./components/Navbar";
import "./App.css";
import StartUpContainerLogo from "./components/StartUpContainerLogo";
import { fetchStates, useUserData } from "./contexts/UserContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { fetchState } = useUserData();

  return (
    <div className="App">
      {fetchState === fetchStates.FETCHED && (
        <>
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <StartUpContainerLogo />
          <Routes>
            <Route path="/" element={<Shopping />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="*" element={<div>404 Not Found</div>} />{" "}
            {/* Default Route */}
          </Routes>
          <ShoppingCartDrawer
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
