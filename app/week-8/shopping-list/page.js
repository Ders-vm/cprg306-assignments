"use client"; 

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./mealidea";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData || []);
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleAddItem = (newItem) => {
    newItem.id = Math.random().toString(36).substr(2, 9); 
    setItems([...items, newItem]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <header>
      </header>
      <main className="flex flex-col md:flex-row">
        <div className="flex-1 md:mr-4">
          <div className="flex">
            <div className="flex-1">
              <ItemList items={items} onItemClick={handleItemClick} />
            </div>
            <div className="flex-1">
              <NewItem onAddItem={handleAddItem} />
            </div>
          </div>
        </div>
        <div className="flex-1 md:ml-4">
          {selectedItem && (
            <div className="mt-4">
              <MealIdeas ingredient={selectedItem.name} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
