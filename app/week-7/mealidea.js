import { useState, useEffect } from "react";

// Helper function to remove non-ASCII characters (including emojis) from a string
const removeNonASCII = (str) => {
    return str.replace(/[^\x00-\x7F]/g, '');
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Define API Fetching Function
    const fetchMealIdeas = async (ingredient) => {
        try {
            const cleanedIngredient = removeNonASCII(ingredient.split(',')[0].trim()); // Remove non-ASCII characters and anything after a comma
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(cleanedIngredient)}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    // Define Load Function
    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    // Use the useEffect Hook
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // Render the Component
    return (
        <div>
            <h2>Meal Ideas with {ingredient}:</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
