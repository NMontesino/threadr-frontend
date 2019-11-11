import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'
import LoginForm from '../forms/LoginForm'
import Sidebar from './Sidebar'

class Body extends Component
{

    render() 
    {
        return(
            this.props.isLoggedIn ?
                <div>
                <Sidebar className="sidebar" />
                <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>
                <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost} user={this.props.user} currentThread={this.props.currentThread}/>
                 </div>
            :
            
                <div>
                    <LoginForm logIn={this.login} handleLogin={ this.props.handleLogin } handleLoginToggle={this.props.handleLoginToggle} />
                </div>
            
        )

    }

}

export default Body