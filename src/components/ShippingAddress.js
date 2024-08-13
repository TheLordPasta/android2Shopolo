import React, { useState } from "react";

const ShippingAddress = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <div>
      <h3>Shipping Address</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
