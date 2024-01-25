import Item from './item';

export default function ItemList() {
    const items = [
        {
            name: 'Apples',
            quantity: 7,
            category: 'Produce',
        },
        {
            name: 'Flour',
            quantity: 1,
            category: 'Bakery',
        },
        {
            name: 'Bread',
            quantity: 2,
            category: 'Bakery',
        },
        {
            name: 'Milk',
            quantity: 1,
            category: 'Dairy',
        },
        {
            name: 'Cheese',
            quantity: 1,
            category: 'Dairy',
        },
        {
            name: 'Chicken',
            quantity: 1,
            category: 'Meat',
        },
        {
            name: 'Beef',
            quantity: 1,
            category: 'Meat',
        },
        {
            name: 'Pork',
            quantity: 1,
            category: 'Meat',
        }
    ];

    // Looked up how to sort items by category.
    items.sort((a, b) => a.category.localeCompare(b.category));

    return (
        <main>
            <ul className="Text">
                {items.map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </main>
    );
}

    