import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CategoriesTabs from "./CategoriesTabs";
import StartUpContainerLogo from "./StartUpContainerLogo";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import AddProductForm from "./AddProductForm";
import axios from "axios";

function Shopping() {
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProducts")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="Shopping">
      <Navbar
        onSignIn={() => setSignInOpen(true)}
        onLogin={() => setLoginOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />
      <AddProductForm onProductAdded={handleProductAdded} />
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
