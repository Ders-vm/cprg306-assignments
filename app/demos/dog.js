export default function Dog({name, breed , age}) {

    return (

        
        <section className="border-rose-500 border-2 p-2">
            <h1 className="text-4xl font-bold text-red-400 mb-3" >{name}</h1>
            <p>{breed}</p>
            <p>{age}</p>
        </section>
    );
}