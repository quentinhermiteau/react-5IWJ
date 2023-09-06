'use client';

export default () => {
    const ingredients = [
        'Farine',
        'Lait',
        'Sucre',
        'Sel',
        'Citron',
        'Vanille',
    ];

    const handleClick = event => {
        event.preventDefault();

        alert('souscrit');
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert("souscrit");
    }

    return (
        <>
            <h1>Les crèpes au citron</h1>

            <h3>Ingrédients</h3>

            <ul>
                {ingredients.map(ingredient => (
                    <li style={{listStyleType: 'none'}}>{ingredient}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <button type="button" onClick={() => alert('souscrit')}>Souscrire</button>
                <button onClick={handleClick}>Souscrire</button>
                <button>Souscrire</button>
            </form>
        </>
    )
}