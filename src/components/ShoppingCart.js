// src/components/ShoppingCart.js

import React from "react";
import { Drawer, Group, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
        <>
          {cart.map((item) => (
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
          ))}
          <Group position="apart" style={{ marginTop: 20 }}>
            <Text>Total: ${totalAmount.toFixed(2)}</Text>
            <Link to="/checkout">
              <Button>Proceed to Checkout</Button>
            </Link>
          </Group>
        </>
      )}
    </Drawer>
  );
};

export default ShoppingCart;
