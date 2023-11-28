import { create } from 'zustand'

export const usePostsStore = create((set, get) => ({
  posts: [],
  post: {},

  getPosts: () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => set({ posts: json }))
  },
  getPost: (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => set({ post: json }))
  },
  deletePost: (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => {
        const posts = get().posts.filter((post) => post.id !== postId)
        set({ posts })
    })
  }
}))
