"use client";
import { useState, useEffect } from "react";
import HomeButton from "../Components/home";
import Image from "next/image";

export default function Page() {
    const getDog = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogUrl(data.message);
        return data.message;
    }

    const getDogBreed = async () => {
        const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
        const data = await response.json();
        const breeds = Object.keys(data.message);
        setBreeds(breeds);
        return breeds;
    }

    const [dogUrl, setDogUrl] = useState("");
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        getDog();
        getDogBreed();
    }, []);

    return (
        <main>
            <HomeButton />
            <h1>Random Dog Image</h1>
            <Image src={dogUrl} alt="A Random Dog" width={300} height={200} />
            <select name="breed" id="breed">
                {breeds.map((breed) => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
            </select>
            
            <button onClick={getDog}>New Dog</button>
        </main>
    );
}
