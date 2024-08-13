import React from "react";
import AddProductForm from "./AddProductForm";
import useUserData from "./useUserData";

const ConditionalAddProductForm = ({ onProductAdded }) => {
  const { admin } = useUserData();

  if (admin == false) {
    return null;
  }

  return <AddProductForm onProductAdded={onProductAdded} />;
};

export default ConditionalAddProductForm;