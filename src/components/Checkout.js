import { useState } from "react";
import { Stepper, Button, Group, Container, Center } from "@mantine/core";
import "../styles/Checkout.css";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import ShoppingCart from "./ShoppingCart";
import axios from "axios";
import videosrc from "../resourses/exampleMP4.mp4";

const Checkout = () => {
  const [active, setActive] = useState(0);
  const [orderData, setOrderData] = useState({});

  const nextStep = () => {
    setActive((current) => {
      // Advance to the next step if not on the last step
      return current < 3 ? current + 1 : current;
    });
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const buttonText = active === 3 ? "Complete Order" : "Next step";

  const submitOrder = () => {
    axios
      .post("http://localhost:5000/submitOrder", orderData)
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
        // Reset the stepper or show a success message
        setActive(0);
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  // Handlers to update orderData
  const updateCart = (cart) => setOrderData({ ...orderData, cart });
  const updateShippingAddress = (address) =>
    setOrderData({ ...orderData, shippingAddress: address });
  const updatePaymentMethod = (method) =>
    setOrderData({ ...orderData, paymentMethod: method });

  return (
    <>
      <Container
        className="checkout"
        style={{
          background: "var(--mantine-color-default-border)",
          borderRadius: "5px",
          padding: "10px",
          marginTop: "200px",
          marginBottom: "10px",
          borderWidth: "1px",
          borderColor: "var(--mantine-color-grape-text)",
        }}
      >
        <Stepper
          color="var(--color-primary)"
          active={active}
          onStepClick={setActive}
        >
          <Stepper.Step label="First step" description="Confirm Your Cart">
            <ShoppingCart />
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Enter Shipping Address"
          >
            <ShippingAddress />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Choose Payment Method">
            <PaymentMethod />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to the previous step
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button
            color="var(--color-primary)"
            variant="default"
            onClick={prevStep}
          >
            Back
          </Button>
          <Button color="var(--color-primary)" onClick={nextStep}>
            {buttonText}
          </Button>
        </Group>
      </Container>
      {/* Video Section */}
      <Container className="video-container">
        <video
          src={videosrc}
          loop
          autoPlay
          muted
          controls={false}
          style={{
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "100px",
            borderWidth: "1px",
            borderColor: "var(--mantine-color-grape-text)",
            pointerEvents: "none",
          }}
        />
      </Container>
    </>
  );
};

export default Checkout;
