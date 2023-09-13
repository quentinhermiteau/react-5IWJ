'use client'

import { useEffect, useState } from "react";

export default () => {
    const [count, setCount] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const fullName = firstname && lastname ? `${firstname} - ${lastname}` : ''

    console.log('render');

    useEffect(() => {
        console.log('mount');

        return () => {
            console.log('destroy');
        }
    }, []);

    useEffect(() => {
        console.log('count a été update')
        if (count > 5) {
            console.log('count vaut au moins 5');
        }
    }, [count])

    // useEffect(() => {
    //     if (firstname && lastname) {
    //         setFullName(firstname + ' - ' + lastname)
    //     }
    // }, [firstname, lastname])

    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>
                <label>Firstname</label>
                <input onChange={event => setFirstname(event.target.value)} />
                <label>Lastname</label>
                <input onChange={event => setLastname(event.target.value)} />
                <div>
                    {fullName}
                </div>
            </div>
        </>
    )
}