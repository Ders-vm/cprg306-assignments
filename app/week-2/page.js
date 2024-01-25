import StudentInfo from "./student-info";
import Link from "next/link";


export default function Page() {
    return (
      <main>
        <StudentInfo/>
        <Link href="\"> Home  </Link>
      </main>
    ); 
  }