import ItemList from "./item-list";
import Link from 'next/link';

export default function Page() {
    return (
      <main>
        <h1> CPRG 306: Web Development 2 </h1>
        <Link href="/"> Home </Link>
        <h2> Week 3 </h2>
        
        <ItemList/>
      </main>
    );
}
