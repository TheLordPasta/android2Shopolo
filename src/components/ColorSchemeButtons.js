import { useMantineColorScheme, Button, Group } from "@mantine/core";

function ColorSchemeButtons() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button
        color="var(--color-primary)"
        onClick={() => setColorScheme("light")}
      >
        Light
      </Button>
      <Button
        color="var(--color-primary)"
        onClick={() => setColorScheme("dark")}
      >
        Dark
      </Button>
    </Group>
  );
}

export default ColorSchemeButtons;
