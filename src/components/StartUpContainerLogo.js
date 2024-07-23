import React from "react";
import { Container } from "@mantine/core";
import logo from "../resourses/logoShopolo.png";

//const logo = src
function StartUpContainerLogo() {
  const demoProps = {
    bg: "white",
    p: "0px",
    h: "500px",
  };

  return (
    <>
      <Container px={0} width="100%" {...demoProps}>
        <img src={logo} />
      </Container>
    </>
  );
}

export default StartUpContainerLogo;
