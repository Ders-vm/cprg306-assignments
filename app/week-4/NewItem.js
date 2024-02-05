"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item Added: ${name}, ${quantity}, ${category}`);
    
    // Reset the form fields after displaying the alert
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <br />
      <label>
                Quantity:
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
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
      <br />
      <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Produce">Produce</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Misc">Misc</option>
                </select>
            </label>
      <br />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600"
        >
        Submit
    </button>

    </form>
  );
}







