import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, TextInput } from "@mantine/core";
import axios from "axios";
import StartUpContainerLogo from "./StartUpContainerLogo";
import "../styles/basic-form.css";
import "../App.css";

function LoginFormDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [drawerButton, setdrawerButton] = useState("Login");

  const handleDrawerButtonClick = () => {
    if (drawerButton === "Login") {
      open();
    } else {
      console.log("logging out");
      localStorage.setItem("authToken", "");
      setdrawerButton("Login");
      window.location.reload();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        username,
        password,
      });

      const { data, status } = response;

      if (status === 200 && data.token) {
        localStorage.setItem("authToken", data.token);
        setUsername("");
        setPassword("");
        setdrawerButton("Logout");
        close(); // Close the drawer on successful login
        window.location.reload();
      } else {
        setErrorMessage("Unexpected response from the server.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Server error occurred."
        );
      } else if (error.request) {
        setErrorMessage("Network error. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
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
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </Drawer>

      <Button
        color="var(--color-primary)"
        variant="filled"
        onClick={handleDrawerButtonClick}
      >
        {drawerButton}
      </Button>
    </>
  );
}

export default LoginFormDrawer;
