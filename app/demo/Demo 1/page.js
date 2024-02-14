import HomeButton from "../../Functions/home";
import Counter from "./counter";
import DogForm from "./form";

export default function Page() {
    return (
      <main>
        <h1> CPRG 306: Web Development 2 </h1>
        <HomeButton />
        <h2>Week 4</h2>
        <Counter />
        <DogForm />
        
      </main>
    );
  }