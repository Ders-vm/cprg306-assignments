// Item.js
export default function Item({ name, quantity, category }) {
    return (
        <section style={{ border: '2px solid teal' }} className="p-2 m-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </section>
    );
}
