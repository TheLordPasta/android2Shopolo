import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, TextInput } from "@mantine/core";
import "../styles/basic-form.css";
import "../App.css";
import StartUpContainerLogo from "./StartUpContainerLogo";

function LoginFormDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace this with your actual login logic
      if (username === "admin" && password === "password") {
        setMessage("Login successful!");
      } else {
        setMessage("Invalid username or password.");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Log In To Shoppolo">
        <div className="logo-container">
          <StartUpContainerLogo />
        </div>
        <div className="basic-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <Button
              type="submit"
              color="var(--color-primary)"
              variant="filled"
              fullWidth
              mt="md"
            >
              Login
            </Button>
          </form>
          <p>{message}</p>
        </div>
      </Drawer>

      <Button color="var(--color-primary)" variant="filled" onClick={open}>
        Login
      </Button>
    </>
  );
}

export default LoginFormDrawer;
