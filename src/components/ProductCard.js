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
  AspectRatio,
} from "@mantine/core";
import "../styles/ProductCard.css";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ id, image, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, image, name, description, price, quantity };
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
          <AspectRatio ratio={1080 / 720} maw={600} mx="auto">
            <Image className="product-image" src={image} alt={name} />
          </AspectRatio>
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
