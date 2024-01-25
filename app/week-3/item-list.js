import Item from './item';



export default function ItemList() {
    const item1 = {
        name: 'Apples',
        quantity: 7,
        category: 'Produce',
    }
    const item2 = {
        name: 'Flour',
        quantity: 1,
        category: 'Bakery',
    }
    const item3 = {
        name: 'Bread',
        quantity: 2,
        category: 'Bakery',
    }
    const item4 = {
        name: 'Milk',
        quantity: 1,
        category: 'Dairy',
    }
    const item5 = {
        name: 'Cheese',
        quantity: 1,
        category: 'Dairy',
    }
    const item6 = {
        name: 'Chicken',
        quantity: 1,
        category: 'Meat',
    }
    const item7 = {
        name: 'Beef',
        quantity: 1,
        category: 'Meat',
    }
    const item8 = {
        name: 'Pork',
        quantity: 1,
        category: 'Meat',
    }


    return (
        <main>
            <li Class="Text ">
            <Item name={item1.name} quantity={item1.quantity} category={item1.category} />
            <Item name={item2.name} quantity={item2.quantity} category={item2.category} />
            <Item name={item3.name} quantity={item3.quantity} category={item3.category} />
            <Item name={item4.name} quantity={item4.quantity} category={item4.category} />
            <Item name={item5.name} quantity={item5.quantity} category={item5.category} />
            <Item name={item6.name} quantity={item6.quantity} category={item6.category} />
            <Item name={item7.name} quantity={item7.quantity} category={item7.category} />
            <Item name={item8.name} quantity={item8.quantity} category={item8.category} />
            </li>
        </main>
    );
}
    