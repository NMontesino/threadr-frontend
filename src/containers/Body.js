import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'
import Login from '../components/Login'

class Body extends Component
{

    loggedIn = () =>
    {
        return true
    }

    logIn = (name) =>
    {
        console.log(name)
    }

    render()
    {
        return(
            this.loggedIn() ?
                <div>
                <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>
                <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost}/>
                 </div>
            :
            
                <div>
                    <Login logIn={ this.logIn } />
                </div>
            
        )

        // {
        //     return(
        //         <div>
        //             {
        //                 true ? <ThreadForm /> : <ThreadContainer />
        //             }
        //         </div>
        //     )
        // }
        // else
        // {
        //     return(
        //         <div>
        //             <Login logIn={ this.logIn } />
        //         </div>
        //     )
        // }
        // return(
        //     <div>
        //         <ThreadContainer posts={this.props.posts} value={this.props.value} handleAddNewPost={this.props.handleAddNewPost}/>
        //         <ThreadForm />
                
        //     </div>
        // )
    }

}

export default Body