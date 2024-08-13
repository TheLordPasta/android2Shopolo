import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import "../styles/basic-form.css";
import "../App.css";
import StartUpContainerLogo from "./StartUpContainerLogo";

function SignUpFormDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message
  const [successMessage, setSuccessMessage] = useState(""); // Optional state to store success message
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        password,
        email,
      });
      setSuccessMessage("Sign-up succeeded!");
      setErrorMessage("");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage("No response received from server");
      } else {
        setErrorMessage("Error: " + error.message);
      }
      setSuccessMessage("");
    }
  };
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Sign Up To Shoppolo">
        <div className="logo-container">
          <StartUpContainerLogo />
        </div>
        <div className="basic-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}{" "}
          {/* Display success message */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
          {/* Display error message */}
        </div>
      </Drawer>

      <Button color="var(--color-primary)" variant="filled" onClick={open}>
        Sign Up
      </Button>
    </>
  );
}

export default SignUpFormDrawer;
