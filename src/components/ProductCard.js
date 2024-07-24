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

const ProductCard = ({ id, image, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, image, name, description, price, quantity };
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            className="product-image"
            src={image}
            height={160}
            alt={name}
          />
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
        </SimpleGrid>
      </Card>
    </div>
  );
};

export default ProductCard;
