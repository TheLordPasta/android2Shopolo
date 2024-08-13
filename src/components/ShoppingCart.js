// src/components/ShoppingCart.js

import React, { useState } from "react";
import { Group, Text, SimpleGrid } from "@mantine/core";
import { useCart } from "../contexts/CartContext";
import CartItemCard from "./CartItemCard";

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [cartItems, setCartItems] = useState(cart);

  // Function to update quantity
  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Function to handle item removal
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <SimpleGrid cols={3}>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
                quantity={item.quantity}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveFromCart}
              />
            ))}
          </>
        )}
      </SimpleGrid>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text>Total: ${totalAmount.toFixed(2)}</Text>
      </Group>
    </div>
  );
};

export default ShoppingCart;
