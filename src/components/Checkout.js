import { useState } from "react";
import { Stepper, Button, Group, Container } from "@mantine/core";
import "../styles/Checkout.css";
import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import ShoppingCart from "./ShoppingCart";

const Checkout = () => {
  const [active, setActive] = useState(0);

  const nextStep = () => {
    setActive((current) => {
      // Advance to the next step if not on the last step
      return current < 3 ? current + 1 : current; // Change 3 to 2 as we have three steps (0, 1, 2)
    });
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const buttonText = active === 3 ? "Complete Order" : "Next step";

  return (
    <Container
      className="checkout"
      style={{
        background: "var(--mantine-color-default-border)",
        borderRadius: "5px",
        padding: "10px",
        marginTop: "200px",
        marginBottom: "100px",
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
        <Stepper.Step label="Second step" description="Enter Shipping Address">
          <ShippingAddress />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Choose Payment Method">
          <PaymentMethod />
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
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
  );
};

export default Checkout;
