import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'

class Body extends Component
{

    render()
    {
        return(
            <div>
                <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost}/>
                <ThreadForm />
                
            </div>
        )
    }

}

export default Body