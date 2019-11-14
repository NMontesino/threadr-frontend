import React, { Component } from 'react'
import PostComponent from '../components/PostComponent'
import NewPostForm from '../forms/NewPostForm'

class ThreadContainer extends Component
{

    render()
    {
        const posts = this.props.posts.map((post) => 
        {
            return <PostComponent post={post} deletePost={this.props.deletePost} editPost={this.props.editPost} />
        })
        return(
            <div>
                {posts}
                <NewPostForm value={this.props.value} handleAddNewPost={this.props.handleAddNewPost} currentThread={ this.props.currentThread } user={ this.props.user } />
            </div>
        )
    }

}

export default ThreadContainer