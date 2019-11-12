import React, { Component } from 'react'
import ThreadContainer from './ThreadContainer'
import ThreadForm from '../forms/ThreadForm'



class Body extends Component
{

    render()
    {
        return(
            
                <div>
                    <ThreadForm handleAddNewThread={this.props.handleAddNewThread}/>
                    <ThreadContainer posts={this.props.posts}
                                        value={this.props.value}
                                        handleAddNewPost={this.props.handleAddNewPost} editPost={this.props.editPost}
                                        deletePost={this.props.deletePost}
                                        currentThread={ this.props.currentThread }
                                        user={ this.props.user } />
                </div>
            
        )
    }

}

export default Body