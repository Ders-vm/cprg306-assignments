// Page.js
"use client";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./items.json";
import HomeButton from "../Components/home";

export default function Page() {
  const [items, setItems] = useState(itemsData || []);

  const handleAddItem = (newItem) => {
    newItem.id = Math.random().toString(36).substr(2, 9); // Generate a random id
    setItems([...items, newItem]);
  };

  return (
    <div>
      <header>
        <HomeButton />
      </header>
      <main className="flex">
        <ItemList items={items} />
        <div className="flex-none p-4">
          <NewItem onAddItem={handleAddItem} />
        </div>
      </main>
    </div>
  );
}
