import React, { useEffect, useState } from "react";
import { Flex, useMantineColorScheme } from "@mantine/core";
import logoLight from "../resourses/logoShopoloLight.png";
import logoDark from "../resourses/logoShopoloDark.png";
import { useNavigate } from "react-router-dom";

function StartUpContainerLogo() {
  const { colorScheme } = useMantineColorScheme();
  const navigate = useNavigate();
  const [logoSrc, setLogoSrc] = useState(logoLight); // Initial state with light logo

  useEffect(() => {
    if (colorScheme === "dark") {
      setLogoSrc(logoDark);
    } else {
      setLogoSrc(logoLight);
    }
  }, [colorScheme]);

  return (
    <Flex justify='center' px={0} py={20} width="100%">
      <img onClick={() => navigate('/')} style={{ cursor: 'pointer' }} src={logoSrc} alt="Shopolo Logo" />
    </Flex>
  );
}

export default StartUpContainerLogo;
