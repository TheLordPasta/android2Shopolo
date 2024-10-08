import {
  Container,
  Group,
  Button,
  Switch,
  Text,
  Burger,
  Paper,
  Transition,
  useMantineColorScheme,
} from "@mantine/core";
import LoginFormDrawer from "./LoginFormDrawer";
import SignUpFormDrawer from "./SignUpFormDrawer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserData } from "../contexts/UserContext";

const Navbar = ({ onSignIn, onLogin, onCartOpen }) => {
  const [opened, setOpened] = useState(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme(); // Correct hook usage
  const { userData, logout } = useUserData();
  const navigate = useNavigate();

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newColorScheme); // Update the color scheme using setColorScheme
  };

  const goToOrderHistory = () => {
    navigate("/order-history");
  };

  return (
    <Paper
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderRadius: 0,
        background: "var(--mantine-color-default-border)",
        borderWidth: "1px",
        borderColor: "var(--mantine-color-grape-text)",
      }}
    >
      <Container>
        <Group position="apart" align="center">
          <h1
            className="username-placeholder-h1"
            // style={{
            //   textShadow: "4px 4px var(--color-primary)",
            // }}
          >
            Hello {userData?.username || "Guest"}
          </h1>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="md"
            color="var(--mantine-color-bright)"
          />
          <Transition
            background="var(--color-primary)"
            transition="slide-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <div style={styles}>
                <Group direction="column" spacing="xs" align="flex-start">
                  {!userData ? (
                    <>
                      <LoginFormDrawer />
                      <SignUpFormDrawer />
                    </>
                  ) : (
                    <>
                      <Button color="var(--color-primary)" onClick={logout}>
                        Logout
                      </Button>
                      <Button
                        color="var(--color-primary)"
                        onClick={goToOrderHistory}
                      >
                        Order History
                      </Button>
                    </>
                  )}

                  <Button color="var(--color-primary)" onClick={onCartOpen}>
                    Cart
                  </Button>
                  <Group spacing="xs" align="center">
                    <Text>
                      {`${colorScheme[0].toUpperCase()}${colorScheme.slice(1)}`}{" "}
                      Mode
                    </Text>
                    <Switch
                      checked={colorScheme === "dark"}
                      onChange={toggleColorScheme} // Ensure toggleColorScheme is passed correctly
                      size="lg"
                    />
                  </Group>
                </Group>
              </div>
            )}
          </Transition>
        </Group>
      </Container>
    </Paper>
  );
};

export default Navbar;
