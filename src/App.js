import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SignUpFormDrawer from "./components/SignUpFormDrawer";
import LoginFormDrawer from "./components/LoginFormDrawer";
import Tabs from "./components/CategotiesTabs";
import StartUpContainerLogo from "./components/StartUpContainerLogo";
import products from "./products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSignIn = () => setSignInOpen(true);
  const handleLogin = () => setLoginOpen(true);

  return (
    <div className="App">
      <Navbar
        onSignIn={handleSignIn}
        onLogin={handleLogin}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />
      <Tabs
        menItems={products}
        womenItems={products}
        creatureItems={products}
      />
      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
