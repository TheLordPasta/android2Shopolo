import React, { useEffect, useState } from "react";
import { Container, useMantineColorScheme } from "@mantine/core";
import logoLight from "../resourses/logoShopoloLight.png";
import logoDark from "../resourses/logoShopoloDark.png";

function StartUpContainerLogo() {
  const { colorScheme } = useMantineColorScheme();
  const [logoSrc, setLogoSrc] = useState(logoLight); // Initial state with light logo

  useEffect(() => {
    if (colorScheme === "dark") {
      setLogoSrc(logoDark);
    } else {
      setLogoSrc(logoLight);
    }
  }, [colorScheme]);

  return (
    <Container px={0} width="100%">
      <img src={logoSrc} alt="Shopolo Logo" />
    </Container>
  );
}

export default StartUpContainerLogo;
