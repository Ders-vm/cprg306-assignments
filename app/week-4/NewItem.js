"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item Added \nName: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);
    
    // Reset the form fields after displaying the alert
    setName("");
    setQuantity("");
    setCategory("");
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-5 border-2 border-dashed border-teal-500 rounded-lg bg-teal-500 text-gray-800 w-fit mx-auto">
        <div className="mb-4">
          <label className="block">
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50"/>
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            Quantity:
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50">
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10+">10+</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50">
              <option value="">Select an option</option>
              <option value="Produce">Produce</option>
              <option value="Bakery">Bakery</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Misc">Misc</option>
              </select>
          </label>
        </div>
        <button type="submit"
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded border-2 border-teal-600">
          Submit
        </button>
      </form>
    </div>
  );
}
