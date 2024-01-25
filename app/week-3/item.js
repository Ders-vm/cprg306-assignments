export default function Item({name, quantity , category}) {

    return (
        <section className="border-2 p-2">
            <h1 className="text-2xl font-bold" >{name}</h1>
            <p>Category:{category}</p>
            <p>Quantity: {quantity}</p>
        </section>
    );
}