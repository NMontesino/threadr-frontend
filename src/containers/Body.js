import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'
import Login from '../components/Login'

class Body extends Component
{

    render()
    {
        return(

            this.props.isLoggedIn
            ?
                <div>
                    <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>
                    <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost}/>
                </div>
            :
                <div>
                    <Login handleLogin={ this.props.handleLogin } />
                </div>
 
        )
    }

}

export default Body