import Link from "next/link"
import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
        <h1> CPRG 306: Web Development 2 </h1>
        <h2> Week 3 </h2>
        <ItemList/>

        <Link href="\"> Home  </Link>
      </main>
    );
  }