import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CategoriesTabs from "./CategoriesTabs";
import StartUpContainerLogo from "./StartUpContainerLogo";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import ConditionalAddProductForm from "./ConditionalAddProductForm";
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

  const handleProductDelete = (id) => {
    axios
      .delete(`http://localhost:5000/product/${id}`)
      .then(() => setProducts(prev => prev.filter(p => p.id != id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Shopping">
      <Navbar
        onSignIn={() => setSignInOpen(true)}
        onLogin={() => setLoginOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />

      <ConditionalAddProductForm onProductAdded={handleProductAdded} />
      <CategoriesTabs
        onProductDeleted={handleProductDelete}
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
