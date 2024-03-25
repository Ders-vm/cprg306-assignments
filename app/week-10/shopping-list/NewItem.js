// NewItem.js
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !quantity || !category) {
            alert('Please fill in all fields');
            return;
        }
        const newItem = {
            name: name.trim(),
            quantity: parseInt(quantity),
            category: category
        };
        onAddItem(newItem);
        setName('');
        setQuantity('');
        setCategory('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-5 border-2 border-dashed border-teal-500 rounded-lg bg-teal-500 text-gray-800 w-fit mx-auto">
                <div className="mb-4">
                    <label className="block">
                        Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block">
                        Quantity:
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block">
                        Category:
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-700 focus:ring-opacity-50"
                        >
                            <option value="">Select an option</option>
                            <option value="produce">Produce</option>
                            <option value="bakery">Bakery</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="Misc">Misc</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded border-2 border-teal-600">
                    Submit
                </button>
            </form>
        </div>
    );
}
