import React, { useState } from 'react';

const PaymentMethod = ({ prevStep }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for payment processing here
    alert('Payment processed successfully!');
  };

  return (
    <div>
      <h3>Payment Method</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentMethod;