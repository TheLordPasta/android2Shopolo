import React, { useState } from "react";
import { Tabs, rem, SimpleGrid } from "@mantine/core";
import { IconMan, IconWoman, IconSnowman } from "@tabler/icons-react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

function CategotiesTabs({ menItems, womenItems, creatureItems }) {
  const iconStyle = { width: rem(30), height: rem(30) };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredMenItems = menItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWomenItems = womenItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCreatureItems = creatureItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Tabs
      color="#a55aff"
      radius="lg"
      orientation="vertical"
      defaultValue="men" // Set a default value
      size="lg"
      styles={{
        tabLabel: {
          fontSize: rem(30), // Adjust the font size here
          fontWeight: 500, // Optional: Adjust the font weight if needed
        },
      }}
    >
      <Tabs.List className="Tabs">
        <Tabs.Tab value="men" leftSection={<IconMan style={iconStyle} />}>
          Men
        </Tabs.Tab>
        <Tabs.Tab value="women" leftSection={<IconWoman style={iconStyle} />}>
          Women
        </Tabs.Tab>
        <Tabs.Tab
          value="creatures"
          leftSection={<IconSnowman style={iconStyle} />}
        >
          Creatures
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="men">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <SimpleGrid cols={5} spacing="sm">
          {filteredMenItems.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="women">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <SimpleGrid cols={5} spacing="sm">
          {filteredWomenItems.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="creatures">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <SimpleGrid cols={5} spacing="sm">
          {filteredCreatureItems.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>
  );
}

export default CategotiesTabs;
