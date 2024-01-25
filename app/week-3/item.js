import React from 'react';

export default function Item({ name, quantity, category }) {
    return (
        <section className="border-2 p-2 m-2 background-red">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
            <div>
                <input type="checkbox" id={`checkbox-${name}`} />
                <label htmlFor={`checkbox-${name}`}>Check</label>
            </div>
        </section>
    );
}
