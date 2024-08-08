import React, { useState } from "react";
import axios from "axios";
import { Button, TextInput, NumberInput } from "@mantine/core";

const AddProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, description, price, image, category };

    axios
      .post("http://localhost:5000/addProduct", newProduct)
      .then((response) => {
        onProductAdded(response.data);
        // Clear the form
        setName("");
        setDescription("");
        setPrice(0);
        setImage("");
        setCategory("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <NumberInput
        label="Price"
        value={price}
        onChange={(value) => setPrice(value)}
      />
      <TextInput
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextInput
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit" mt="md">
        Add Product
      </Button>
    </form>
  );
};

export default AddProductForm;
