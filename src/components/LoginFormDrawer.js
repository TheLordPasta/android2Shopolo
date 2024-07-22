import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import React, { useState } from "react";
import "../styles/basic-form.css";
import "../App.css";

function LoginFormDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password.");
    }
  };
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Log In To Shoppolo">
        <div className="basic-form">
          <h2>Login</h2>
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
            <button type="submit">Login</button>
          </form>
          <p>{message}</p>
        </div>
      </Drawer>

      <Button color="darkslateblue" variant="filled" onClick={open}>
        Login
      </Button>
    </>
  );
}

export default LoginFormDrawer;
