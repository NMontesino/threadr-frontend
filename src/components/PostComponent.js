import React, { Component } from 'react'

class PostComponent extends Component
{
    state = 
    {
        editing: false,
        title: this.props.post.title,
        body: this.props.post.body
    }

    handleChange = (event) => 
    {
        // console.log(this.state)

        this.setState(
        {
            [event.target.name]: event.target.value
        })
    }

    handleDeletePost = (post) =>
    {
        fetch(`http://localhost:3000/posts/${post.id}`, 
        {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => 
        {
            this.props.deletePost(post)
        })
    }

    handleEditPost = () =>
    {
        this.setState(
        {
            editing: true
        })
    }

    handleEditSubmit = (post, e) =>
    {
        e.preventDefault()
        console.log(e, post)
        fetch(`http://localhost:3000/posts/${post.id}`, 
        {
            method: "PATCH",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
            {
                title: this.state.title,
                body: this.state.body
            })
        })
        .then(res => res.json())
        .then((newPost) => 
        {
            console.log(newPost)
            this.setState(
            {
                editing: false
            }, 
            this.props.editPost(newPost)
            )
        })
    }

    render()
    {
        // console.log(this.props)
        return(
            <div>
                <p><span onClick={() => this.handleDeletePost(this.props.post)}>X</span>  {this.props.post.title}</p>
                <p>{this.props.post.body}</p>
                <p><span onClick={this.handleEditPost}> - Edit</span></p>
                <br />
                {
                    this.state.editing 
                    ?
                    <form onSubmit={(e) => this.handleEditSubmit(this.props.post, e)} style={{'display': 'flex', 'flexDirection': 'column', 'width': '200px', 'height': '200px'}}>

                        <h2>Edit Post</h2>

                        <label htmlFor="title">Title</label>   
                        <input type="text" name="title" placeholder='Write Something' onChange={this.handleChange} value={this.state.title} />
                        <br />
                        <label htmlFor="body">Body</label>
                        <textarea type="text" name="body" placeholder='Write Something' onChange={this.handleChange} value={this.state.body} />
                        <br />
                        <input type="submit" value="Submit" />

                    </form>
                    :
                    null
                }
            </div>
        )
    }

}

export default PostComponent