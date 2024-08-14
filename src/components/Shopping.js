import React, { useEffect, useState } from "react";
import CategoriesTabs from "./CategoriesTabs";
import ConditionalAddProductForm from "./ConditionalAddProductForm";
import axios from "axios";

function Shopping() {
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
      .then(() => setProducts((prev) => prev.filter((p) => p.id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Shopping">
      <ConditionalAddProductForm onProductAdded={handleProductAdded} />
      <CategoriesTabs
        onProductDeleted={handleProductDelete}
        menItems={products.filter((product) => product.category === "Men")}
        womenItems={products.filter((product) => product.category === "Women")}
        creatureItems={products.filter(
          (product) => product.category === "Mythical Creatures"
        )}
      />
    </div>
  );
}

export default Shopping;
