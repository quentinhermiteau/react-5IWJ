'use client';

import { ThemeContext } from "@/app/layout";
import { AuthContext } from "@/contexts/AuthProvider";
import { usePostsStore } from "@/store/posts";
import { useContext } from "react";

export default () => {
    const { user } = useContext(AuthContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const posts = usePostsStore((state) => state.posts);

    // if (!user) {
    //     return (
    //         <div>
    //             <h1>Page</h1>
    //             <p>Not logged in</p>
    //         </div>
    //     )
    // }

    return (
        <div>
            {theme}
            {posts.length}

            <div>
                <button onClick={() => setTheme('light')}>Light</button>
                <button onClick={() => setTheme('dark')}>Dark</button>
            </div>
        </div>
    )
}