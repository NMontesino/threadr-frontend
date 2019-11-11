import React, { Component } from 'react'

class ThreadForm extends Component{

    state = 
    {
        title: '',
        description: '',
        id: null 
    }

    handleChange = (event) => 
    {
        // console.log(this.state)

        this.setState(
        {
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => 
    {

        event.preventDefault()

        fetch('http://localhost:3000/channels', 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
            {
                title: this.state.title,
                description: this.state.description
            })
        })
        .then(res => res.json())
        .then(thread => this.props.handleAddNewThread(thread))
      }

    render()
    {
    
        return(

            <form onSubmit={ this.handleSubmit } style={{'display': 'flex', 'flexDirection': 'column', 'width': '200px', 'height': '200px'}}>

                <h2>Create Thread</h2>

                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder='Write Something' onChange={this.handleChange}/>
            
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" placeholder='Write Something' onChange={this.handleChange}/>

                <input type="submit" value="Submit" />
                
            </form>

        )

    }

}

export default ThreadForm