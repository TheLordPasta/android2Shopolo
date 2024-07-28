import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpFormDrawer from "./components/SignUpFormDrawer";
import LoginFormDrawer from "./components/LoginFormDrawer";
import CategoriesTabs from "./components/CategoriesTabs";
import StartUpContainerLogo from "./components/StartUpContainerLogo";
import products from "./products";
import ShoppingCart from "./components/ShoppingCart";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSignIn = () => setSignInOpen(true);
  const handleLogin = () => setLoginOpen(true);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar
        onSignIn={handleSignIn}
        onLogin={handleLogin}
        onCartOpen={() => setCartOpen(true)}
      />
      <StartUpContainerLogo />
      <CategoriesTabs
        menItems={products.filter(product => product.description === "Men")}
        womenItems={products.filter(product => product.description === "Women")}
        creatureItems={products.filter(product => product.description === "Mythical Creatures")}
      />
      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
            <div className="product-list">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </>
        } />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>404 Not Found</div>} /> {/* Default Route */}
      </Routes>
    </div>
  );
}

export default App;
