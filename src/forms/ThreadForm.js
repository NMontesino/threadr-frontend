import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import renderHTML from 'react-render-html'

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
                <ReactQuill  
                modules={ThreadForm.modules}
                formats={ThreadForm.modules}
                placeholder='Write Something' 
                onChange={this.handleChange} 
                value={this.state.description}/>

                <input type="submit" value="Submit" />
                
            </form>

        )

    }

}
ThreadForm.modules = {
    toolbar: [
        [[{header: '1'}, {header: '2'}, {header: '3'}], {font: '1'}]
    ]
}


export default ThreadForm