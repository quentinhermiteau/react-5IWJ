'use client';

import { usePostsStore } from "@/store/posts";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default () => {
    const { posts, post, getPosts, getPost, deletePost } = usePostsStore((state) => state);
    const router = useRouter()

    const array = [5, 4, 3, 2, 1];

    array.sort((a, b) => a - b);
    array.toSorted((a, b) => a - b);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {/* <button onClick={() => router.push('/context')}>Go to context</button> */}
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={() => router.push(`/store/${post.id}`)}>Detail</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}