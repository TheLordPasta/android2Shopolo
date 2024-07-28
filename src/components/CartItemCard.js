// src/components/CartItemCard.js

import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  NumberInput,
} from "@mantine/core";
import "../styles/ProductCard.css";

const CartItemCard = ({
  id,
  image,
  name,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
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
        <Group position="apart" mt="md">
          <NumberInput
            value={quantity}
            onChange={(value) => onQuantityChange(id, value)}
            ml="sm"
            w="70px"
            min={1}
            step={1}
          />
          <Button color="red" ml="sm" radius="md" onClick={() => onRemove(id)}>
            Remove
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default CartItemCard;
