"use client"
import { useState } from "react";
export default function DogForm(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState("");


    return (
        <div>
            <h2 className="text 2x1 mt-4">Dog Form</h2>
            
            <form onSubmit={(event) => {
                event.preventDefault(); // Prevents the page from reloading
                const dog = {name, age, breed};
                console.log(dog);
            }}>
                <label>
                    Name:
                    <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Age:
                    <input
                    type="number"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    />
                </label>
                <label>
                    Breed:
                    <input
                    type="text"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                    />
                </label>
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}