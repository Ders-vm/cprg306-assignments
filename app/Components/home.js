import Link from 'next/link';

export default function HomeButton() {
  return (
    <div>
      <p className="bg-teal-500  text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
      Welcome to CPRG307: Web Development 2:&nbsp;
      
      <Link href="/">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Home
        </button>
      </Link>
      <Link href="/week-2">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 2
        </button>
      </Link>
      <Link href="/week-3">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 3
        </button>
      </Link>
      <Link href="/week-4">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 4
        </button>
      </Link>
      <Link href="/week-5">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 5
        </button>
      </Link>
      <Link href="/week-6">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 6
        </button>
      </Link>
      <Link href="/week-7">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 7
        </button>
      </Link>
      <Link href="/week-8">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Week 8
        </button>
      </Link>
      <Link href="/Demo">
        <button className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded border-2 border-teal-600">
        Demo
        </button>
      </Link>
      </p>
    </div>
  );
}


