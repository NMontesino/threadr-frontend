import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'
import LoginForm from '../forms/LoginForm'


class Body extends Component
{

    render()
    {
        return(

            this.props.isLoggedIn
            ?
                <div>
                    <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>
                    <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost} editPost={this.props.editPost} deletePost={this.props.deletePost} currentThread={ this.props.currentThread } user={ this.props.user } />
                </div>
            :
                <div>
                    <LoginForm logIn={this.login} handleLogin={ this.props.handleLogin } handleLoginToggle={this.props.handleLoginToggle} />
                </div>
 
        )
    }

}

export default Body