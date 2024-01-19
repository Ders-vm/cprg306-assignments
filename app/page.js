import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="week-buttons">
        <Link href="week-2">Week 2</Link>
        <Link href="week-3">Week 3</Link>
        <Link href="week-4">Week 4</Link>
        <Link href="week-5">Week 5</Link>
        <Link href="week-6">Week 6</Link>
      </div>

      <style jsx>{`
        .week-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .week-buttons a {
          display: inline-block;
          padding: 20px 40px;
          margin: 10px;
          background-color: #007BFF;
          color: #fff;
          text-align: center;
          text-decoration: none;
          border-radius: 10px;
          font-size: 18px;
          transition: background-color 0.3s ease;
        }

        .week-buttons a:hover {
          background-color: #0056b3;
        }
      `}</style>
    </main>
  );
}
