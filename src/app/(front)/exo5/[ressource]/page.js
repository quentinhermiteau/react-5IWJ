'use client'

import { useEffect, useState } from "react";
import Header from '../_components/header/index'

export default ({ params }) => {
    console.log(params.ressource);
    const ressources = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params.ressource && ressources.includes(params.ressource)) {
            setLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/${params.ressource}`)
                .then(response => response.json())
                .then(json => {
                    if (params.ressource === 'users') {
                        setData(json.map(item => {
                            console.log(item);
                            return { ...item, address: item.address.city, company: item.company.name }
                        }))
                    } else {
                        setData(json)
                    }

                    setLoading(false);
                })
        }
    }, [])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <div>
                <table>
                    <thead>
                        {data && data[0] && Object.keys(data[0]).map(header => (
                            typeof data[0][header] !== 'object' && <Header>{header}</Header>
                        ))}
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                {Object.values(item).map(row => (
                                    typeof row !== 'object' && <td>{row}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}