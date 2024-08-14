import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextInput,
  NumberInput,
  Card,
  SimpleGrid,
  Combobox,
  useCombobox,
  Input,
  InputBase,
} from "@mantine/core";
import "../styles/AddProductForm.css";

const categories = ["Men", "Women", "Mythical Creatures"];

const AddProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const options = categories.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);

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
    <Card
      shadow="sm"
      radius="md"
      withBorder
      style={{
        background: "var(--mantine-color-default-border)",
        borderWidth: "0.2px",
        borderColor: "var(--mantine-color-grape-text)",
        maxWidth: "400px",
        marginInline: "auto",
        padding: "20px",
        marginBlock: "40px",
      }}
    >
      <Card.Section>
        <h2>Add Products</h2>
        <form className="add-product-form" onSubmit={handleSubmit}>
          <TextInput
            className="text-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            className="text-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextInput
            className="text-input"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <SimpleGrid cols={2}>
            <NumberInput
              placeholder="Price"
              value={price}
              onChange={(value) => setPrice(value)}
            />
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setCategory(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {category || (
                    <Input.Placeholder>Pick value</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </SimpleGrid>
          <Button
            className="add-product-form-button"
            type="submit"
            mt="md"
            color="var(--color-primary)"
          >
            Add Product
          </Button>
        </form>
      </Card.Section>
    </Card>
  );
};

export default AddProductForm;
