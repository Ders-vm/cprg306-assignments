import ItemList from "./item-list";
import Link from 'next/link';
import HomeButton from "../Functions/home";

export default function Page() {
    return (
      <main>
        <h1> CPRG 306: Web Development 2 </h1>
        <h2> Week 3 </h2>
        <HomeButton/>
        <ItemList/>
      </main>
    );
}
