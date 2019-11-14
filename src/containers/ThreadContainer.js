import React, { Component } from 'react'
import PostComponent from '../components/PostComponent'
import NewPostForm from '../forms/NewPostForm'
import Button from '@material-ui/core/Button'

class ThreadContainer extends Component
{
    state={
        clicked: false
    }

    togglePostForm= () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render()
    {
        const posts = this.props.posts.map((post) => 
        {
            return <PostComponent post={post} deletePost={this.props.deletePost} editPost={this.props.editPost} />
        })
        return(
            <div>
                
                <Button onClick={this.togglePostForm}>Add Post</Button>

                {this.state.clicked && <NewPostForm 
                                            value={this.props.value}            
                                            handleAddNewPost={this.props.handleAddNewPost}              currentThread={ this.props.currentThread } 
                                            user={ this.props.user } />}
            </div>
        )
    }

}

export default ThreadContainer