import React, { useState } from "react";
import { Tabs, rem, SimpleGrid, NumberInput } from "@mantine/core";
import { IconMan, IconWoman, IconSnowman } from "@tabler/icons-react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

function CategotiesTabs({ menItems, womenItems, creatureItems }) {
  const iconStyle = { width: rem(30), height: rem(30) };
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(""); // נוסף
  const [maxPrice, setMaxPrice] = useState(""); // נוסף

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    if (!maxPrice || maxPrice < minPrice) {
      setMaxPrice(event.target.value);
    }
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterItems = (items) => {
    return items.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!minPrice || item.price >= parseFloat(minPrice)) &&
        (!maxPrice || item.price <= parseFloat(maxPrice))
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
        <div className="search-filters">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            step={10}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            step={10}
            onChange={handleMaxPriceChange}
            className="price-input"
          />
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(menItems).map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="women">
        <div className="search-filters">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            step={10}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            step={10}
            onChange={handleMaxPriceChange}
            className="price-input"
          />
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(womenItems).map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="creatures">
        <div className="search-filters">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            step={10}
            onChange={handleMinPriceChange}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            step={10}
            onChange={handleMaxPriceChange}
            className="price-input"
          />
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <SimpleGrid cols={5} spacing="sm">
          {filterItems(creatureItems).map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
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
