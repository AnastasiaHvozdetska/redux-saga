import React from 'react'
import Post from './Post'

interface Post
{
    title: string,
}

const FetchedPosts = ({posts} : { posts: Post[]}) => {
    if(!posts.length) {
        return (
           <button className="btn btn-primary">Load</button>
        )
    }
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(item => (
                <Post key={item.title} {...item}/>
            ))}
        </div>
    )
}

export default FetchedPosts
