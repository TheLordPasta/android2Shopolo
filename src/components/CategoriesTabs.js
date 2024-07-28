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

  const filterItems = (items) => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Tabs
      color="#a55aff"
      radius="lg"
      orientation="vertical"
      defaultValue="men"
      size="lg"
      styles={{
        tabLabel: {
          fontSize: rem(30),
          fontWeight: 500,
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
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(menItems).map((item, index) => (
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
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(womenItems).map((item, index) => (
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
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(creatureItems).map((item, index) => (
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
