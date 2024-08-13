import { useState } from "react";
import { Stepper, Button, Group, Container, Center } from "@mantine/core";
import "../styles/Checkout.css";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import ShoppingCart from "./ShoppingCart";
import { useCart } from '../contexts/CartContext';
import axios from "axios";
import videosrc from "../resourses/exampleMP4.mp4";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [active, setActive] = useState(0);
  const [orderData, setOrderData] = useState({});
  const { cart } = useCart();
  const navigate = useNavigate();


  const nextStep = async () => {
    if (active == 3) {
      await submitOrder();
      navigate('/');
      return;
    }
    setActive((current) => {
      // Advance to the next step if not on the last step
      return current < 3 ? current + 1 : current;
    });
  };

  const prevStep = () => {
    if (active == 0) {
      navigate('/');
      return;
    }
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const buttonText = active === 3 ? "Complete Order" : "Next step";

  const submitOrder = () => {
    axios
      .post("http://localhost:5000/submitOrder", {
        token: localStorage.getItem("authToken"),
        orderData: { ...orderData, products: cart }
      })
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
  const updateAddress = (address) =>
    setOrderData({ ...orderData, address });


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
            <ShippingAddress onSubmit={updateAddress} />
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
