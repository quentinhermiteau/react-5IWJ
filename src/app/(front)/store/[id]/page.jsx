'use client';

import { usePostsStore } from "@/store/posts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default ({ params }) => {
    const router = useRouter();
    const { post, getPost } = usePostsStore((state) => state);

    useEffect(() => {
        getPost(params.id);
    }, [params]);

    return (
        <div>
            <button onClick={() => router.back()}>Back</button>
            Détail post
            {post.title}
        </div>
    )
}