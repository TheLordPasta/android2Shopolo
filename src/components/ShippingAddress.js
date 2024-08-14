import React, { useState } from "react";

const ShippingAddress = ({ onAddressChange }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onAddressChange({ [name]: value });
  };

  return (
    <div>
      <h3>Shipping Address</h3>
      <form>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            pattern="\d*"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
