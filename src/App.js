import React, { useState } from "react";
import SignUpFormDrawer from "./components/SignUpFormDrawer";
import LoginFormDrawer from "./components/LoginFormDrawer";
import Tabs from "./components/CategotiesTabs";
import StartUpContainerLogo from "./components/StartUpContainerLogo";
import ProductCard from "./components/ProductCard";
import logo from "./resourses/logoShopolo.png";
import SearchBar from "./components/SearchBar";

function App() {
  const menItems = [
    { image: logo, name: "Product 1", description: "Description 1" },
    { image: logo, name: "Product 2", description: "Description 2" },
    // Add more items as needed
  ];

  const womenItems = [
    { image: logo, name: "Product 3", description: "Description 3" },
    { image: logo, name: "Product 4", description: "Description 4" },
    // Add more items as needed
  ];

  const creatureItems = [
    { image: logo, name: "Product 5", description: "Description 5" },
    { image: logo, name: "Product 6", description: "Description 6" },
    // Add more items as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <StartUpContainerLogo />
      <SignUpFormDrawer />
      <LoginFormDrawer />
      <Tabs
        menItems={menItems}
        womenItems={womenItems}
        creatureItems={creatureItems}
      />
    </div>
  );
}

export default App;
