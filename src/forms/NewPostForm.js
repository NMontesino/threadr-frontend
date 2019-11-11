import React, { Component } from 'react'

class NewPostForm extends Component{
    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()

        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.content,
                user_id: this.props.user.id,
                channel_id: this.props.currentThread.id
            })
        })
        .then(res => res.json())
        .then(post => this.props.handleAddNewPost(post))
        
      }


    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                    <input type="text" name="title" placeholder='Write Something' onChange={this.handleChange}/>
                </label>
                <label>
                    Content
                    <textarea type="text" name="content" placeholder='Write Something' onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default NewPostForm