import React from "react";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

function CategotiesTabs({ menItems, womenItems, creatureItems }) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs
      color="#a55aff"
      radius="lg"
      orientation="vertical"
      defaultValue="men" // Set a default value
    >
      <Tabs.List>
        <Tabs.Tab value="men" leftSection={<IconPhoto style={iconStyle} />}>
          Men
        </Tabs.Tab>
        <Tabs.Tab
          value="women"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Women
        </Tabs.Tab>
        <Tabs.Tab
          value="creatures"
          leftSection={<IconSettings style={iconStyle} />}
        >
          Creatures
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="men">
        <SearchBar />
        {menItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </Tabs.Panel>

      <Tabs.Panel value="women">
        <SearchBar />
        {womenItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </Tabs.Panel>

      <Tabs.Panel value="creatures">
        <SearchBar />
        {creatureItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </Tabs.Panel>
    </Tabs>
  );
}

export default CategotiesTabs;
