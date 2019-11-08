import React, { Component } from 'react'
import PostComponent from '../components/PostComponent'
import NewPostForm from '../forms/NewPostForm'

class ThreadContainer extends Component
{

    render()
    {
        return(
            <div>
                <PostComponent post={this.props.posts}/>
                <NewPostForm value={this.props.value} handleAddNewPost={this.props.handleAddNewPost}/>
            </div>
        )
    }

}

export default ThreadContainer