// page.js

import { useUserAuth } from "./_utils/auth-context";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./mealidea";
import itemsData from "./items.json";
import HomeButton from "../Components/home";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData || []);
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item

  const handleAddItem = (newItem) => {
    newItem.id = Math.random().toString(36).substr(2, 9); // Generate a random id
    setItems([...items, newItem]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <header>
        <HomeButton />
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
