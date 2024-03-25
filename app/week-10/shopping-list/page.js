"use client";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page({ user }) {

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  
  

  function handleAddItem(item) {
    // Check if user and user.uid are defined before calling addItem
    if (user && user.uid) {
      addItem(user.uid, item)
        .then((itemId) => {
          const newItem = { id: itemId, ...item };
          setItems((prevItems) => [...prevItems, newItem]); 
        })
        .catch((error) => {
          console.error("Error adding item:", error);
        });
    } else {
      console.error("User object or user.uid is undefined");
    }
  }
  

  function handleItemClick(item) {
    setSelectedItem(item);
  }

  return (
    <div>
      <header></header>
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
