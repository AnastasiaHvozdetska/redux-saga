import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

export const Posts = ({ syncPosts }) => {
    if(!syncPosts.length) {
        return (
            <p>there are no posts</p>
        )
    }
    return (
        <div>
            {syncPosts.map(item => (
                <Post key={item.title} {...item}/>
            ))}
        </div>
    )
}


const mapStateToProps = state => ({
    syncPosts: state.posts.posts
})

export default connect(mapStateToProps, null)(Posts)
