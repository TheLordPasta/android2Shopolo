import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import CategoriesTabs from "./CategoriesTabs";
import StartUpContainerLogo from "./StartUpContainerLogo";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import axios from "axios";

function Shopping() {
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleSignIn = () => setSignInOpen(true);
  const handleLogin = () => setLoginOpen(true);
  const [products, setProducts] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:5000/getProducts')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="Shopping">
      <Navbar
        onSignIn={handleSignIn}
        onLogin={handleLogin}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />
      <CategoriesTabs
        menItems={products.filter((products) => products.category === "Men")}
        womenItems={products.filter((products) => products.category === "Women")}
        creatureItems={products.filter(
          (products) => products.category === "Mythical Creatures"
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
