'use client'

import Button from '@/components/button'
import Card from '@/components/card'

export default () => {
    const recipes = [
        {name: 'Recette 1', content: 'Lorem ipsum dolor sit amet...'},
        {name: 'Recette 2', content: 'Lorem ipsum dolor sit amet...'},
        {name: 'Recette 3', content: 'Lorem ipsum dolor sit amet...'},
        {name: 'Recette 4', content: 'Lorem ipsum dolor sit amet...'},
    ];

    return (
        <div className="w-full">
            <div className="border-2 border-black m-4 flex justify-between">
                <h2 className="font-bold">Recettes</h2>
                <div>
                    <span className="mr-4">À propos</span>
                    <span>Newsletter</span>
                </div>
            </div>
            <div className="m-4 grid grid-cols-2 gap-4">
                {recipes.map(({name, content}) => (
                    <Card key={name}>
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className='text-gray-700 text-base'>{content}</p>
                        <div className='px-6 pt-4 pb-2 flex justify-end'>
                            <Button color='red'>Partager</Button>
                            <Button color='red'>Lire</Button>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="border-2 border-black m-4">
                <h2 className="font-bold">dskfjhsdfkj</h2>
                <div>Un site aux 1000 et 1 recettes</div>
                <div>
                    <Button color='purple'>Instagram</Button>
                    <Button color='blue'>Facebook</Button>
                </div>
            </div>
        </div>
    )
}