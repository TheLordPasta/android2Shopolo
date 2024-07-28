// src/components/ShoppingCart.js

import React from "react";
import { Drawer, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title="Shopping Cart"
      padding="xl"
      size="lg"
    >
      <ShoppingCart />
      <Link to="/checkout">
        <Button color="var(--color-primary)">Proceed to Checkout</Button>
      </Link>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
