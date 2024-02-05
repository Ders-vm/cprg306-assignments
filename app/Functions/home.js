import Link from 'next/link';

export default function HomeButton() {
  return (
    <div>
      Welcome to CPRG307: Web Development 2:&nbsp;
      <Link href="/">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Home
        </button>
      </Link>
    </div>
  );
}


