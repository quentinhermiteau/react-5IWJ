'use client';

export default () => {
    const handleClick = () => alert('click!');

    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => alert('click!')}>Click me!</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>Click me!</button>
        </>
    )
}