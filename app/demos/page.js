import Doglist from './doglist.js';

    const dog1 = {
        name: 'Leviathan',
        breed: 'Great Pyrenees/Border Collie mix',
        age: 7,
    }
    const dog2 = {
        name: 'Jellybean',
        breed: 'Golden Retriever',
        age: 4,
    }
    const dog3 = {
        name: 'Frank',
        breed: 'Dachshund',
        age: 2,
    }

export default function Page() {
    return (
        <main>
            <h1> CPRG 306: Web Development 2 </h1>
            <h2> Week 3 </h2>
            <Dog dog1={dog1} dog2={dog2} dog3={dog3} />
        </main>
    );
}
