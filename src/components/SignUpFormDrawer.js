import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import "../styles/basic-form.css";
import "../App.css";
import logo from "../resourses/logoShopolo.png";

function SignUpFormDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/signup", {
        username,
        password,
        email,
      });
      console.log("mor succeded");
    } catch (error) {
      //setMessage("Sign-up failed: " + error.response.data);
      console.log("mor un-succeded");
    }
  };
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Sign Up To Shoppolo">
        <div className="logo-container">
          <img src={logo} />
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
        </div>
      </Drawer>

      <Button color="var(--color-primary)" variant="filled" onClick={open}>
        Sign Up
      </Button>
    </>
  );
}

export default SignUpFormDrawer;
