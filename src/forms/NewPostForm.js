import React, { Component } from 'react'

class NewPostForm extends Component
{

    state = 
    {
        title: '',
        content: ''
    }

    handleChange = (event) => 
    {
        console.log(this.state)

        this.setState(
        {
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => 
    {
        event.preventDefault()
        this.props.handleAddNewPost(this.state)
    }

    render()
    {

        console.log(this.state.value)
    
        return(

            <form onSubmit={this.handleSubmit}>

                <label for="title">Title</label>   
                <input type="text" name="title" placeholder='Write Something' onChange={this.handleChange}/>
                
                <label for="content">Content</label>
                <textarea type="text" name="content" placeholder='Write Something' onChange={this.handleChange}/>

                <input type="submit" value="Submit" />

            </form>

        )

    }

}

export default NewPostForm