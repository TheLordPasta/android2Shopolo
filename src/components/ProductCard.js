import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  NumberInput,
  SimpleGrid,
} from "@mantine/core";
import "../styles/ProductCard.css";
import { useCart } from "../contexts/CartContext";
import { useUserData } from "../contexts/UserContext";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  category,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { admin } = useUserData();

  const handleAddToCart = () => {
    const product = { id, image, name, description, price, category, quantity };
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <Card
        shadow="sm"
        radius="md"
        withBorder
        style={{
          background: "var(--mantine-color-default-border)",
          borderWidth: "0.2px",
          borderColor: "var(--mantine-color-grape-text)",
        }}
      >
        <Card.Section>
          <Image className="product-image" src={image} alt={name} />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text fw={500} size="xl">
            {name}
          </Text>
          <Badge fw={300} size="lg" color="pink">
            {price * quantity} USD
          </Badge>
        </Group>

        <Text className="product-details" size="md" c="dimmed">
          {description}
        </Text>
        <div style={{ flexGrow: 1 }}></div>
        <SimpleGrid cols={2}>
          <NumberInput
            value={quantity}
            onChange={setQuantity}
            ml="sm"
            mt="md"
            w="70px"
            min={1}
            step={1}
            style={{ flex: 1 }}
          />
          <Button
            color="var(--color-primary)"
            ml="sm"
            mt="md"
            radius="md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          {admin && (
            <Button
              color="var(--color-primary)"
              ml="sm"
              mt="md"
              radius="md"
              onClick={() => onDelete(id)}
            >
              Delete product
            </Button>
          )}
        </SimpleGrid>
      </Card>
    </div>
  );
};

export default ProductCard;
