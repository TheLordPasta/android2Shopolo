// src/components/ShoppingCart.js

import React from "react";
import { Drawer, Group, Text, Button } from "@mantine/core";
import { useCart } from "../contexts/CartContext";

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title="Shopping Cart"
      padding="xl"
      size="lg"
    >
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cart.map((item) => (
          <Group key={item.id} position="apart" style={{ marginBottom: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10))
              }
              min="1"
            />
          </Group>
        ))
      )}
    </Drawer>
  );
};

export default ShoppingCart;
