// ItemList.js
import { useState } from 'react';
import Item from './Item';

export default function ItemList({ items, onItemClick }) {
    const [viewMode, setViewMode] = useState('list'); // 'list', 'category'

    // Sort items alphabetically by name or category
    const sortedItems = [...items].sort((a, b) => {
        if (viewMode === 'name') {
            return a.name.localeCompare(b.name);
        } else if (viewMode === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Group items by category
    const groupedByCategory = items.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    // Sort categories and their items alphabetically
    const sortedAndGroupedItems = Object.keys(groupedByCategory).sort().reduce((acc, category) => {
        acc[category] = groupedByCategory[category].sort((a, b) => a.name.localeCompare(b.name));
        return acc;
    }, {});

    return (
        <div>
            <div>
                <button onClick={() => setViewMode('name')} className={`bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600 ${viewMode === 'name' ? '' : 'opacity-50'}`}>
                    Sort by Name
                </button>
                <button onClick={() => setViewMode('category')} className={`bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600 ${viewMode === 'category' ? '' : 'opacity-50'}`}>
                    Sort by Category
                </button>
                <button onClick={() => setViewMode('grouped')} className={`bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600 ${viewMode === 'grouped' ? '' : 'opacity-50'}`}>
                    Group by Category
                </button>
            </div>
            {viewMode !== 'grouped' && sortedItems.map((item) => (
                <div key={item.id} onClick={() => onItemClick(item)}> {/* Add onClick handler */}
                    <Item {...item} />
                </div>
            ))}
            {viewMode === 'grouped' && Object.entries(sortedAndGroupedItems).map(([category, items]) => (
                <div key={category}>
                    <h2 className="capitalize">{category}</h2>
                    {items.map((item) => (
                        <div key={item.id} onClick={() => onItemClick(item)}> {/* Add onClick handler */}
                            <Item {...item} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
