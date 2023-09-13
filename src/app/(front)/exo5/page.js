'use client'

import Link from "next/link"

export default () => {
    const links = [
        { link: '/exo5/posts', label: 'posts' },
        { link: '/exo5/comments', label: 'comments' },
        { link: '/exo5/albums', label: 'albums' },
        { link: '/exo5/photos', label: 'photos' },
        { link: '/exo5/todos', label: 'todos' },
        { link: '/exo5/users', label: 'users' },
    ];

    return (
        <>
            {links.map(({link, label}) => <Link href={link}>{label}</Link>)}
        </>
    )
}