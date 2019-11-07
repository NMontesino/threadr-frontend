import React, { Component } from 'react'
import PostComponent from '../components/PostComponent'
import NewPostForm from '../forms/NewPostForm'

class ThreadContainer extends Component
{

    render()
    {
        return(
            <div>
                <PostComponent />
                <NewPostForm />
            </div>
        )
    }

}

export default ThreadContainer