import React, { useState } from "react";
import Navbar from "./Navbar";
import CategoriesTabs from "./CategoriesTabs";
import StartUpContainerLogo from "./StartUpContainerLogo";
import products from "../products";
import ShoppingCartDrawer from "./ShoppingCartDrawer";

function Shopping() {
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSignIn = () => setSignInOpen(true);
  const handleLogin = () => setLoginOpen(true);

  return (
    <div className="Shopping">
      <Navbar
        onSignIn={handleSignIn}
        onLogin={handleLogin}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />
      <CategoriesTabs
        menItems={products.filter((product) => product.category === "Men")}
        womenItems={products.filter((product) => product.category === "Women")}
        creatureItems={products.filter(
          (product) => product.category === "Mythical Creatures"
        )}
      />
      <ShoppingCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

export default Shopping;
